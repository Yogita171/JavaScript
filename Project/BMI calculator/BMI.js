const form=document.querySelector('form')
//this gives empty value
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();
    //this gives actual value after submit button click
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `please enter a valid height ${height}`;
    }else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter a valid weight ${weight}`;
    }else{
        const BMI=(weight / ((height*height) / 10000)).toFixed(2);
        //show the result
        if(BMI<18.6){
            results.innerHTML=`<span>${BMI}</span> is underweight`;
        }else if(BMI>18.6 && BMI<24.9){
            results.innerHTML=`<span>${BMI}</span> is normal weight`;
        }else{
            results.innerHTML=`<span>${BMI}</span> is overweight`;
        }
    }

    
})