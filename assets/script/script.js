function send() {
    setTimeout(function() {
      window.open("mailto:eze.largaespada@gmail.com" + document.getElementById('email').value + "?subject=" + document.getElementById('subject').value + "&body=" + document.getElementById('message').value);
    }, 320);
  }