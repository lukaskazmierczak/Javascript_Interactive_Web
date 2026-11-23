collision = function(bound, compare){
    var boundArray = bound;
    var compareArray = compare;
 
    if(compareArray.length){
        
        for(i=0; i<boundArray.length; i++){
            var boundOffset = $(boundArray[i]).offset();
            boundOffset.right = boundOffset.left + $(boundArray[i]).width();
            boundOffset.bottom = boundOffset.top + $(boundArray[i]).height();
            
            for(j=0; j<compareArray.length; j++){    
                var comparePosition = $(compareArray[j]).offset();
                if(boundOffset.bottom > comparePosition.top &&
                   boundOffset.top < comparePosition.top){
                    if(boundOffset.right > comparePosition.left &&
                        boundOffset.left < comparePosition.left){
                        return boundArray[i];                    
                    }
                }
            }
        }
    }
}
