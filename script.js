let permission = Notification.permission;
if (permission === "default") {
  getPermission();
}
if (permission === "granted") {
  showNotification();
} else {
  // alert("my message");
}

function getPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showNotification();
    }
  });
}
function showNotification() {
  let title = "qpCode...";
  let body = "hello welcome ...";
  let icon = "logo.png";
  let newNotification = new Notification(title, { body, icon });
  newNotification.addEventListener("click", () => {
    console.log("clicked");
  });
}
