with open('generated_data.ts', 'r') as f:
    content = f.read()

with open('src/utils/data.ts', 'r') as f:
    data_content = f.read()

data_content = data_content.replace(
    "export const FINALIST_TEAMS: { id: number, team: string, college: string }[] = []",
    content
)

with open('src/utils/data.ts', 'w') as f:
    f.write(data_content)
