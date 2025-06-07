/**
 * @jest-environment jsdom
 */
/* eslint-env browser */

const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
jest.dontMock('fs');

describe('Chatting Logic', function () {
  let app;
  let updateMessages;
  let fetchMessages;
  let formatMessage;
  let chatBox;
  let nameInput;

  beforeEach(() => {
    // Load HTML into the DOM
    document.documentElement.innerHTML = html.toString();

    // Set up mock DOM elements required by index.js
    chatBox = document.createElement('div');
    chatBox.id = 'chat';
    document.body.appendChild(chatBox);

    nameInput = document.createElement('input');
    nameInput.id = 'my-name-input';
    nameInput.value = 'TestUser';
    document.body.appendChild(nameInput);

    // Load the app file using rewire so we can access internal (non-exported) functions
    app = rewire('../resources/js/index.js');

    // Access internal functions
    updateMessages = app.__get__('updateMessagesInChatBox');
    fetchMessages = app.__get__('fetchMessages');
    formatMessage = app.__get__('formatMessage');

    // Mock fetch to return fake messages
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => [
        { sender: 'TestUser', text: 'Hello!', timestamp: Date.now() },
        { sender: 'OtherUser', text: 'Hi there!', timestamp: Date.now() }
      ]
    });

    // Spy on formatMessage so we know it's called
    jest.spyOn(app, '__get__').mockImplementation((fnName) => {
      if (fnName === 'formatMessage') {
        return jest.fn().mockReturnValue('<div>Mocked</div>');
      }
      return app.__get__(fnName);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
    document.body.innerHTML = ''; // clean up DOM
  });

  it('fetches and formats messages in updateMessagesInChatBox()', async () => {
    // Run the update function
    await updateMessages();

    // ✅ Check that fetch was called
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // ✅ Check that formatted messages were inserted into chatBox
    expect(document.getElementById('chat').innerHTML).toContain('TestUser');
  });
});
