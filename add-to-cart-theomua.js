let theomuas=[
    {
        name:'Đèn Trang Trí',
        tag:'tttm-1_p-1',
        price:355000,
        inCart:0    
    },
    {
        name:'Set Châu Trang Trí',
        tag:'tttm-2',
        price:225000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-3',
        price:135000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-4',
        price:135000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-5',
        price:155000,
        inCart:0    
    },
    {
        name:'Set Châu Bạc LILY',
        tag:'tttm-6',
        price:225000,
        inCart:0    
    },
    {
        name:'Set Châu Bạc LILY',
        tag:'tttm-7',
        price:195000,
        inCart:0    
    },
    {
        name:'Cây Thông 1m2',
        tag:'tttm-8',
        price:346000,
        inCart:0    
    },
    {
        name:'Cây Thông 1m5',
        tag:'tttm-9',
        price:385000,
        inCart:0    
    },
    {
        name:'Cây Thông 1m8',
        tag:'tttm-10',
        price:420000,
        inCart:0    
    },
    {
        name:'Set Châu Giấy',
        tag:'tttm-11',
        price:35000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-1_p-1',
        price:355000,
        inCart:0    
    },
    {
        name:'Set Châu Trang Trí',
        tag:'tttm-2',
        price:225000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-3',
        price:135000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-4',
        price:135000,
        inCart:0    
    },
    {
        name:'Đèn Trang Trí',
        tag:'tttm-5',
        price:155000,
        inCart:0    
    },
    {
        name:'Set Châu Bạc LILY',
        tag:'tttm-6',
        price:225000,
        inCart:0    
    },
    {
        name:'Set Châu Bạc LILY',
        tag:'tttm-7',
        price:195000,
        inCart:0    
    },
    {
        name:'Cây Thông 1m2',
        tag:'tttm-8',
        price:346000,
        inCart:0    
    },
    {
        name:'Cây Thông 1m5',
        tag:'tttm-9',
        price:385000,
        inCart:0    
    },
    {
        name:'Cây Thông 1m8',
        tag:'tttm-10',
        price:420000,
        inCart:0    
    },
    {
        name:'Set Châu Giấy',
        tag:'tttm-11',
        price:35000,
        inCart:0    
    }
]

let carts=document.getElementsByClassName('add-cart')

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(theomuas[i]);
        totalCost(theomuas[i]);
    })
}
function onLoadCartNumber(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart-item-count').textContent=productNumbers;
    }
}

function onLoadTotal(){
    let cartCost=localStorage.getItem('totalCost');
    if(cartCost){
        document.querySelector('.item-text').textContent=cartCost+'đ';
        document.querySelector('.minicart-total1').textContent=cartCost+'đ';
        document.querySelector('.cart-page-total1').textContent=cartCost+'đ';
    }
}

function cartNumbers(product){
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart-item-count').textContent=productNumbers+1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart-item-count').textContent=1;
    }
    setItem(product);
}

function setItem(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart+=1;
    }else{
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }
    }
    
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("dsdsd",product.price);
    let cartCost=localStorage.getItem("totalCost");
    console.log(cartCost);

    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+product.price);
        document.querySelector('.item-text').textContent=cartCost+product.price+'đ';
        document.querySelector('.minicart-total1').textContent=cartCost+product.price+'đ';
    }else{
        localStorage.setItem("totalCost",product.price);
        document.querySelector('.item-text').textContent=product.price+'đ';
        document.querySelector('.minicart-total1').textContent=cartCost+'đ';
    }
    
}

function displayCart(){
    let cartItems=localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);
    let productContainer=document.querySelector(".products");
    console.log(cartItems);
    if(cartItems&&productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML+=`
            <tbody class="products">
                                            <tr class="row1">
                                                <td class="li-product-thumbnail"><a href="#"><img src="images/product/large-size/${item.tag}.png" style="width:150px; height:150px;" alt="Li's Product Image"></a></td>
                                                <td class="li-product-name"><a href="#">${item.name}</a></td>
                                                <td class="li-product-price"><span class="amount">${item.price}</span></td>
                                                <td class="quantity">
                                                    <label>Quantity</label>
                                                    <div class="cart-plus-minus">
                                                        <input class="cart-plus-minus-box" value="${item.inCart}" type="text">
                                                    </div>
                                                </td>
                                                <td class="product-subtotal"><span class="amount">${item.inCart*item.price}đ</span></td>
                                            </tr>
                                        </tbody>`
        });
    }
}


displayCart();
onLoadTotal();
onLoadCartNumber();