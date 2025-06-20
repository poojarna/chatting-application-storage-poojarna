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
- [ ] fill out the self evaluation and Reflection
- [ ] submit the repository link on Canvas

## Self-Evaluation:

how many points out of 20 do you deserve on this assignment: I deserve 19/20 points on this assignment. First, I accepted the github classroom assignment link. Then, I coded the chatting application per the assignment instructions. I have added the classroom header and other features per the instructions. In "Page Layout", I added the code as per the icons that were described in overview key which explained what each icon was for. I added the heading for the website, the name favicon, and chat as the instructions explained. For the application chat, I created Bootstrap's input groups consisting of a text input and a button. I added the code to the index.html and the style.css file. For the chat, I copied the mock messages text about 4-5 times in the index.html file. Then I copied the css code into the style.css file to bring the chat to life. Bringing the chat to life was extremely difficult because I was confused on what messages should be displayed. I created four constants nameInput, myMessage, sendButton, and chatBox. Then i created updateMessagesInChatBox(). I then created fetchMessages() that links to the server messages url and added code as per instructions. Next, I created a formatter function that will take the message object and the username my-name-input (from the text field) as parameters and return HTML. For updateMessages(), I generated a loop, formated them, and added them to the chatbox. I called updateMessages() and entered setInterval(updateMessages, 10000); on a line. Finally, for sending messages, I created a send function that would take the username and message as a parameter, constructed a json object with the following properties sender, text, and timestamp, and send messages to the the server. I coded my sendMessages using JQuery. Lastly, I created an Event Listener to the click event on the send button. Finally, I generated a Github page. 

## Self-Reflection:
<!-- Write your self-reflection under this line -->
For this assignment, I had followed instructions as per the assignment and watched the videos. 

### How long it took me to finish this?
It took me about 7 hours and 3 days to finish this.

## Discussion Questions:
1. What does the bootstrap `display-4` class do?
