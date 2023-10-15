chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // receive message here...
  // console.log("Hello");
  console.log(request);

  
  let header = document.querySelector("#visitedUrl_div");
  let h = document.createElement("div");
  console.log(h);
  h.innerHTML = "Hello";
  header.appendChild(h);
});


console.log('run on doc loaded')