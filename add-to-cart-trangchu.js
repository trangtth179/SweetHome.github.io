let trangchus=[
    {
        name:'Tranh OPIUM',
        tag:'tttm-1_p-1',
        price:280000,
        inCart:0    
    },
    {
        name:'Đồng hồ để bàn',
        tag:'2',
        price:690000,
        inCart:0    
    },
    {
        name:'Tranh GREENERY',
        tag:'3',
        price:380000,
        inCart:0    
    },
    {
        name:'BEST ACTRESS',
        tag:'4',
        price:460000,
        inCart:0    
    },
    {
        name:'Kệ FEGO',
        tag:'5',
        price:330000,
        inCart:0    
    },
    {
        name:'Bảng POD',
        tag:'6',
        price:890000,
        inCart:0    
    },
    {
        name:'Bảng PIN',
        tag:'12',
        price:550000,
        inCart:0    
    },
    {
        name:'Tapi',
        tag:'11',
        price:899000,
        inCart:0    
    },
    {
        name:'Tủ DALAT',
        tag:'10',
        price:1900000,
        inCart:0    
    },
    {
        name:'Đồng hồ MISO',
        tag:'9',
        price:449000,
        inCart:0    
    },
    {
        name:'Đèn bàn TATA',
        tag:'8',
        price:790000,
        inCart:0    
    },
    {
        name:'Khay đựng ghim kẹp',
        tag:'7',
        price:44000,
        inCart:0    
    },
    {
        name:'Đèn Globe',
        tag:'tttm-1_p-1',
        price:355000,
        inCart:0    
    },
    {
        name:'Set trang trí GOLDIE',
        tag:'tttm-2',
        price:204000,
        inCart:0    
    },
    {
        name:'Đèn trang trí LAMPY 2',
        tag:'tttm-3',
        price:135000,
        inCart:0    
    },
    {
        name:'Đèn trang trí LAMPY 1',
        tag:'tttm-4',
        price:175000,
        inCart:0    
    },
    {
        name:'Đèn trang trí LIBAU',
        tag:'tttm-5',
        price:155000,
        inCart:0    
    },
    {
        name:'Set Châu Bạc LILY',
        tag:'tttm-6',
        price:205000,
        inCart:0    
    },
    {
        name:'Tranh MOON',
        tag:'pa-1',
        price:199000,
        inCart:0    
    },
    {
        name:'Tranh YOU',
        tag:'pa-2',
        price:179000,
        inCart:0    
    },
    {
        name:'Tranh LIGHTHOUSE',
        tag:'pa-3_pt5',
        price:280000,
        inCart:0    
    },
    {
        name:'Tranh PEAKS',
        tag:'pa-4',
        price:380000,
        inCart:0    
    },
    {
        name:'Tranh bộ GRAPHICS',
        tag:'pa-5',
        price:480000,
        inCart:0    
    },
    {
        name:'Tranh FALL',
        tag:'pa-6',
        price:480000,
        inCart:0    
    },
    {
        name:'Kệ POPLAR',
        tag:'pk-1',
        price:269000,
        inCart:0    
    },
    {
        name:'Kệ POPULAR',
        tag:'pk-2',
        price:247000,
        inCart:0    
    },
    {
        name:'Kệ FEGO',
        tag:'pk-3',
        price:330000,
        inCart:0    
    },
    {
        name:'Giá kệ FEGO',
        tag:'pk-4',
        price:297000,
        inCart:0    
    },
    {
        name:'Bảng ghim PIN',
        tag:'pK-5',
        price:550000,
        inCart:0    
    },
    {
        name:'Bảng ghi chú PIN',
        tag:'pK-6',
        price:495000,
        inCart:0    
    },
    {
        name:'Kệ POPLAR',
        tag:'pk-1',
        price:269000,
        inCart:0    
    },
    {
        name:'Kệ POPULAR',
        tag:'pk-2',
        price:247000,
        inCart:0    
    },
    {
        name:'Kệ FEGO',
        tag:'pk-3',
        price:330000,
        inCart:0    
    },
    {
        name:'Giá kệ FEGO',
        tag:'pk-4',
        price:297000,
        inCart:0    
    }
]

let carts=document.getElementsByClassName('add-cart')

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(trangchus[i]);
        totalCost(trangchus[i]);
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