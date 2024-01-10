form.onsubmit=()=>{
    let li = document.createElement("li");
    let spanDel = document.createElement("span");
    let checkbox= document.createElement("span");

        
       spanDel.onclick=()=>del(li);
      
      
       
    li.innerHTML = inputPassword2.value ; 
    spanDel.innerHTML = '<button type="button" class="btn btn-danger  rounded-1">DELETE</button>';
    checkbox.innerHTML='<i class=" bi bi-check-circle-fill" ></i>';
    

   
    checkbox.addEventListener('click',function(){
           
        let count=0
        if(this.classList.toggle('ul')){

             count++
              
           console.log(count);


              document.querySelector('ul').style.textDecoration = "line-through";

            }else{
                document.querySelector('ul').style.textDecoration = "none";
            }
           
        
       
    
   
       

      
    
    })





    ul.appendChild(li);
    li.appendChild(spanDel);
    li.prepend(checkbox)
    inputPassword2.value="";

   return false;

   
}

function del(element){
    element.remove();
}









let btnnuit=document.getElementById("f")

let body=document.querySelector('body')

let textH1=document.querySelector('h1')



btnnuit.addEventListener('click',function(){
  
    this.classList.toggle('bi-moon')


    if(this.classList.toggle('bi-brightness-high')){
        body.style.background='white';
    textH1.style.color='black';
    btnnuit.style.color='black';
    body.style.transition="2s"


    }else{

    body.style.background='black';
    textH1.style.color='white';
    btnnuit.style.color='white';
    body.style.transition="2s"

}
    
  




    
})









  











   


















