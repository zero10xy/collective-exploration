    window.onload = function(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.github.com/repos/zero10xy/collective-exploration/git/trees/main?recursive=1", false );
    xmlHttp.send(null);
    var files = JSON.parse(xmlHttp.response)['tree'];
    for (let i = 0; i < files.length; i++) {
      let path = files[i]['path']
      if (path.includes('/') && path.toLowerCase().endsWith(".html")){
        document.body.innerHTML += "<a href=https://zero10xy.github.io/collective-exploration/" + path + ">" + path + "</a><br>"
      }
    }
    }
