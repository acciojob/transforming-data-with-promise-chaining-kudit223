//your JS code here. If required.

const inputField=document.querySelector('#ip');
const btn=document.querySelector('#btn');
const output=document.querySelector('#output');


function promise1(input){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(input);
        },2000)
    })
}

function promise2(input){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(input*2);
        },2000)
    })
}

function promise3(input){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(input-3);
        },1000)
    })
}

function promise4(input){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(input/2);
        },1000)
    })
}

function promise5(input){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(input+10);
        },1000)
    })
}

btn.addEventListener('click',()=>{
    let inputValue=inputField.value;
    inputField.value='';
    promise1(inputValue)
    .then((data)=>{
        output.innerHTML=`Result:${data}`;
        return promise2(data)
    })
    .then(data=>{
        output.innerHTML=`Result:${data}`;
        return promise3(data)
    })
    .then(data=>{
        output.innerHTML=`Result:${data}`;
        return promise4(data)
    })
    .then(data=>{
        output.innerHTML=`Result:${data}`;
        return promise5(data)
    }).then(data=>{
        output.innerHTML=`Final Result:${data}`;
    })
})