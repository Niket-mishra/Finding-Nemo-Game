var circle = document.getElementById('circle');
var value;
var random = Math.floor(Math.random()*10)+1;
var circles = document.querySelectorAll('.c1');
var attempts =document.getElementById('attempt');
let previousChild=null;
var guess = 0;

// circle.addEventListener('click',
//     (e)=>{
        
//        value = e.target.id;
//        var ele = document.getElementById(value);
//        ele.style.display='inline';
//        ele.style.width=0;
//         ele.style.height=0;
//         ele.appendChild(img2).style.display='inline';
        

//     }
// )
function func2() {
    
    
    
}
function randomimg(){
    
    var e =document.getElementById(random)
    var imgvalue = 'img'+random;
    console.log(imgvalue);
    console.log("hii");
    document.getElementById(imgvalue).src='nemo.png';
    var child;
    for (let i = 1; i <= 10; i++) {
        var imgval = 'img'+i;
        
        if (imgval!=imgvalue) {
            console.log(imgval)
            child = document.getElementById(imgval);
            child.src='turtle.png';
            
        }
        
    }

    circles.forEach((ele)=>{
       
        
        ele.addEventListener('click',(e)=>{
            let child;
            if (guess!=5) {
                
            } else{alert("Game Over"); return};
            guess++;
            attempts.innerHTML="Attempts Used : " +guess;
            if (e.target.id[0] == 'i') {
                child = document.getElementById(e.target.id);
            } else{
                child = document.getElementById('img'+e.target.id);
            }
            console.log('img'+e.target.id);
            if (previousChild && previousChild !== child) {
                previousChild.style.display = 'none';
                previousChild.parentElement.style.height = '150px';
                previousChild.parentElement.style.width = '150px';
                previousChild.parentElement.style.display = 'inline-block';
            }

            if (child.parentElement.style.display !== 'inline') {
                console.log('none');
                child.style.display = 'inline';
                child.parentElement.style.height = '0px';
                child.parentElement.style.width = '0px';
                child.parentElement.style.display = 'inline';
            } else {
                console.log('in');
                child.style.display = 'none';
                child.parentElement.style.height = '150px';
                child.parentElement.style.width = '150px';
                child.parentElement.style.display = 'inline-block';
            }

            previousChild = child;
            
                
        })
    })
    

}
function showdiv() {
    document.getElementById('container').style.display="flex";
    document.getElementById('attempt').innerHTML="Attempts Used : "+guess
    
    if(document.getElementById('container').style.display="flex"){
        document.getElementById('btn').style.display='none';
        document.getElementById('btn1').style.display='none';
        document.getElementById('btn2').style.display='none';
        randomimg();
    }
}

function showdiv1() {
    document.getElementById('instbox').style.display="inline-block";
    
    if(document.getElementById('instbox').style.display="inline-block"){
        document.getElementById('btn').style.display='none';
        document.getElementById('btn1').style.display='none';
        document.getElementById('btn2').style.display='none';
        document.getElementById('btn3').style.display='block';
        
    }
}