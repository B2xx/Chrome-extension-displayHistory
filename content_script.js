chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // receive message here...
  console.log("Hello");

  const datalList = request.data.splice(0, 10);
  console.log(datalList);

  let container = document.querySelector("#content-container");
  // let h = document.createElement("div");
  // h.innerHTML = "Hello";
  // container.appendChild(h);
  datalList.forEach((url, index) => {
    let div = document.createElement("div");
    div.innerHTML = url.title;
    container.appendChild(div);

    // let div2 = document.createElement("div");
    // div2.innerHTML = index;
    // container.appendChild(div2);

    setTimeout(() => {
      // let div = document.createElement("div");
      // div.innerHTML = url.title;
      // container.appendChild(div);
      div.classList.toggle("show");

    }, 300 * index);
  });
});

console.log("run on doc loaded");
