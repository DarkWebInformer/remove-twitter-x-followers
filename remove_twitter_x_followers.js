(async function removeFollowers() {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    console.log("Starting to remove followers...");

    let retryCount = 0;
    const maxRetries = 5;
    const shortDelay = 500; // Delay for actions
    const longDelay = 1500; // Delay for more complex actions

    const scrollToBottom = async () => {
        console.log("Scrolling to load more followers...");
        window.scrollTo(0, document.body.scrollHeight);
        await delay(longDelay); // Wait for followers to load
    };

    while (true) {
        console.log("Looking for 'More' button (triple-dot menu)...");

        // Scroll to load more followers if needed
        await scrollToBottom();

        let menuButtons = Array.from(document.querySelectorAll('button[aria-label="More"]')).filter(button =>
            button.querySelector('svg[viewBox="0 0 24 24"]')
        );

        console.log(`Found ${menuButtons.length} menu button(s).`);

        if (menuButtons.length === 0) {
            if (retryCount >= maxRetries) {
                console.log("No more followers to process after maximum retries. Exiting.");
                break;
            }

            console.log(`No buttons found. Retrying... (Retry ${retryCount + 1}/${maxRetries})`);
            await delay(longDelay);
            retryCount++;
            continue;
        }

        retryCount = 0; // Reset retry count when buttons are found

        // Perform actions on all found menu buttons
        for (let menuButton of menuButtons) {
            try {
                console.log("Clicking the 'More' button...");
                menuButton.click();
                await delay(shortDelay);

                console.log("Looking for 'Remove this follower' option...");
                const removeOption = Array.from(document.querySelectorAll('span')).find(span =>
                    span.innerText.trim() === "Remove this follower"
                );

                if (removeOption) {
                    console.log("Found 'Remove this follower' option. Clicking...");
                    removeOption.click();
                    await delay(shortDelay);
                } else {
                    console.log("Could not find 'Remove this follower' option. Skipping...");
                    continue;
                }

                console.log("Looking for the red 'Remove' button...");
                const confirmButton = document.querySelector('button[data-testid="confirmationSheetConfirm"]');
                if (confirmButton) {
                    console.log("Found 'Remove' button. Clicking...");
                    confirmButton.click();
                    console.log("Follower removed.");
                } else {
                    console.log("Confirmation 'Remove' button not found. Skipping...");
                    continue;
                }

                await delay(longDelay); // Longer delay to avoid overlaps
            } catch (err) {
                console.error("Error during follower removal:", err);
            }
        }
    }

    console.log("All followers processed.");
})();