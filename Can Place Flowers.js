var canPlaceFlowers = function(flowerbed, n) {
    let startIndex = 0;
    let count = 0;
    
    while(startIndex<flowerbed.length){
        if(flowerbed[startIndex] === 1){
            break;
        }
        startIndex++;
    }

    if(startIndex === flowerbed.length){
        return ((startIndex+1)/2 | 0) >= n;
    }
   
    count += startIndex/2 | 0;
    
  
    let endIndex = startIndex+1;
    while(endIndex<flowerbed.length){
        if(flowerbed[endIndex] === 1){
            let zeroCount = endIndex-startIndex-1;
            if(zeroCount>2){
                count += (zeroCount-1)/2 | 0;
                if(count>=n){
                    return true;
                }
            }
            startIndex = endIndex;
        }
        endIndex++;
    }
    
    if(startIndex<flowerbed.length){
        let zeroCount = flowerbed.length-startIndex-1;
        if(zeroCount>1){
            count += zeroCount/2 | 0;
        }
    }
    
    return count>=n;
};