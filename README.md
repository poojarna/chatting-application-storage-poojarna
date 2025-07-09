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

How many points out of 20 do you deserve on this assignment: I believe I deserve 19 out of 20 points on this assignment. I cloned the repository and mirrored the code to access it using Git Bash. I added a function that lets users save their name to local storage. The message input and "Send" button are disabled until a name is saved. If the name is changed, the chat is disabled again until the new name is saved. I also added a dark mode toggle, which saves user preference in local storage. Additionally, I included geolocation code that uses GPS to find the user’s city and weather using APIs. This information is shown at the top of the page, and any errors are logged in the console.

## Self-Reflection:
<!-- Write your self-reflection under this line -->
I followed the assignment instructions and watched the videos. My favorite was How to Use Session Storage. It showed how sessionStorage stores data per tab session and deletes it when the tab closes. The methods are like localStorage, but only strings are allowed, so objects must be stringified. The video also explained updating values and looping through stored items.

The hardest part was saving and editing the user's name in localStorage, but I overcame the challenge. In the Geolocation Web API video, I learned the difference between client-side and server-side code. The browser uses the navigator.geolocation API to get the user’s location. The instructor emphasized keeping sensitive tasks like API keys on the server. The next step will be sending location data to a server to store it.

### How long it took me to finish this?
It took me about 15 hours spread over 3 days to complete the chat application. I spent around 3 hours initially writing code based on the instructions and another 7 hours focusing on cloning the chatting application code. For the next two days, I continued making adjustments and tweaks to improve the functionality and ensure everything worked correctly. I dedicated the time towards ensuring that the code meets all requirements, including the extra credit. For the add on, it took me 3 hours in total to finish the addon application. I took the time to answer the prompt through reading the instructions, ensuring that the Geolocation and Weather API work. 

## Discussion Questions:
1. What does the bootstrap `display-4` class do? The display-4 class is a typographic utility in Bootstrap 4 that styles text as a large, prominent heading. It sets the font size to approximately 2.5 em (40px), applies a light font weight (typically 300), and ensures consistent line height for visual clarity.
