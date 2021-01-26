function openNav() {
	document.getElementById("nav_sidebar").style.width = "40%";
}

function closeNav() {
	document.getElementById("nav_sidebar").style.width = "0";
}

function showModalHandler() {
	document.getElementById("modal_screen").style.display = "flex";
}

function hideModalHandler() {
	document.getElementById("modal_screen").style.display = "none";
}

document.getElementById("getQuoteButton").addEventListener("click", showModalHandler);
document.getElementById("getQuoteNav").addEventListener("click", showModalHandler);
document.getElementById("getQuoteSideNav").addEventListener("click", showModalHandler);
document.getElementById("close").addEventListener("click", hideModalHandler);

let textarea = document.getElementById("form_textarea");

textarea.addEventListener("input", ()=>{
	document.getElementById("form_textareaHelp").innerHTML = `${textarea.valueOf().value.length}/1000`;
});
