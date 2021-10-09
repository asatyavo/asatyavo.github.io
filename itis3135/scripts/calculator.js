const calculator =document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', e=>{
    if(event.target.matches('button')){

        
        const key= event.target
       

        const keyValue = key.textContent
        const displayValue = display.textContent
        const type = key.dataset.type
        const previousKeyType = calculator.dataset.previousKeyType
       
        
        if(type==="number"){
            if(displayValue==='0'){
                
                display.textContent = keyValue 
            }else if(previousKeyType==='operator'){
                display.textContent = keyValue
                

            }
        }
    }
)