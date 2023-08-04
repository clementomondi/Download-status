// Add JavaScript code here
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var text = document.querySelector('.text');
var count = 4;
var per = 16;
var loading = setInterval(Animate, 50);
function Animate() {
    if (count == 100 && per == 400) {
        percent.classList.add("text-blink")
        text.style.display = "block";
        clearInterval(loading);
    } else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%'
    }
}
save_btn = document.querySelector(".save-btn")

save_btn.onclick = function () {
    this.innerHTML = '<div class="loader"></div>';
    setTimeout(() => {
        this.innerHTML = 'Changes saved';
        this.style = "pointer-events:none;background:white;color:black;";
    }, 3000);
}