import os  # Import the os module to interact with the operating system

def create_answers_file(folder_path, day_number):
    """
    Creates an 'answers.tsx' file in the specified folder with a React component
    that displays the day number.

    Args:
        folder_path (str): The path to the folder where the file will be created.
        day_number (int): The day number to include in the file content.
    """
    # Define the content of the 'answers.tsx' file with a React component
    tsx_content = f"""import React from "react";

const Day{day_number} = () => {{
  return (
  <div>
    <div>
      Day {day_number}
    </div>
  </div>
  );
}};

export default Day{day_number};
"""

    # Construct the full path for the 'answers.tsx' file
    tsx_path = os.path.join(folder_path, 'answers.tsx')

    # Open the file in write mode and write the content to it
    with open(tsx_path, 'w') as tsx_file:
        tsx_file.write(tsx_content)

def process_folders(base_folder):
    """
    Iterates through folders named 'Day_01' to 'Day_69' in the base folder and
    creates an 'answers.tsx' file in each folder.

    Args:
        base_folder (str): The path to the base folder containing the day folders.
    """
    # Loop through day numbers from 1 to 69
    for day in range(1, 70):  # 70 is not included, so this covers days 1 to 69
        # Format the day number with leading zeros (e.g., 'Day_01', 'Day_02')
        folder_name = f'Day_{day:02d}'

        # Construct the full path to the current day folder
        folder_path = os.path.join(base_folder, folder_name)

        # Check if the folder exists
        if os.path.isdir(folder_path):
            # Call the function to create the 'answers.tsx' file in the folder
            create_answers_file(folder_path, day)

if __name__ == "__main__":
    # Specify the base folder where the day folders are located
    base_folder = 'public'  # Update this path if your 'public' folder is located elsewhere

    # Process each folder to create the 'answers.tsx' files
    process_folders(base_folder)

# Run the script to create 'answers.tsx' files in the day folders
# run by python3 create_answers_tsx.py