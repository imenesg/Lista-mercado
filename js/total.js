var totalToPay = document.querySelector(".total")

var addButton = document.querySelector(".icon_add")


function somaTotal(){
    
    var priceItem = document.querySelectorAll(".price")

    var total = 0;

    if(priceItem.length == 0){
        totalToPay.innerHTML =`R$00`;
    }
    for(i= 0 ; i<priceItem.length; i++){

        console.log("foi foi");
        console.log(priceItem[i].textContent);

        total += Number(priceItem[i].textContent);

        console.log(`O total a pagar é:${total}`);

        totalToPay.innerHTML =`R$${total}`; 

        console.log("somado so ma do ");
    }
    
}