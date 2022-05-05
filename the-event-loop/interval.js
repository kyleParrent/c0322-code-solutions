let currentCount = 3;

const intID = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intID);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
