if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('li-product-remove')
    console.log(removeCartItemButtons)
    for(var i=0;i<removeCartItemButtons.length;i++){
        var button =removeCartItemButtons[i]
        button.addEventListener('click',removeCartItem)
    }

    var quantityInputs=document.getElementsByClassName('cart-plus-minus-box')
    for(var i=0;i<quantityInputs.length;i++){
        var input =quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }

    var addToCartButtons=document.getElementsByClassName('add-cart')
    for(var i=0;i<addToCartButtons.length;i++){
        var button =addToCartButtons[i]
        button.addEventListener('click',addToCartClicked)
    }

    document.getElementsByClassName()
}

function removeCartItem(event){
    var buttonClicked=event.target
    buttonClicked=buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(event){
    var input=event.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1
        alert('dbfdb')
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button=event.target
    var shopItem=button.parentElement.parentElement.parentElement.parentElement
    var title=shopItem.getElementsByClassName('product_name')[0].innerText
    var price=shopItem.getElementsByClassName('new-price')[0].innerText
    var imgSource=shopItem.getElementsByClassName('item-img')[0].src
    console.log(title, price,imgSource)
    addItemToCart(imgSource,title,price)
    updateCartTotal()
}

function addItemToCart(imgSource,title,price){
    var cartRow=document.createElement('div')
    cartRow.classList.add('table')
    var cartItems=document.getElementsByClassName('table-responsive')[0]
    var cartItemNames=cartItems.getElementsByClassName('product_name')
    for(var i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText==title){
            alert('Sản phẩm này hiện đã có trong giỏ hàng của bạn!')
            return
        }
    }
     var cartRowContent=`
     <table class="table" id="table-products">
     <thead>
     </thead>
     <tbody>
         <tr class="row1">
             <td class="li-product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
             <td class="li-product-thumbnail"><a href="#"><img src="${imgSource}" style="width:150px" alt="Li's Product Image"></a></td>
             <td class="li-product-name"><a href="#">${title}</a></td>
             <td class="li-product-price"><span class="amount">${price}</span></td>
             <td class="quantity">
                 <label>Quantity</label>
                 <div class="cart-plus-minus">
                     <input class="cart-plus-minus-box" value="1" type="text">
                     <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                     <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                 </div>
             </td>
             <td class="product-subtotal"><span class="amount">7000đ</span></td>
         </tr>
     </tbody>
 </table>`
        cartRow.innerHTML=cartRowContent

    // console.log(cartItems);
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('li-product-remove')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-plus-minus-box')[0].addEventListener('change',quantityChanged)
    // console.log(cartItems);
    // console.log(scope.displayDetails);
    //Append data into cart-data.json

    // fetch('./data/cart-data.json')
    //     .then(response => { return response.json() })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
}

function updateCartTotal() {
    var cartItemContainer=document.getElementsByClassName('table-responsive')[0]
    var cartRows=cartItemContainer.getElementsByClassName('table')
    var total=0
    for(var i=0;i<cartRows.length;i++){
        var cartRow=cartRows[i]
        var priceElement=cartRow.getElementsByClassName('li-product-price')[1]
        var quantityElement=cartRow.getElementsByClassName('cart-plus-minus-box')[0]
        var price=parseFloat(priceElement.innerText.replace('đ',''))
        var quantity= parseInt(quantityElement.value)
        subtotal=price*quantity
        total=total+subtotal
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName('product-subtotal')[0].innerText=subtotal+'đ'
    // var subtotalElement=cartRow.getElementsByClassName('product-subtotal')[0]
    // var subtotal1=parseFloat(priceElement.innerText.replace('đ',''))
    // console.log(subtotal1)
    document.getElementsByClassName('cart-page-total1')[0].innerText=total+'đ'
}