//delete product in localstorage
 function Delete(key_item){
    const indexdelete=0
    let getproducts=[]
    if('cart' in localStorage){
        getproducts=JSON.parse(window.localStorage.getItem("cart"));
         // Assuming you want to delete the element at index key
         getproducts.splice(key_item, 1);
        console.log(getproducts);
        }

        const update=JSON.stringify(getproducts);
        window.localStorage.setItem("cart",update);
        window.location.reload();
    }
 

// get product in cart
function getProduct() {
    let getPoductCart = []
    if ('cart' in localStorage) {
        getPoductCart = JSON.parse(localStorage.getItem('cart'));
    }
    return getPoductCart;
}
//set product in page 
function setproduct() {
    let getproduct=getProduct();
    let get_parent_items = document.querySelector('#get_parent_items');
   getproduct.forEach((ele,key) => {
    let item = document.createElement('div');
    item.innerHTML = `
    <div class="d-flex align-items-center mb-4">
    <div class="me-3 position-relative">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
        1
      </span>
      <img src="${ele.image}" style="height: 96px; width: 96x;" class="img-sm rounded border" />
    </div>
    <div class="">
      <a href="#" class="nav-link">
        ${ele.description} <br />
        
      </a>
      <div class="price text-muted">price:${ele.price}</div>
      <button type="button" class="button" onclick="Delete(${key})">Delete</button>
    </div>
    </div>`    
    get_parent_items.append(item)   
});
}
getProduct();
setproduct();
