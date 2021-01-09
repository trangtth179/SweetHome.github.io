let vpps=[
    {
        name:'Ống Đựng Bút',
        tag:'pv-1',
        price:49000,
        inCart:0    
    },
    {
        name:'Khay Đựng Name Card',
        tag:'pv-2',
        price:49000,
        inCart:0    
    },
    {
        name:'Khay Đựng Ghim Card',
        tag:'pv-3',
        price:49000,
        inCart:0    
    },
    {
        name:'Khay Đựng Ghi Chú',
        tag:'pv-4',
        price:49000,
        inCart:0    
    },
    {
        name:'Lịch Để Bàn 2021',
        tag:'pv-5',
        price:79000,
        inCart:0    
    },
    {
        name:'Lịch Để Bàn 2020',
        tag:'pv-6',
        price:79000,
        inCart:0    
    },
    {
        name:'Thùng Đựng Rác',
        tag:'pv-7',
        price:99000,
        inCart:0    
    },
    {
        name:'Lịch Treo Tường 2021',
        tag:'pv-8',
        price:1790000,
        inCart:0    
    },
    {
        name:'Bộ Combo Văn Phòng',
        tag:'pv-9',
        price:260000,
        inCart:0    
    },
    {
        name:'Ống Đựng Bút',
        tag:'pv-1',
        price:49000,
        inCart:0    
    },
    {
        name:'Khay Đựng Name Card',
        tag:'pv-2',
        price:49000,
        inCart:0    
    },
    {
        name:'Khay Đựng Ghim Card',
        tag:'pv-3',
        price:49000,
        inCart:0    
    },
    {
        name:'Khay Đựng Ghi Chú',
        tag:'pv-4',
        price:49000,
        inCart:0    
    },
    {
        name:'Lịch Để Bàn 2021',
        tag:'pv-5',
        price:79000,
        inCart:0    
    },
    {
        name:'Lịch Để Bàn 2020',
        tag:'pv-6',
        price:79000,
        inCart:0    
    },
    {
        name:'Thùng Đựng Rác',
        tag:'pv-7',
        price:99000,
        inCart:0    
    },
    {
        name:'Lịch Treo Tường 2021',
        tag:'pv-8',
        price:1790000,
        inCart:0    
    },
    {
        name:'Bộ Combo Văn Phòng',
        tag:'pv-9',
        price:260000,
        inCart:0    
    }
]

let carts=document.getElementsByClassName('add-cart')

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(vpps[i]);
        totalCost(vpps[i]);
    })
}

// function addToCartClicked(event){
//     var button=event.target
//     var shopItem=button.parentElement.parentElement.parentElement.parentElement
//     var title=shopItem.getElementsByClassName('product_name')[0].innerText
//     var price=shopItem.getElementsByClassName('new-price')[0].innerText
//     var imgSource=shopItem.getElementsByClassName('item-img')[0].src
//     console.log(title, price,imgSource)
// }

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