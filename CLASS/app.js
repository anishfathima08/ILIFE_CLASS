var all_products = [
    { 
        id: 1, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 1", 
        price: 100,
    },
    { 
        id: 2, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 2", 
        price: 200 
    },
    { 
        id: 3, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 3", 
        price: 300 
    },
    { 
        id: 4, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 4", 
        price: 400 
    },
    { 
        id: 5, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 5", 
        price: 500 
    },
    { 
        id: 6, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 6", 
        price: 600 
    },
    { 
        id: 7, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 7", 
        price: 700 
    },
    { 
        id: 8, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 8", 
        price: 800 
    }
];

const searchProducts = () => {
    var searchInput = document.getElementById('searchInput').value.toUpperCase();

    if(searchInput.length === 0){
        document.getElementById('searchProducts').innerHTML = ''
    }
    else{
        var filterData = all_products.filter((data) => data.name.toUpperCase().includes(searchInput));
        var searchList = '';
        filterData.map((product) => {
        searchList += 
        `
            <div class='col-lg-3 col-md-6'>
                <div class='card mb-5'>
                    <img src='${product.img}' />
                    <div class='card-body'>
                        <h3>${product.name}</h3>
                        <h3>${product.price}</h3>
                    </div>
                </div>
            </div>
        `
        })

        document.getElementById('searchProducts').innerHTML = searchList || `<p class='text-center text-danger'> No Products Found <p>`
    }
}

const display_data = () => {
    var product_list = '';
    all_products.map((value) => {
    product_list += 
    `
        <div class="col-lg-3 col-md-6">
            <div class="card mb-5">
                <img src=${value.img} alt='' />
                <div class="card-body">
                    <h3>${value.name}</h3>
                    <h3>${value.price}</h3>
                    <button class='btn btn-primary' onclick='addToCart(${value.id})'>Add to Cart</button>
                    <br>
                    <button class='mt-3 btn btn-primary'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    `
    })
    document.getElementById('cardRow').innerHTML = product_list;
}
display_data();

var cart = [];

// cart = 1, 2, 3
// 3

// a.id -> 1(1)
// productID -> 1

// 1 === 1

// const addToCart = (productID) => {
//     var cartProducts = all_products.find((a) => a.id === productID )

//     var existing_product = cart.find((a) => a.id === productID)

//     if(existing_product){
//         cartProducts.quantity++
//     }
//     else{
//         cartProducts.quantity = 1;
//         cart.push(cartProducts)
//     }

//     displayCart(cart)
// }

// const displayCart = (cartData) => {
//     var cartList = ''
//     cartData.map((value) => {
//         cartList += 
//         `
//             <tr>
//                 <td>${value.name}</td>
//                 <td>${value.price}</td>
//                 <td>${value.quantity}</td>
//                 <td>${value.price * value.quantity}</td>
//                 <td>
//                     <button class="btn btn-danger">Remove</button>
//                 </td>
//             </tr>
//         `
//     })

//     document.getElementById('cartTable').innerHTML = cartList
// }

var cart = []

const addToCart = (productID) => {
    var cartProducts = all_products.find((value) => value.id === productID )
    var existing_product = cart.find((value) => value.id === productID)
    if(existing_product){
        cartProducts.quantity++
    }
    else{
        cartProducts.quantity = 1;
        cart.push(cartProducts)
    }
    display_cart(cart)
}

const display_cart = (cartData) => {
    var cartList = ''
    cartData.map((value) => {
        cartList += 
        `
            <tr>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>${value.quantity}</td>
                <td>${value.price * value.quantity}</td>
                <td>
                    <button class='btn btn-danger'>Remove</button>
                </td>
            </tr>
        `
    })

    document.getElementById('cartTable').innerHTML = cartList

}