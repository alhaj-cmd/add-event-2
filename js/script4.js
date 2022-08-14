document.getElementById('second').addEventListener('click', function(event){
    console.log('second item click')
    event.stopPropagation();
})
//ul
document.getElementById('user').addEventListener('click', function(){
    console.log('user item click')
})
// section
document.getElementById('section').addEventListener('click', function(){
    console.log('section item click')
})