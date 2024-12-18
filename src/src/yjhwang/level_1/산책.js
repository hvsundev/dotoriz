

const getLocation = (park) => {
    let location = [0, 0];
    let limited = [park.length - 1, park[0].length - 1];
  
    for (let i = 0; i < park.length; i++) {
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j] === "S") {
          location = [i, j];
          break;
        }
      }
    }
  
    return { location, limited };
  };
  
  const getMovedLocation = (location, way, distance, limited, park) => {
    let [currX, currY] = location;
  
    let [limitedX, limitedY] = limited;
    let moveX = currX;
    let moveY = currY;
    let args = [];
  
    switch (way) {
      case "N":
        moveX = currX - distance;
        args = [moveX, currY, currX, currY, park];
        currX = moveX >= 0 && !hasBlocking(...args) ? moveX : currX;
        break;
      case "S":
        moveX = currX + distance;
        args = [currX, currY, moveX, currY, park];
        currX = moveX <= limitedX && !hasBlocking(...args) ? moveX : currX;
        break;
      case "W":
        moveY = currY - distance;
        args = [currX, moveY, currX, currY, park];
        currY = moveY >= 0 && !hasBlocking(...args) ? moveY : currY;
        break;
      case "E":
        moveY = currY + distance;
        args = [currX, currY, currX, moveY, park];
        currY = moveY <= limitedY && !hasBlocking(...args) ? moveY : currY;
        break;
    }
  
    return [currX, currY];
  };































  
  const hasBlocking = (startX, startY, endX, endY, park) => {
    for (let i = startX; i <= endX; i++) {
      for (let j = startY; j <= endY; j++) {
        if (park[i][j] === "X") return true;
      }
    }
  
    return false;
  };
  
  const isMoved = (location, movedLocation) => {
    return location[0] !== movedLocation[0] || location[1] !== movedLocation[1];
  };
  
  const solution = (park, routes) => {
    let { location, limited } = getLocation(park);
  
    routes.forEach((route) => {
      // "애 정" => ['애', '정'] 
      const [way, length] = route.split(" ");
      const moved = getMovedLocation(location, way, Number(length), limited, park);
  
      if (isMoved(location, moved)) {
        location[0] = moved[0];
        location[1] = moved[1];
      }
    });
  
    return [location[0], location[1]];
  };