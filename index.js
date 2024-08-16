let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let cartcount =0;


function increment() {
    count++;
    document.getElementById("counter").textContent = count;

}

function decrement() {
    count--;
    document.getElementById("counter").textContent = count;


    if(count<=0){
        count += 1;
    }

}
function increment2() {
    count2++;
    document.getElementById("counter2").textContent = count2;

}

function decrement2() {
    count2--;
    document.getElementById("counter2").textContent = count2;

    
    if(count2<=0){
        count2 += 1;
    }

}
function increment3() {
    count3++;
    document.getElementById("counter3").textContent = count3;

}

function decrement3() {
    count3--;
    document.getElementById("counter3").textContent = count3;

    
    if(count3<=0){
        count3 += 1;
    }

}
function increment4() {
    count4++;
    document.getElementById("counter4").textContent = count4;

}

function decrement4() {
    count4--;
    document.getElementById("counter4").textContent = count4;

    
    if(count4<=0){
        count4 += 1;
    }

}
function scrollToSection(itemMenu) {
    document.getElementById("itemMenu").scrollIntoView({ behavior: 'smooth' });
  }


function addToCart(){

if(count > 0){
    cartcount +=1;
}
count=0;
document.getElementById("counter").textContent = count;
document.getElementById("itemNumber").textContent = cartcount;
if (cartcount > 0){
    document.getElementById("itemNumber").style.display="block";
}else{
    document.getElementById("itemNumber").style.display="none";
}
    }
    
    function addToCart2(){

        if(count2 > 0){
            cartcount +=1;
        }
        count2=0;
        document.getElementById("counter2").textContent = count2;
        document.getElementById("itemNumber").textContent = cartcount;
        if (cartcount > 0){
            document.getElementById("itemNumber").style.display="block";
        }else{
            document.getElementById("itemNumber").style.display="none";
        }
            }
            function addToCart3(){

                if(count3 > 0){
                    cartcount +=1;
                }
                count3=0;
                document.getElementById("counter3").textContent = count3;
                document.getElementById("itemNumber").textContent = cartcount;
                if (cartcount > 0){
                    document.getElementById("itemNumber").style.display="block";
                }else{
                    document.getElementById("itemNumber").style.display="none";
                }
                    }
                    function addToCart4(){

                        if(count4 > 0){
                            cartcount +=1;
                        }
                        count4=0;
                        document.getElementById("counter4").textContent = count4;
                        document.getElementById("itemNumber").textContent = cartcount;
                        if (cartcount > 0){
                            document.getElementById("itemNumber").style.display="block";
                        }else{
                            document.getElementById("itemNumber").style.display="none";
                        }
                            }
                            
                             
                        
                     
                
             
             
