const product = [
    {
        id: 0,
        image: 'Images/1.jpg',
        title: 'Camera',
        price: 120,
    },
    {
        id: 1,
        image: 'Images/2.jpg',
        title: 'Sumsung s23 Ultra',
        price: 150,
    },
    {
        id: 2,
        image: 'Images/3.jpg',
        title: 'Router',
        price: 50,
    },
    {
        id: 3,
        image: 'Images/4.jpg',
        title: 'Xiomi 12 pro',
        price: 95,
    }
];

var cart = [];



function displayProducts() {
    document.getElementById('root').innerHTML = product.map(item => {
        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${item.image}>
                </div>
                <div class='bottom'>
                    <p>${item.title}</p>
                    <h2>$ ${item.price}.00</h2>
                    <button onclick='addProductToCart(${item.id})'>Add to cart</button>
                </div>
            </div>`;
    }).join('');

        displayCartFromLocalStorage();
    
}



    


    

function addProductToCart(productId) {
    const productToAdd = product.find(item => item.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        cartdisplay();
        setProductInLocalStorage(cart);
    }
}


function delProductFromCart(index) {
    cart.splice(index, 1);
    cartdisplay();
    setProductInLocalStorage(cart);
}

    function cartdisplay(a) {
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
       
        if (cart.length==0) {
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+".00";

        } else {
            document.getElementById('cartItem').innerHTML = cart.map((items)=>
            {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delProductFromCart("+ (j++) +")'></i></div>"
            );
            }).join('');
        }
    }



    function setProductInLocalStorage(items) {
        localStorage.setItem('cart', JSON.stringify(items));
    }


    function displayCartFromLocalStorage() {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            cart = storedCart;
            cartdisplay();
        }
    }
    displayProducts();


   