if ("Notification" in window) {
  console.log("Notifications are supported here bro.");
} else {
  console.log("Notifications are not supported, you fucked.");
}

// Function to request notification permission
function requestNotificationPermission() {
  if ("Notification" in window && navigator.serviceWorker) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      } else {
        console.log("Notification permission denied.");
      }
    });
  } else {
    console.log("Notifications are not supported by this browser.");
  }
}

// Function to send a notification
function sendNotification() {
  if ("Notification" in window && navigator.serviceWorker) {
    navigator.serviceWorker.ready
      .then((registration) => {
        console.log("Sending notification...");
        registration.showNotification("Reminder", {
          body: "10 seconds have passed since you clicked the button.",
          icon: "/icons/icon-192x192.png",
        });
      })
      .catch((error) => console.error("Error showing notification:", error));
  }
}

document.getElementById("notifyButton").addEventListener("click", () => {
  console.log("Button has been clicked");
  if (Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        sendNotification();
      } else {
        console.log("Notification permission denied.");
      }
    });
  } else if (Notification.permission === "granted") {
    sendNotification();
  } else {
    console.log("Notification permission denied.");
  }
});

function sendNotification() {
  new Notification("Hello! This is a notification.");
}
