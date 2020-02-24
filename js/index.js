let btn = document.querySelector('.body__btn'),
    input = document.querySelector('.body__input'),
    wrap = document.querySelector('.wrap'),
    gradient = document.querySelector('.wrap__btn'),
    btn__right = document.querySelector('.btn__right'),
    btn__left = document.querySelector('.btn__left'),
    extend__range = document.querySelector('.extend__range-input'),
    grad = false;

let color = 0;

input.min = 100000;
input.max = 999999;

extend__range.min = 10
extend__range.max = 100000;

function changeColor(){
    color = '#' + input.value;
    console.log(color);
    wrap.style.backgroundColor = color;
}

function changeGradient(){
    wrap.style.background = `-webkit-radial-gradient(#871683, ${color = '#' + input.value})`;
}

extend__range.addEventListener('input', function(){
    btn__left.textContent = '-' + extend__range.value;
    btn__right.textContent = '+' + extend__range.value;
});

const trigger = function(){
    if(grad == false){
        changeColor();
    } else{
        changeGradient();
    };

    if(color == '#871683'){
        console.log('Congratulation!');
    };

    // console.log(color);
};

const clear = function(){
    input.value = input.min;
    extend__range.value = extend__range.min;
    wrap.style.background = '';
    grad = false;
    btn__left.textContent = '-' + extend__range.min;
    btn__right.textContent = '+' + extend__range.min;
}


input.addEventListener('input', trigger);
btn.addEventListener('click', clear);

gradient.addEventListener('click', function(){
    grad = true;
});


btn__right.addEventListener('click', function(){
    input.value = +input.value + +extend__range.value;
    if(grad == true){
        changeGradient();
    } else {
        changeColor();
    };
});


btn__left.addEventListener('click', function(){
    input.value = +input.value - +extend__range.value;
    if(grad == true){
        changeGradient();
    } else {
        changeColor();
    };
});
