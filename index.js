// Code your solution in this file!






function distanceFromHqInBlocks(block) { // function calculates distance from block and returns the distance in blocks
    const hqBlock = 42;
    if (block > hqBlock){
        return block - hqBlock;
    }
    else if(block < hqBlock){
        return hqBlock - block;
    }
    else{
        return 0;
    }
  }

  function distanceFromHqInFeet(blocks){   //calculates distance from fq in blocks
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, stop){ //calculates the distance travelled in feet
      const blockSize = 264;
      if (start > stop){
        return(start - stop) * 264
      }
      else if(start < stop){
        return(stop - start) * 264
      }
      else{
          return 0;
      }
  }

  function calculatesFarePrice(start, stop) {
    const distanceInFeet = distanceTravelledInFeet(start, stop); // calling the previous function to calculate distance in feet
    if (distanceInFeet <= 400){
        return 0;
    }
    else if(distanceInFeet > 400 && distanceInFeet <= 2000){
        const priceInCents = (distanceInFeet - 400) * 2;
        return priceInCents / 100;        // convert from cents to dollars
    }
    else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }
  }
