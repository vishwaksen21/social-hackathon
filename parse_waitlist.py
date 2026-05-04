import re

with open("shortlisted.md", "r") as f:
    content = f.read()

# Splitting sections
try:
    software_waitlist_block = content.split("## software 🕒 Waiting List")[1].split("## hardware 🕒 Waiting List")[0]
    hardware_waitlist_block = content.split("## hardware 🕒 Waiting List")[1]
except IndexError:
    software_waitlist_block = ""
    hardware_waitlist_block = ""

def extract_table(block):
    lines = block.strip().split('\n')
    results = []
    for line in lines:
        if line.startswith('|') and not line.startswith('| Team') and not line.startswith('|---'):
            parts = [p.strip() for p in line.split('|')]
            if len(parts) >= 4:
                # The format is | Team Name | Leader | Institution |
                results.append({"team": parts[1], "leader": parts[2], "college": parts[3]})
    return results

sw_waitlist = extract_table(software_waitlist_block)
hw_waitlist = extract_table(hardware_waitlist_block)

print("export const WAITLIST_SOFTWARE = [")
for item in sw_waitlist:
    t = item['team'].replace("'", "\\'")
    l = item['leader'].replace("'", "\\'")
    c = item['college'].replace("'", "\\'")
    print("  { team: '" + t + "', leader: '" + l + "', college: '" + c + "' },")
print("]")
print()

print("export const WAITLIST_HARDWARE = [")
for item in hw_waitlist:
    t = item['team'].replace("'", "\\'")
    l = item['leader'].replace("'", "\\'")
    c = item['college'].replace("'", "\\'")
    print("  { team: '" + t + "', leader: '" + l + "', college: '" + c + "' },")
print("]")
