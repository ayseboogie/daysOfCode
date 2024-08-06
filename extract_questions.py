import os
import re

def extract_question_comment(file_content):
    # Use regular expression to extract the comment block
    match = re.search(r'/\*([\s\S]*?)\*/', file_content)
    if match:
        return match.group(0)
    return None

def process_folder(folder_path):
    ts_files = [f for f in os.listdir(folder_path) if f.endswith('.ts')]
    comments = []
    for ts_file in ts_files:
        with open(os.path.join(folder_path, ts_file), 'r') as file:
            content = file.read()
            question_comment = extract_question_comment(content)
            if question_comment:
                comments.append(question_comment)

    if comments:
        readme_path = os.path.join(folder_path, 'README.md')
        with open(readme_path, 'w') as readme_file:
            readme_file.write('\n\n'.join(comments))

def main():
    base_folder = os.getcwd()  # Get the current working directory
    for day in range(1, 69):  # Adjust the range as needed
        folder_name = f'Day_{day:02d}'
        folder_path = os.path.join(base_folder, folder_name)
        if os.path.isdir(folder_path):
            process_folder(folder_path)

if __name__ == "__main__":
    main()
