let liEls = document.querySelectorAll("#visitedUrl_div");

for (let i = 0; i < liEls.length; i++) {
  setTimeout(() => {
    let firstEl = liEls[i];
    firstEl.classList.toggle("show");
  }, 500 * i);
}