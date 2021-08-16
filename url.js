const hamburgerIcon = document.getElementById("icon")
const menu = document.getElementById("menuItems")

hamburgerIcon.addEventListener('click',()=> {
    menu.classList.toggle("show-nav-dropdown")
})

let shortenButton = document.getElementById("shorten-it")
const baseUrl = "https://api.shrtco.de/v2/shorten"

const showResult = document.querySelector('#showResult')

shortenButton.addEventListener('click', () => {
    console.log('Fetching Data')
    let urlInput = document.getElementById("url-link").value

    fetch(`${baseUrl}?url=${urlInput}`)
    .then(response => response.json())
     .then(data => {
         console.log('data is',data);
         showResult.innerHTML += ` <div class="shorten-result">
     <div class="shorten-link1">
       <p class="link1">Original Link: ${data.result.original_link}</p>
     </div>
     <div class="shorten-link2">
       <p class="link2">Shortened Link: ${data.result.full_short_link}</p>
     </div>
     <div class="copybutton">
       <button id="copyCopy" onclick="copyLink()" class="copy ">Copy</button>
     </div>
     </div>`})
  
});
// document.getElementById('copyCopy').addEventListener('click', copyLink)
let copied = data.result.full_short_link;
function copyLink(){
    alert('copied')
    copied.select();
    document.execCommand('copy');
}