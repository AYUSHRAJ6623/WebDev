// function joined(){
//     let title=document.getElementById('title');
//     title.innerText='Thanks for joining the bootcamp!!'
// }


// function convert(){
//     let m=document.getElementById('input_m');
//     let cm = m.value * 100;
//     let finalresult=m.value + " M is " + cm + " Cm "; 
//     let result= document.getElementById('result');
//     result.innerText=finalresult;
    
// }



// function change(){
//     let ml=document.getElementById('volume_i');
//     let l=ml.value * 1000;
//     let finalresult = ml.value + " l is " + l + " ml ";
//     let result= document.getElementById('result');
//     result.innerText=finalresult;
//     // to make input field blank 
//     ml.value='';
// }

    function split(){
        let amount = document.getElementById('amount');
        let person = document.getElementById('person');
        let bill = (amount.value / person.value).toFixed(2);
        document.getElementById('result').innerText=bill;
        // result.innerText=result;
    }
    