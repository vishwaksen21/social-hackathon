import re

with open("shortlisted.md", "r") as f:
    content = f.read()

software_block = content.split("## Hardware")[0]
hardware_block = content.split("## Hardware")[1]

def extract_table(block, type):
    lines = block.split('\n')
    results = []
    for line in lines:
        if line.startswith('|') and not line.startswith('| Team') and not line.startswith('|---'):
            parts = [p.strip() for p in line.split('|')]
            if len(parts) >= 4:
                if type == 'software':
                    results.append({"team": parts[1], "leader": parts[2], "college": parts[3]})
                else:
                    results.append({"team": parts[1], "college": parts[2], "leader": parts[3]})
    return results

software = extract_table(software_block, 'software')
hardware = extract_table(hardware_block, 'hardware')

print("export const SHORTLISTED_SOFTWARE = [")
for item in software:
    t = item['team'].replace("'", "\\'")
    l = item['leader'].replace("'", "\\'")
    c = item['college'].replace("'", "\\'")
    print("  { team: '" + t + "', leader: '" + l + "', college: '" + c + "' },")
print("]")
print()
print("export const SHORTLISTED_HARDWARE = [")
for item in hardware:
    t = item['team'].replace("'", "\\'")
    l = item['leader'].replace("'", "\\'")
    c = item['college'].replace("'", "\\'")
    print("  { team: '" + t + "', leader: '" + l + "', college: '" + c + "' },")
print("]")
