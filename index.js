require("fontfaceobserver");

(function(){
  var observer = new FontFaceObserver("DOS");

  observer.check().then(function(){
    document.body.className = "font-loaded";
  })
})()
