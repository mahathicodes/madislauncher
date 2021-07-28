document.getElementById("button").addEventListener("contextmenu", changeLinkWebsite);
document.getElementById("button1").addEventListener("contextmenu", changeLinkYouTube);
document.getElementById("button2").addEventListener("contextmenu", changeLinkTwitter);
document.getElementById("button3").addEventListener("contextmenu", changeLinkedIn);
document.getElementById("button4").addEventListener("contextmenu", changeLinkGithub);

function changeLinkWebsite(){
    var input = window.prompt("Enter new link")
    if (input != null){
        x=document.getElementById("website")
        x.innerHTML = '<a id="website" target="_blank" href=' + input + '><img src="images/globe.svg"></a>';
    
    }
}

function changeLinkYouTube(){
    var input = window.prompt("Enter new link")
    if (input != null){
        x=document.getElementById("youtube")
        x.innerHTML = '<a id="website" target="_blank" href=' + input + '><img src="images/globe.svg"></a>';
    
    }
}

function changeLinkTwitter(){
    var input = window.prompt("Enter new link")
    if (input != null){
        x=document.getElementById("twitter")
        x.innerHTML = '<a id="website" target="_blank" href=' + input + '><img src="images/globe.svg"></a>';
    
    }
}

function changeLinkedIn(){
    var input = window.prompt("Enter new link")
    if (input != null){
        x=document.getElementById("linkedin")
        x.innerHTML = '<a id="website" target="_blank" href=' + input + '><img src="images/globe.svg"></a>';
    
    }
}

function changeLinkGithub(){
    var input = window.prompt("Enter new link")
    if (input != null){
        x=document.getElementById("github")
        x.innerHTML = '<a id="website" target="_blank" href=' + input + '><img src="images/globe.svg"></a>';
    
    }
}