function hasUserMedia(){
    return !!(navigator.getUserMedia ||
             navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if(hasUserMedia()){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUerMedia;
    
    var constraints = {
      video: {
          mandatory: {
              minWidth: 640,
              minHeight: 480
          }
      },
      audio: true
    };
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        
        constraints = {
            video: {
                mandatory: {
                    minWidth: 480,
                    minHeight: 320,
                    minWidth: 1024,
                    maxHeight: 768
                }
            },
            audio: true
        };
    }
    
    navigator.getUserMedia(constraints, function(stream){
        var video = document.querySelector('video');
        video.srcObject = stream;
    }, function(error){
        console.log("media error", error);
    });
}else{
    alert("getUserMedia를 지원하지 않음");
}