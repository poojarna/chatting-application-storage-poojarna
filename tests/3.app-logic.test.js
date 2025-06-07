/**
 * @jest-environment jsdom
 */
/* eslint-env browser */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Chatting Logic', function () {
  let app;

  beforeEach(() => {
    // Load the HTML into the DOM
    document.documentElement.innerHTML = html.toString();

    // Make sure a .chat element exists (in case it's missing from index.html)
    if (!document.querySelector('.chat')) {
      const chatDiv = document.createElement('div');
      chatDiv.className = 'chat';
      document.body.appendChild(chatDiv);
    }

    // Now require the JavaScript file AFTER the DOM is ready
    app = require('../resources/js/index.js');
  });

  afterEach(() => {
    jest.resetModules(); // Clear module cache between tests
    fetch.mockClear?.();
  });

  it('fetches and formats messages in updateMessagesInChatBox()', async () => {
    // Mock fetch to return a message from TestUser
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              sender: 'TestUser',
              text: 'Hello!',
              timestamp: Date.now()
            }
          ])
      })
    );

    // Mock the name input field
    const nameInput = document.getElementById('my-name-input');
    if (!nameInput) {
      const input = document.createElement('input');
      input.id = 'my-name-input';
      input.value = 'TestUser';
      document.body.appendChild(input);
    } else {
      nameInput.value = 'TestUser';
    }

    // Run the actual function
    await app.updateMessagesInChatBox();

    const chatBox = document.getElementById("chat");

    // Validate DOM content
    expect(chatBox).not.toBeNull();
    expect(chatBox.innerHTML).toContain('Hello!');
    expect(chatBox.innerHTML).toContain('mine messages'); // formatted correctly
  });
});
