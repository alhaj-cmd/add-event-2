// st-1 add button handeler
document.getElementById('submit').addEventListener('click', function(){
    // st*2 user commet
    const commentBox =document.getElementById('comment');
  // const userCmt = commentBox.value;
   // st-3 catch create
   const p = document.createElement('p')
   p.innerText = commentBox.value;
//    st-4 append comment
const appendComent =document.getElementById('part');
appendComent.appendChild(p);
//st-5 box faka kore daw
commentBox.value=' ';
})