// step-1
document.getElementById('input-type').addEventListener('click', function(){
    document.getElementById('head').style.display = 'none';
});
// step-2
// document.getElementById('input-type').addEventListener('click', function(){
//     document.getElementById('head').style=('node')
// })
// step-2 focus
document.getElementById('input-type').addEventListener('focus', function(){
    document.body.style.backgroundColor ='red'
  //  console.log('focused')
});
//step-2 blur
document.getElementById('input-type').addEventListener('blur', function(){
    document.body.style.backgroundColor ='white'
});
//step-2 keydown
// document.getElementById('input-type').addEventListener('keydown', function ( ) {
//     const addInput =document.getElementById('input-type');
//     console.log(addInput.value);
// })
//step-2 keyup
document.getElementById('input-type').addEventListener('keyup', function (event) {
    const addInput =document.getElementById('delets');
    if(event.target.value=='delete'){
       // document.getElementById('delets')
        addInput.removeAttribute('disabled');

    }
    else{
addInput.setAttribute('disabled',true);
    }
})


// change
document.getElementById('input-type').addEventListener('change', function ( ) {
    const addInputa =document.getElementById('input-type');
    console.log(addInputa.value);
})