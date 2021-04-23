window.addEventListener("load", function(){
    var oSection = document.getElementsByClassName("sect1")[0];
    var arrTabContents = oSection.querySelectorAll("div.tab-content");
    var el, a, arr, n;
    for (var i = 0; i < arrTabContents.length; i++){
        el = arrTabContents[i];
        arr = el.querySelectorAll("div.tab");
        n = 0;
    for (var j = 0; j < arr.length; j++){
        a = arr[j];
        if (a.clientHeight > n) n = a.clientHeight;
    }
        el.style.height = n + "px";
    }
    var arrTabs = oSection.querySelectorAll("div.tab-header a");
    for (var i = 0; i < arrTabs.length; i++) {
        el = arrTabs[i];
        el.addEventListener("click", function(evt){
        var el = evt.target;
        var a = document.querySelector("div.tab-visible");
        a.className = "tab";
        var s = el.id;
        var n = s.substr(0, s.indexOf("_"));
        var i = s.substr(s.length -1, 1);
        a = document.getElementById(n + "_content" + i);
        a.className = "tab tab-visible";
        a = el.parentNode.querySelector("a.active");
        a.className = "";
        el.className = "active";
        }, false);}
})