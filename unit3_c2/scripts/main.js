
let arr1=JSON.parse(localStorage.getItem("user"))||[];
function product(e){
    e.preventDefault();
    let form=document.getElementById("add");
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let wallet=form.amount.value;

    let p1= new products(name,email,address,wallet);
    arr1.push(p1);
    console.log("arr1",arr1);
    localStorage.setItem("user",JSON.stringify(arr1));

}
function products(n,e,a,w){
    this.name=n;
    this.email=e;
    this.address=a;
    this.wallet=w;

}
let arr=JSON.parse(localStorage.getItem("wallet"))||[];

add=()=>{
    let amount=document.querySelector("#amount").value;
    console.log(arr);
    arr.push(Number(amount));
    localStorage.setItem("wallet",JSON.stringify(arr));
}