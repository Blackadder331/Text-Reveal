function typeText(id) {
    let i = 0;
    let text = document.querySelector(id).innerHTML;
    document.querySelector(id).innerHTML = '';
  
    let typing = setInterval(() => {
      document.querySelector(id).innerHTML += text.charAt(i);
      i++;
  
      if (i > text.length) {
        clearInterval(typing);
      } else {
        document.querySelector(id).innerHTML += ''; 
      }
  
    }, 100); // adjust the speed of typing here (in milliseconds)
  }
  typeText('#typed-text');