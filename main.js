/*  
    
let person = function ( name, age, salary, gender){
    this.personName = name,
    this.age = age,
    this.salary = salary,
    this.gender = gender
}
person.prototype.welcome = function (){
    console.log(` Welcome ${this.personName}`);
}

class Person {
    constructor(name , age , salary , gender){
        this.personName = name,
        this.age = age,
        this.salary = salary,
        this.gender = gender
    }
    welcome(){
        console.log(` Welcome ${this.personName}`);
    }
}

let amr = new person ('Amr Sayed', 25 , 5000 , 'Male');
let khalil = new Person ('Khalil Sayed', 27 , 5000 , 'Male');

console.log(amr, khalil)

console.log("hello ")


Number & Prompt -------------------
var num1 = window.prompt("Enter Your First Number: ");
console.log(Number(num1))



If Statement ------------------------

var role = window.prompt("Enter Your Role");

if( role == "admin"){
    console.log("You can edit, add, remove , etc ....");
}
else if(role == "madetor")
{
    console.log("You can edit, add");
}

else if(role == "editor")
{
    console.log("You can edit");
}
else 
{
    console.log("You can`t do anything ");
}


*/


var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCatgInput = document.getElementById("productCatg");
var productDescInput = document.getElementById("productDesc");
var addBtn = document.querySelector(".btn-info");
var updateBtn = document.querySelector('.btn-success');
var ubdatedIndex  ;

var productsContainer = [];


if(localStorage.getItem('products') == null){
    productsContainer =[]
}
else{
    productsContainer = JSON.parse(localStorage.getItem('products'));
    displayProducts();
}

if(productsContainer.length == 0){
    
}

function addProduct(){
if(valedateProductName() == true){
if( checkInputs() == true ){

        var products ={
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCatgInput.value,
            desc:productDescInput.value
        }
    
        productsContainer.push(products);
        localStorage.setItem('products', JSON.stringify(productsContainer))
        displayProducts();
        clearForm();
        
    }
    else{
        window.alert("Sorry all fields are Required")
    }
}
else{
            window.alert("Name must start with a Capital letter")

}
    


}

function clearForm(){
    productNameInput.value ="";
    productPriceInput.value = "";
    productCatgInput.value = "";
    productDescInput.value = "";
}

function displayProducts(){

    var cartona = ``;
    for ( var i = 0; i < productsContainer.length; i++)
    {
        cartona += `<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="retriveProduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
    }
        document.getElementById("tableBody").innerHTML = cartona;
}

function checkInputs(){
    if (productNameInput.value !="" && productPriceInput.value !="" 
    && productCatgInput.value !="" && productDescInput.value !=""){
        return true;
    }
    else{
        return false;
    }
}

function deleteProducts(index){
    productsContainer.splice(index, 1);
    displayProducts();
}

function search(){
    var searchInput = document.getElementById("searchInput").value
    var searchBox = ``;
    for(var i=0; i<productsContainer.length ; i++){
        if(productsContainer[i].name.toLowerCase().includes(searchInput.toLowerCase()))
        {
        searchBox += `<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
        }
    }
document.getElementById("tableBody").innerHTML = searchBox ;

}

function valedateProductName(){

var regex = /^[A-Za-z]{2,10}$/;

if(regex.test(productNameInput.value) == true){
    return true;
}
else{
    return false;
}
}

function retriveProduct(i){
    ubdatedIndex = i;

    up();

    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');

    productNameInput.value;

    productNameInput.value = productsContainer[i].name;
    productPriceInput.value = productsContainer[i].price;
    productDescInput.value = productsContainer[i].desc;
    productCatgInput.value = productsContainer[i].category;

}
function updateProduct(){

    
        productsContainer[ubdatedIndex].name = productNameInput.value ;
        productsContainer[ubdatedIndex].price = productPriceInput.value ;
        productsContainer[ubdatedIndex].desc = productDescInput.value ;
        productsContainer[ubdatedIndex].category= productCatgInput.value ;

        displayProducts();
        localStorage.setItem('products', JSON.stringify(productsContainer))
        
        updateBtn.onclick = clearForm();

        addBtn.classList.remove('d-none');
        updateBtn.classList.add('d-none');
    }

function up(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
