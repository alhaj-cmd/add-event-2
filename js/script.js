const buttons = document.getElementById('btn');
buttons.onclick =makes;

function makes(){
    document.body.style.backgroundColor = 'blue';
};
// 2nd button call
function make(){
    document.body.style.backgroundColor ='red';
}

//3rd anonnymous function

const button = document.getElementById('add');
button.onclick=function(){
    document.body.style.backgroundColor='green';
}

// 4th addeventlistencer makes

const btns = document.getElementById('adds');
btns.addEventListener('click', making);
function making(){
    document.body.style.backgroundColor ='hotpink'
}

// 5th addeventlistener making diffirent way

const style = document.getElementById('btn-style');
style.addEventListener('click', function(){
    document.body.style.backgroundColor='darkred'
})

// 6th direct way 
document.getElementById('style').addEventListener('click', function(){
    document.body.style.backgroundColor='lightblue';
})

// common way usnih method

function common (){
    const cliked = document.getElementById('peragrap')
    cliked.innerText = 'tumi ki amy chino'
}

// direct 
document.getElementById('styles').addEventListener('click', function(){
    const clikes = document.getElementById('peragrap')
    clikes.innerText = 'tumi ki amy dekco'
})