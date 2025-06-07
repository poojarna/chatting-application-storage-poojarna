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
    // Load the HTML into the DOM BEFORE loading the JS file
    document.documentElement.innerHTML = html.toString();

    // Now require your JS file AFTER the DOM is ready
    app = require('../resources/js/index.js');
  });

  afterEach(() => {
    jest.resetModules(); // Clear module cache between tests
  });

  it('fetches and formats messages in updateMessagesInChatBox()', async () => {
    // Mock fetch response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, sender: 'TestUser', text: 'Hello!', timestamp: Date.now() }
          ]),
      })
    );

    // Set the input value before calling updateMessagesInChatBox
    document.getElementById('my-name-input').value = 'TestUser';

    // Call the function to update messages
    await app.updateMessagesInChatBox();

    // Check that fetch was called once
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Check that chatBox has formatted message
    const chatBox = document.getElementById('chat');
    expect(chatBox.innerHTML).toContain('Hello!');
    expect(chatBox.innerHTML).toContain('mine messages'); // your own message class
  });
});
