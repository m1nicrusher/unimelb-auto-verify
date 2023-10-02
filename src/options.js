// Saves options to chrome.storage
const saveOptions = () => {
    const secret = document.getElementById("secret").value;
  
    chrome.storage.sync.set(
      { secret: secret },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById("status");
        status.textContent = "Options saved.";
        setTimeout(() => {
          status.textContent = "";
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { secret: "" },
      (items) => {
        document.getElementById("secret").value = items.secret;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);