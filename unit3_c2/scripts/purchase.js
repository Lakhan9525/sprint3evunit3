let purchase=JSON.parse(localStorage.getItem("purchase"))
purchase.map((e,i)=>{
    var box=document.createElement("div");
    var name=document.createElement("h4");
    name.innerText=e.name;
    var image=document.createElement("img");
    image.src=e.image;
    var price=document.createElement("p");
    price.innerText=e.price;
    box.append(image,name,price);
    document.querySelector("#purchased_vouchers").append(box);

})

var amount=JSON.parse(localStorage.getItem(amount));
document.getElementById("wallet_balnce").innerText=amount;
