let listCard =[]
// get data card from cookie

function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCard'));
    if(cookieValue){
        listCard = JSON.parse(cookieValue.split('=')[1]);
    }
 }
 checkCart();
 addCartToHtml();
 function addCartToHtml(){
    //clear data from html
    let listCardHtml =document.querySelector('.returnCard .list');
    listCardHtml.innerHTML = '';
    let totalQuantityHtml = document.querySelector('totalQuantity');
    let totalPriceHtml = document.querySelector('totalPrice');

    let totalQuantity  = 0;
    let totalPrice = 0;


    if(lisrCart){
        listCard.forEach(product=> {
           if(product){
            let newp = document.createElement('div');
            newp.classList.add('item');
            newp.innerHTML = 
            `<img src="${product.image}" alt="">
            <div class="info">
                <div class="name">${product.name}</div>
                <div class="price"$${product.price} Product</div>
            </div>
            <div class="quantity">${product.quantity}</div>
            $${product.price * product.quantity}
            <div class="returnprice">100$</div>`;
            listCardHtml.appendChild(newp);
            totalQuantity = totalQuantity + product.quantity;
            totalPrice = totalPrice + (product.price * product.quantity);
           }
        })
    }
    totalQuantityHtml.innerText = totalQuantity;
    totalPriceHtml.innerText = '$' + totalPrice;

 }