    function checkOverlap() {
      var images = document.getElementsByClassName("image");
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var isOverlapped = false;
        
        for (var j = i + 1; j < images.length; j++) {
          var otherImage = images[j];
          
          if (isOverlapping(image, otherImage)) {
            isOverlapped = true;
            break;
          }
        }
        
        if (isOverlapped) {
          image.style.visibility = "hidden";
        } else {
          image.style.visibility = "visible";
        }
      }
    }
    
    function isOverlapping(element1, element2) {
      var rect1 = element1.getBoundingClientRect();
      var rect2 = element2.getBoundingClientRect();
      
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    }
    
    checkOverlap();
