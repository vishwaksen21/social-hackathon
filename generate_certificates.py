import csv
import json

def generate():
    records = []
    
    # 1. Add the explicit example record requested in the prompt to ensure the sample link works perfectly
    records.append({
        "id": "TSH26-A7X91K",
        "name": "Rahul Sharma",
        "college": "CMRIT",
        "role": "Participant",
        "status": "Verified",
        "event": "The Social Hackathon’26",
        "issueDate": "May 14, 2026"
    })

    # Indices of full name columns in data.csv
    name_indices = [6, 10, 13, 16, 19, 22, 25]
    
    counter = 1001
    
    with open('public/data.csv', 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader, None) # skip header
        
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
                        # Avoid duplicating the sample Rahul Sharma if he appears exactly
                        if name.lower() == "rahul sharma" and "cmrit" in college.lower():
                            continue
                            
                        cert_id = f"TSH26-{counter}"
                        counter += 1
                        
                        records.append({
                            "id": cert_id,
                            "name": name,
                            "college": college,
                            "role": "Participant",
                            "status": "Verified",
                            "event": "The Social Hackathon’26",
                            "issueDate": "May 14, 2026"
                        })
                        
    # Generate the TypeScript file content
    ts_content = f"""export interface CertificateRecord {{
  id: string;
  name: string;
  college: string;
  role: string;
  status: 'Verified' | 'Invalid';
  event: string;
  issueDate?: string;
}}

/**
 * ============================================================================
 * CERTIFICATE VERIFICATION DATABASE (Auto-generated from public/data.csv)
 * ============================================================================
 * 
 * Total Certificates Issued: {len(records)}
 * 
 * INSTRUCTIONS FOR ADDING NEW PARTICIPANTS:
 * 1. Simply add a new object inside the `CERTIFICATES` array below.
 * 2. Ensure each record has a unique `id` (Certificate ID).
 * 3. Save the file, commit your changes, and push to GitHub. Vercel will auto-deploy!
 */
export const CERTIFICATES: CertificateRecord[] = {json.dumps(records, indent=2, ensure_ascii=False)};
"""

    with open('src/utils/certificates.ts', 'w', encoding='utf-8') as out:
        out.write(ts_content)
        
    print(f"✅ Successfully generated src/utils/certificates.ts with {len(records)} certificate records!")

if __name__ == "__main__":
    generate()
