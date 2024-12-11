const next = (time, videoLength) => {
    time += 10
    return time > videoLength ? videoLength : time
  }
  
  const prev = (time) => {
    time -= 10
    return time < 0 ? 0 : time
  }
  
  const checkOpeningTime = (time, openingStartTime, openingEndTime) => {
    return time >= openingStartTime && time <= openingEndTime ? openingEndTime : time
  }
  
  const getTotalSeconds = (str) => {
    const [mm, ss] = str.split(':')
    return mm * 60 + ss * 1
  }
  
  const solution = (video_len, pos, op_start, op_end, commands) => {
    const videoLength = getTotalSeconds(video_len)
    const openingStartTime = getTotalSeconds(op_start)
    const openingEndTime = getTotalSeconds(op_end)
    let positionTime = getTotalSeconds(pos)
  
    commands.forEach((command) => {
      positionTime = checkOpeningTime(positionTime, openingStartTime, openingEndTime)
  
      if (command === 'next') {
        positionTime = next(positionTime, videoLength)
      } else {
        positionTime = prev(positionTime)
      }
    })
  
    positionTime = checkOpeningTime(positionTime, openingStartTime, openingEndTime)
  
    return `${String(parseInt(positionTime / 60)).padStart(2, '0')}:${String(positionTime % 60).padStart(2, '0')}`
  }