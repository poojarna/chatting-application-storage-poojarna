[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/60T8jdNU)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19724037&assignment_repo_type=AssignmentRepo)
[![GitHub Classroom Workflow](https://github.com/IT3049C-Lively-FA23/chatting-application-poojarna/actions/workflows/classroom.yml/badge.svg)](https://github.com/IT3049C-Lively-FA23/chatting-application-poojarna/actions/workflows/classroom.yml)
=====================
![Assignment Checks](https://github.com/IT3049C/Chatting-Application/workflows/Assignment%20Checks/badge.svg)

Instructions to this assignment can be found [here](https://reedws.github.io/IT3049C/coursework/labs/chatting-app/).
- [x] update the assignment checks above to the correct link. - Done Automatically
## Checklist:
- [x] update the assignment checks above to the correct link
- [x] make sure the assignment checks pass
- [x] fill out the self evaluation and Reflection
- [ ] submit the repository link on Canvas

## Self-Evaluation:

How many points out of 20 do you deserve on this assignment: I believe I deserve 19 out of 20 points on this assignment. I accepted the GitHub Classroom link and followed the instructions to build the chat application. I included the classroom header, website title, favicon, and chat heading. For layout, I used Bootstrap input groups and icons as described. I added mock chat messages in index.html and styled them in style.css. Creating the chat layout was challenging, but I worked through it. I set up constants, wrote updateMessagesInChatBox(), and used fetchMessages() to load data from the server. I added a formatter function to display messages with usernames. I looped through messages in updateMessages() and used setInterval() to update every 10 seconds. I created a sendMessages() function with JSON formatting using jQuery and added a click event listener to the send button. Finally, I published the project with GitHub Pages.

## Self-Reflection:
<!-- Write your self-reflection under this line -->
For this assignment, I followed the instructions carefully and watched the provided videos. I learned that JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and for machines to parse. JSON is syntactically identical to JavaScript objects, but it is language-independent despite its name. I also learned about the two main methods used with JSON: JSON.stringify() converts an object to a JSON string, and JSON.parse() converts a JSON string back into an object. Additionally, I learned about the fetch() method through one of Professor Gilany’s videos shared by Professor Lively. Fetch is a modern way to make HTTP requests using Promises instead of callbacks, which makes the code cleaner and easier to manage. I also saw how a GET request can be made using fetch() and how to convert the response to JSON with .then(response => response.json()).

### How long it took me to finish this?
It took me about 7 hours spread over 3 days, totaling approximately 21 hours to complete the chat application. I spent around 3 hours initially writing code based on the instructions and another 4 hours refining it to ensure the application ran smoothly. Each day, I continued making adjustments and tweaks to improve the functionality and ensure everything worked correctly.

## Discussion Questions:
1. What does the bootstrap `display-4` class do? The display-4 class is a typographic utility in Bootstrap 4 that styles text as a large, prominent heading. It sets the font size to approximately 2.5 em (40px), applies a light font weight (typically 300), and ensures consistent line height for visual clarity.
