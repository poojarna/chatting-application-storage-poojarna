[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/60T8jdNU)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19724037&assignment_repo_type=AssignmentRepo)
[![GitHub Classroom Workflow](https://github.com/poojarna/chatting-application-storage-poojarna/actions/workflows/classroom.yml/badge.svg)](https://github.com/poojarna/chatting-application-storage-poojarna/actions/workflows/classroom.yml)
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

How many points out of 20 do you deserve on this assignment: I believe I deserve 19 out of 20 points on this assignment. First, I cloned the assignment chatting-application-poojarna into chatting-application-storage-poojarna. Then, I mirrored the code so that I can access it from chatting-application-storage-poojarna using git bash. Furthermore, I added code per the instructions. First, I added a save name function that allows users to edit their name and store their name in local storage. Also, the save name input has an if-else statement enabling users to messsage, if they enter their name. This code sets up the footer of a chat interface and includes JavaScript to handle user interaction and preferences. The footer contains a disabled text input and "Send" button, which are initially inactive to prevent message sending until the user provides their name. When the page loads, it checks if a name was previously saved in local storage and, if so, pre-fills the name input field. However, the chat remains disabled until the user explicitly clicks the "Save Name" button, which stores the name in local storage and enables the message input and send button. If the user changes their name input afterward, the chat is again disabled to enforce re-validation. The code also includes a dark mode toggle feature: it checks local storage for a saved preference and applies the dark-mode class to the body if dark mode is enabled. Users can switch themes via a checkbox, and their choice is saved for future visits.

## Self-Reflection:
<!-- Write your self-reflection under this line -->
For this assignment, I followed the instructions carefully and watched the provided videos. My favorite vido was How to Use Session Storage. Key-value pairs can be stored in the browser for the duration of a single tab session using JavaScript's sessionStorage, as seen in the video. Data is isolated to each tab and is deleted when the tab or browser is closed. The setItem, getItem, removeItem, and clear methods are the same as those used by localStorage; however, as it only accepts strings, objects must be stringified using JSON.stringify and processed using JSON.parse. Along with showing that sessionStorage endures across navigations inside the same browser but not across tabs, the video also explains how to update values and loop through stored items. Nonetheless, the hardest part of coding was user's name is saved to local storage. I had to tweak my localstorage name saving so that users can still edit it. I learned to push through and overcome my obstacles.

### How long it took me to finish this?
It took me about 10 hours spread over 3 days, totaling approximately 30 hours to complete the chat application. I spent around 3 hours initially writing code based on the instructions and another 7 hours focusing on cloning the chatting application code. For the next two days, I continued making adjustments and tweaks to improve the functionality and ensure everything worked correctly.

## Discussion Questions:
1. What does the bootstrap `display-4` class do? The display-4 class is a typographic utility in Bootstrap 4 that styles text as a large, prominent heading. It sets the font size to approximately 2.5 em (40px), applies a light font weight (typically 300), and ensures consistent line height for visual clarity.
