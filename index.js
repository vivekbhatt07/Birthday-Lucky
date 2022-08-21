const dobInput = document.querySelector("#dob_input");
const luckyInput = document.querySelector("#lucky_input");
const checkBtn = document.querySelector("#check_btn");
const msg = document.querySelector(".message");

checkBtn.addEventListener("click", function validateBirthdayStatus() {
  const fate = remainder();
  if (fate === 0) {
    messageDeliver("You are lucky !");
  } else if (fate === false) {
    messageDeliver("Invalid Number Enterered ! ❌");
  }
   else {
    messageDeliver("Better Luck in another life !");
  }
});

function hyphenRemover(text) {
  return text.replaceAll("-", "");
}

function sum() {
  const filtered = hyphenRemover(dobInput.value);
  let add = 0;
  for (let i = 0; i < filtered.length; i++) {
    add = add + Number(filtered.charAt(i));
  }
  return add;
}

function remainder() {
  const numerator = sum();
  const denominator = luckyInput.value;

  if (denominator > 1) {
    return numerator % denominator
  } else {
    return false;
  }
}


function messageDeliver(reply) {
  return msg.innerText = reply;
}
