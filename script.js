let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let str1="";
let str2="";
let c=0;
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '%')
        {   
            a=Array.from(string);
            for (const i of a) {
                toString(i)
                if(i=='*'){
                    break;
                }
                str1+=i;
                c++;
            }
            for (i=c+1;a[i]!='%';i++){
                toString(i)
                if(i=='%'){
                    break;
                }
                str2+=a[i];
                
            }
            string=(str1*str2)/100;
            input.value=string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })

})
