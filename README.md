![twitter_x_logo](https://github.com/user-attachments/assets/9dcdbe07-a491-4495-9a07-566adf7a2d54)

This code was initially taken from: https://www.reddit.com/r/Twitter/comments/1gs601u/removing_all_my_followers/. The user used ChatGPT to create the code. I manipulated the code a little bit to ensure it keeps scrolling to find followers to remove. This is NOT an instant thing. If you migrate away from the page it stops and you will need to start again.

Follow the steps below to run:

Step 1: Open Twitter/x in Your Browser. Go to Twitter/X and log in to your account.

Step 2: Go to Your Followers List. Navigate to your profile page by clicking on your profile picture in the top left corner. Click on the "Followers" tab to view the list of people who follow you.

Step 3: Open Developer Tools. Press F12 (Windows/Linux) or Cmd + Option + I (Mac) to open the Developer Tools. Alternatively, right-click anywhere on the page and select Inspect or Inspect Element.

Step 4: Go to the Console Tab In the Developer Tools window, find and click on the Console tab. This is where you'll paste the script.

Step 5: Paste the Script. Copy the script and paste it into the console and let it run.

The code that was changed is below:

You can change the delay to something you prefer and works for you.

const shortDelay = 500; // Increased delay to allow actions to register properly
const longDelay = 1500; // Longer delay for more complex actions like confirming removal

Add scrolltobottom function:

const scrollToBottom = async () => {
    console.log("Scrolling to load more followers...");
    window.scrollTo(0, document.body.scrollHeight);
    await delay(longDelay); // Wait for followers to load
};

Added scrolltobottom in the main loop:

await scrollToBottom();

More logging:

console.log("Scrolling to load more followers...");
console.log("Looking for 'More' button (triple-dot menu)...");
console.log("No buttons found. Retrying...");

Revised retry mechanism:

if (retryCount >= maxRetries) {
    console.log("No more followers to process after maximum retries. Exiting.");
    break;
}
