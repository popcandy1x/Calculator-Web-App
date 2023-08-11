let disply=document.getElementById('display')
console.log(disply)
console.log(document.querySelector('.inputfield'))
let string=''
let buton=document.querySelectorAll('.button')
console.log(buton)
buton.forEach(button =>{
    button.addEventListener('click',e =>{
        let d=button.getAttribute('value')
        string=string.trim()
        if(d == "="){
            document.querySelector('.inputfield').value=eval(string)
            string=String(eval(string))
        }
        else if(d == "AC"){
            string=''
            document.querySelector('.inputfield').value=string
        }
        else if(d == 'DE'){
            string=string.toString().slice(0,-1)
            document.querySelector('.inputfield').value=string
        }
        else{
            string+=button.getAttribute('value')
            document.querySelector('.inputfield').value=string
        }
    })
});