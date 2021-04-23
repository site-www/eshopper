function lightboxCloseClick() {
    var el1 = document.getElementById("lightbox_window");
    var el2 = document.getElementById("lightbox_cover");
    el1.className = "";
    el2.className = "";
}
var oSection = document.getElementsByClassName("sect") [0];
var arrSpoilers = oSection.getElementsByClassName("spoiler");
var el, a;
window.addEventListener("load", function () {
    for (var i = 0; i < arrSpoilers.length; i++){
        el = arrSpoilers[i];
        a = el.querySelector("h6 a");
    a.addEventListener("click", function spoilerHeaderClick(evt){
    var el = evt.target;
    var oMark = el.childNodes[1];
    var oSB = el.parentNode.parentNode.querySelector("div");
    if (oSB.className == "condensed"){
    oMark.innerHTML = "-";
    oSB.className = ""
    oSB.style.height = oSB.fullHeight + "px";
    }else{
        oMark.innerHTML = "+";
        oSB.className = "condensed"
        oSB.style.height = "0px";
    }
});
        a = el.querySelector("div");
        a.fullHeight = a.clientHeight;
        a.style.height = "0px";
        a.className = "condensed";
    }
    var arrLightboxes = oSection.querySelectorAll("div.lightbox a");
if (arrLightboxes.length > 0) {
    el = document.createElement ("div");
    el.id = "lightbox_cover"
    document.body.appendChild(el);
    el = document.createElement("div");
    el.id = "lightbox_window"
    el.innerHTML = "<div id='lightbox_close'><a href='#'>X</a></div><table><tr><td></td></tr></table>";
    document.body.appendChild(el);
    el = document.getElementById("lightbox_cover");
    el.addEventListener("click", lightboxCloseClick, false);
    el = document.getElementById("lightbox_close");
    el.addEventListener("click", lightboxCloseClick, false);
    for (var i = 0; i < arrLightboxes.length; i++){
        el = arrLightboxes[i];
        el.addEventListener("click", function lightboxClick(evt) {
            var el = evt.currentTarget;
            var h = el.querySelector("span.image").innerHTML;
            var e12 = document.getElementById("lightbox_cover");
            var e13 = document.getElementById("lightbox_window");
            el = e13.querySelector("table tr td");
            el.innerHTML = h;
            e12.className = "active";
            e13.className = "active";
        }, false);
    }
}});
    function videoLoadedMetadata(evt){
        var el = evt.target;
        el.width = el.videoWidth;
        el.height = el.videoHeight;
    }
var setion2 = document.getElementById("sect2");
var arrVideos = setion2.getElementsByTagName("video");
for (var i = 0; i < arrVideos.length; i++){
    el = arrVideos[i];
    el.addEventListener("loadedmetadata", videoLoadedMetadata, false);
}