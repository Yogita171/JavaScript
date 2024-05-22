const buttons=document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function(button){
   console.log(button);
   button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)

        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }

        // if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id;
        // }

        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }

        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }

        const color = 1;
        switch(color){
                case 1:
                    e.target.id === 'grey';
                    body.style.backgroundColor = e.target.id;
                    break;

                case 2:
                    e.target.id === 'white';
                    body.style.backgroundColor = e.target.id;
                    break;

                case 3:
                    e.target.id === 'blue';
                    body.style.backgroundColor = e.target.id;
                    break;

                case 3:
                    e.target.id === 'yellow';
                    body.style.backgroundColor = e.target.id;
                    break;
            
        }
   })
        

     
   
})