function validate() {
  const email = document.getElementById("getemail").value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const  message=document.getElementById("message");
  if (pattern.test(email)) {
    message.textContent='valid email address'
  } else {
    message.textContent="Invalid email address! Please enter valid Email.";
   message.style.color="red"
  }
}

