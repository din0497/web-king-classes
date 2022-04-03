const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

const korinishLike = document.getElementById("display1");
const korinishDislike = document.getElementById("display2");

const getLike = () => {
  ++korinishLike.innerText;
};

const getDislike = () => {
  korinishDislike= ++korinishDislike.innerText;
};

like.addEventListener("click", getLike);
dislike.addEventListener('click', getDislike)