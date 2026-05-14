import os
import sys
import csv

# Provide clear instructions if qrcode is missing
try:
    import qrcode
except ImportError:
    print("❌ Missing required library. Please install it first by running:")
    print(".venv/bin/pip install qrcode pillow")
    sys.exit(1)

def generate_pure_images():
    # Target exactly the folder requested by the user
    output_dir = "public/qr codes(no code)"
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

    print(f"🚀 Starting bulk generation of {len(records)} PURE QR code images (no text captions)...")
    print(f"📁 Output Folder: '{output_dir}/'")
    print("ℹ️ Each image file will be named exactly after the participant's name.\n")

    success_count = 0
    for cert in records:
        # 1. Target live verification link
        target_url = f"https://social-hackathon.vercel.app/verify?id={cert['id']}"
        
        # 2. Generate pure QR code image
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=10,
            border=2,
        )
        qr.add_data(target_url)
        qr.make(fit=True)
        
        # Pure QR Code without any caption text or extended padding below it
        qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
        
        # 3. Clean up filename strictly keeping the participant name
        safe_name = "".join(c for c in cert['name'] if c.isalnum() or c in " ._-").strip()
        if not safe_name:
            safe_name = cert['id']
            
        file_path = os.path.join(output_dir, f"{safe_name}.png")
        
        try:
            qr_img.save(file_path)
            success_count += 1
        except Exception as e:
            print(f"⚠️ Failed to save image for {cert['name']}: {e}")
            
    print(f"\n✅ Successfully generated {success_count} participant-named pure QR images in '{output_dir}/'!")

if __name__ == "__main__":
    generate_pure_images()
