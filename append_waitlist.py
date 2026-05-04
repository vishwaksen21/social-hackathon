with open("generated_waitlist.ts", "r") as f:
    waitlist_content = f.read()

with open("src/utils/data.ts", "r") as f:
    data_content = f.read()

with open("src/utils/data.ts", "w") as f:
    f.write(data_content + "\n" + waitlist_content)
