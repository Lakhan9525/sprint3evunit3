

const url=` https://masai-vouchers-api.herokuapp.com/api/vouchers`

fetch(url)
.then(function(res){
    return res.json();

})
.then (function(res){
   console.log(res[0].vouchers)
   append(res[0].vouchers);

})

append=(data)=>{
    for(let i=0; i<data.length; i++){
        var box=document.createElement("div");
        var name=document.createElement("h4");
        name.innerText=data[i].name;
        var image=document.createElement("img");
        image.src=data[i].image;
        var price=document.createElement("p");
        price.innerText=data[i].price;
        var buy=document.createElement("button");
        buy.innerText="buy";
        buy.setAttribute=("class","buy_voucher");
        buy.addEventListener("click",function(){
            buying_items(data[i]);

        })
        box.append(name,image,price,buy);
        document.querySelector("#voucher_list").append(box);



    }
}

var price=JSON.parse(localStorage.getItem("wallet"));
var total=0;
for(var i=0; i<price.length; i++){
    total=total+price[i];

}
console.log(total);
document.querySelector("#wallet_balance").innerText=total;

var arr1=JSON.parse(localStorage.getItem("purchase"))||[];

buying_items=(data)=>{
    if(total<data.price){
        alert("Sorry!insufficient balnce");
    }
    else{
        total=total-data.price;
        alert("Hurray!purchase successful")
        console.log(total);
        document.querySelector("#wallet_balance").innerText=total;
        arr1.push(data);
        localStorage.setItem("purchase",JSON.stringify(arr1));

    }

}







