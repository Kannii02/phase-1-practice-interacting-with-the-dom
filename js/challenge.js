let counter = document.getElementById("counter");
let count = 0;

let interval = setInterval(() => {
  count++;
  counter.innerText = count;
}, 1000);

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

minusButton.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});

let likeButton = document.getElementById("heart");
let likeList = document.querySelector(".likes"); 
let likes = {}; 

likeButton.addEventListener("click", () => {
  if (likes[count]) {
    likes[count]++;
  } else {
    likes[count] = 1;
  }

  let existingLike = document.getElementById(`like-${count}`);

  if (existingLike) {
    existingLike.innerText = `${count} has been liked ${likes[count]} times`;
  } else {
    let li = document.createElement("li");
    li.id = `like-${count}`;
    li.innerText = `${count} has been liked 1 time`;
    likeList.appendChild(li);
  }
});

let pauseButton = document.getElementById("pause");
let isPaused = false;

pauseButton.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(interval); 
    pauseButton.innerText = "Resume"; 
    isPaused = true;

    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    interval = setInterval(() => {
      count++;
      counter.innerText = count;
    }, 1000);

    pauseButton.innerText = "Pause";
    isPaused = false;

    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
  }
});

let commentForm = document.getElementById("comment-form");
let commentInput = document.getElementById("comment-input");
let commentList = document.getElementById("list");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh

  let newComment = document.createElement("p");
  newComment.innerText = commentInput.value;
  commentList.appendChild(newComment);

  commentInput.value = ""; // Clear input field
});
