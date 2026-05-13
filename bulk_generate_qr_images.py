import os
import sys
import csv

# Provide clear instructions if qrcode or PIL are missing
try:
    import qrcode
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("❌ Missing required libraries. Please install them first by running:")
    print(".venv/bin/pip install qrcode pillow")
    sys.exit(1)

def generate_bulk_images():
    output_dir = "public/QR codes"
    os.makedirs(output_dir, exist_ok=True)
    
    # First, gather all records exactly as generated in certificates.ts
    records = []
    
    # 1. Base requested test example
    records.append({
        "id": "TSH26-A7X91K",
        "name": "Rahul Sharma",
        "college": "CMRIT"
    })
    
    name_indices = [6, 10, 13, 16, 19, 22, 25]
    counter = 1001
    
    csv_path = os.path.join(os.path.dirname(__file__), 'public', 'data.csv')
    if os.path.exists(csv_path):
        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            next(reader, None) # skip header
            for row in reader:
                if not row or len(row) < 7:
                    continue
                college = row[4].strip() if len(row) > 4 else "CMRIT"
                if not college:
                    college = "CMRIT"
                for idx in name_indices:
                    if idx < len(row):
                        name = row[idx].strip()
                        if name:
                            if name.lower() == "rahul sharma" and "cmrit" in college.lower():
                                continue
                            records.append({
                                "id": f"TSH26-{counter}",
                                "name": name,
                                "college": college
                            })
                            counter += 1

    print(f"🚀 Starting bulk generation of {len(records)} QR badge images...")
    print(f"📁 Output Folder: '{output_dir}/'")
    print("ℹ️ Each composite image file will be named exactly after the participant's name.\n")

    # Load default font which works perfectly cross-platform without external TTF files
    font = ImageFont.load_default()
    
    success_count = 0
    for cert in records:
        # 1. Target live verification link
        target_url = f"https://social-hackathon.vercel.app/verify?id={cert['id']}"
        
        # 2. Generate QR code image
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=10,
            border=2,
        )
        qr.add_data(target_url)
        qr.make(fit=True)
        
        qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
        qr_width, qr_height = qr_img.size
        
        # 3. Create a composite badge image with extra blank space at the bottom for the unique ID caption
        caption_height = 50
        total_width = qr_width
        total_height = qr_height + caption_height
        
        badge_img = Image.new("RGB", (total_width, total_height), "white")
        badge_img.paste(qr_img, (0, 0))
        
        # 4. Draw the unique ID securely just below the QR code
        draw = ImageDraw.Draw(badge_img)
        caption_text = cert['id']
        
        # Calculate approximate text size to center it perfectly
        # PIL default font character width is ~6px and height is ~11px
        text_width = len(caption_text) * 6
        text_x = (total_width - text_width) // 2
        text_y = qr_height + 10
        
        draw.text((text_x, text_y), caption_text, fill="black", font=font)
        
        # 5. Clean up filename strictly keeping the participant name
        safe_name = "".join(c for c in cert['name'] if c.isalnum() or c in " ._-").strip()
        if not safe_name:
            safe_name = cert['id']
            
        file_path = os.path.join(output_dir, f"{safe_name}.png")
        
        try:
            badge_img.save(file_path)
            success_count += 1
        except Exception as e:
            print(f"⚠️ Failed to save image for {cert['name']}: {e}")
            
    print(f"\n✅ Successfully generated {success_count} participant-named composite QR images in '{output_dir}/'!")

if __name__ == "__main__":
    generate_bulk_images()
