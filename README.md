![twitter_x_logo](https://github.com/user-attachments/assets/9dcdbe07-a491-4495-9a07-566adf7a2d54)

# Remove All Twitter/X Followers Script

This script automates the process of removing your Twitter/X followers. Originally inspired by [this Reddit post](https://www.reddit.com/r/Twitter/comments/1gs601u/removing_all_my_followers/), the code was initially generated with the help of ChatGPT. I have modified the script to ensure it continuously scrolls the page to find and process followers to remove.

⚠️ **Important Notes:**
- This is **not an instant solution**. The script relies on scrolling and interactions, so it takes time to process followers.
- If you navigate away from the page, the script stops, and you will need to start it again.
- Use this responsibly and at your own risk.

## Steps to Use the Script

### 1. Open Twitter/X in Your Browser
- Log in to your Twitter/X account.

### 2. Go to Your Followers List
- Navigate to your profile page by clicking on your profile picture in the top left corner.
- Click on the **"Followers"** tab to view the list of people who follow you.

### 3. Open Developer Tools
- Press **F12** (Windows/Linux) or **Cmd + Option + I** (Mac) to open Developer Tools.
- Alternatively, right-click anywhere on the page and select **Inspect** or **Inspect Element**.

### 4. Go to the Console Tab
- In the Developer Tools window, click on the **Console** tab.

### 5. Paste and Run the Script
- Copy the script provided below and paste it into the console.
- Press **Enter** to start running the script.

---

## Key Improvements
1. **Customizable Delays**:
   - Short and long delays ensure actions are performed reliably and avoid rate-limiting issues.
2. **Automatic Scrolling**:
   - `scrollToBottom` function ensures the page loads more followers as needed.
3. **Retry Mechanism**:
   - The script will retry scrolling and checking for buttons up to 5 times before exiting.
4. **Enhanced Logging**:
   - Clear console logs provide updates on progress, actions taken, and any errors encountered.

---

## Customization
- Adjust the `shortDelay` and `longDelay` values to suit your needs and system performance.
- The script is designed to interact dynamically with Twitter's page elements, so it should work with minimal adjustments.

---

## Connect with Me
- 🌐 Website: [DarkWebInformer](https://darkwebinformer.com)
- 🐦 Twitter/X: [DarkWebInformer](https://x.com/DarkWebInformer)
- 🔗 All Links & Canary: [darkwebinformer.com/canary](https://darkwebinformer.com/canary)

---

## Disclaimer
This script is for educational and personal use only. Use it responsibly and in compliance with Twitter/X's Terms of Service. The author is not responsible for any misuse or potential consequences of running this script.
