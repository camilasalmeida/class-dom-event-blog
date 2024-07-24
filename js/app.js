//------------- LIKE DISLIKE BUTTON PART -----------------

const likeButtonElement = document.querySelector('#like-button');
const dislikeButtonElement = document.querySelector('#dislike-button');

let likesCount = 0;
let dislikeCount = 0;

const handleReaction = (event) => {
    if (event.target.id === 'like-button'){
    //console.log(event.target.id);
    likesCount = likesCount + 1;
    //console.log(likesCount);
    likeButtonElement.textContent = `${likesCount} like's this post!`;
} else if (event.target.id === 'dislike-button'){
    //console.log(event.target.id);
    dislikeCount = dislikeCount + 1;
    //console.log(dislikeCount);
    dislikeButtonElement.textContent = `${dislikeCount} dislike's this post!`;
}
};

likeButtonElement.addEventListener('click', handleReaction);
dislikeButtonElement.addEventListener('click', handleReaction);

//-------------COMMENT BUTTON PART -----------

const commentButtonElement = document.querySelector('#comment-button');
const inputElement = document.querySelector('input');
const commentListElement = document.querySelector('ul');

const handleComment = () => {
    if(inputElement.value != ""){
        const commentElement = document.createElement('li');
        commentElement.textContent = inputElement.value; 
        commentListElement.appendChild(commentElement);
        inputElement.value = "";
}}
;

commentButtonElement.addEventListener('click', handleComment);




