const bookmarkimg = chrome.runtime.getURL("assets/bookmark.png");

const observer = new MutationObserver(()=>{
    addFloatingButton();
})

observer.observe(document.body,{ childList : true, subtree : true});

addFloatingButton();

function addFloatingButton(){

    if(document.getElementById("floating-ai-button")) return;

    const floatbtn = document.createElement("div");
    floatbtn.id = "floating-ai-button";
    floatbtn.innerHTML = "🚀";

    floatbtn.style.position = "fixed";
    floatbtn.style.bottom = "85px";
    floatbtn.style.right = "20px";
    floatbtn.style.width = "50px";
    floatbtn.style.height = "50px";
    floatbtn.style.borderRadius = "50%";
    floatbtn.style.backgroundColor = "#ff4500";
    floatbtn.style.color = "white";
    floatbtn.style.display = "flex";
    floatbtn.style.justifyContent = "center";
    floatbtn.style.alignItems = "center";
    floatbtn.style.fontSize = "24px";
    floatbtn.style.cursor = "pointer";
    floatbtn.style.zIndex = "99999";
    floatbtn.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    floatbtn.style.userSelect = "none";

    const bookmarkbtn = addBookmarkbutton();
    
    
    document.body.appendChild(floatbtn);
    if (bookmarkbtn) document.body.appendChild(bookmarkbtn);
    
    console.log("Floating buttons added!..");

}

function addBookmarkbutton(){
    
    if(document.getElementById("bookmark-img")) return;

    if(!checkurl()) return null;

    const bookmarkbtn = document.createElement("img");
    bookmarkbtn.src = bookmarkimg;
    bookmarkbtn.id = "bookmark-img";
    bookmarkbtn.style.position = "fixed";
    bookmarkbtn.style.bottom = "150px";
    bookmarkbtn.style.right = "20px";
    bookmarkbtn.style.width = "50px";
    bookmarkbtn.style.height = "50px";
    bookmarkbtn.style.borderRadius = "50%"
    bookmarkbtn.style.cursor = "pointer";
    bookmarkbtn.style.zIndex = "99999";
    bookmarkbtn.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    bookmarkbtn.style.userSelect = "none";
    
    console.log("In the Programming Page!..");
    return bookmarkbtn;
}

function checkurl() {
    const url = window.location.href;
    let c = 0;
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "/") {
            c++;
            if (c === 4) {
                return url[i + 1] && url[i + 1] === 'p';
            }
        }
    }
    return false;
}

