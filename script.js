var images = document.getElementsByClassName("image");
var cases = document.getElementsByClassName("case");
var src = [];
let remainingTime = 60; // Adjust this to the desired countdown time

// Function to update the timer display

console.log(src)
for (let i = src.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [src[i], src[j]] = [src[j], src[i]];
}
console.log(src)
for (var i = 0; i < images.length; i++) {
src.push(images[i].getAttribute('src'));
}

for (let i = 0; i < images.length; i++) {
images[i].setAttribute('src', src[i]);
}
var first = null;
var second = null;
var couple=0;
for (var i = 0; i < cases.length; i++) {
cases[i].addEventListener('click', function() {
    var image1 = this.querySelector('img'); 

    if (first === null) {
        first = image1;
        first.style.visibility = 'visible'; // Display the first card
    } else if (second === null) {
        second = image1;
        second.style.visibility = 'visible'; // Display the second card

        if (first.getAttribute('src') === second.getAttribute('src')) {
            // If the sources match, keep the cards visible
            first = null;
            second = null;
            couple+=1;
        } else {
            // If the sources don't match, hide the cards after a delay
            setTimeout(function() {
                first.style.visibility = 'hidden';
                second.style.visibility = 'hidden';
                first = null;
                second = null;
            }, 500); // Wait for 1 second before hiding the cards
        }
    }
});
}


function updateTimerDisplay() {
const minutes = Math.floor(remainingTime / 60);
const seconds = remainingTime % 60;
const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
document.getElementById('timer').textContent = formattedTime;
}

// Function to start the timer
function startTimer() {
updateTimerDisplay();
const timerInterval = setInterval(function () {
    if (remainingTime <= 0) {
        clearInterval(timerInterval); 
        alert('Timer has expired!');
    }else if(couple==8)
    {
        clearInterval(timerInterval); 
        alert('Congrats');
    }
     else {
        remainingTime--;
        updateTimerDisplay();
    }
}, 1000); 
}

setTimeout(startTimer, 3000);