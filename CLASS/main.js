var all_products = [
    { 
        id: 1, 
        img : 'img1.jpg', 
        name: "Product 1", 
        price: 100,
    },
    { 
        id: 2, 
        img : 'img1.jpg', 
        name: "Product 2", 
        price: 200 
    },
    { 
        id: 3, 
        img : 'img1.jpg', 
        name: "Product 3", 
        price: 300 
    },
    { 
        id: 4, 
        img : 'img1.jpg', 
        name: "Product 4", 
        price: 400 
    },
    { 
        id: 5, 
        img : 'img1.jpg', 
        name: "Product 5", 
        price: 500 
    },
    { 
        id: 6, 
        img : 'img1.jpg', 
        name: "Product 6", 
        price: 600 
    },
    { 
        id: 7, 
        img : 'img1.jpg', 
        name: "Product 7", 
        price: 700 
    },
    { 
        id: 8, 
        img : 'img1.jpg', 
        name: "Product 8", 
        price: 800 
    }
];

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

const searchProducts = () => {
    var userSearch = document.getElementById('searchInput').value.toUpperCase()
    
    if(userSearch.length === 0){
        document.getElementById('searchProducts').innerHTML = ''
    }
    else{
        var filterSearch = all_products.filter((value) => value.name.toUpperCase().includes(userSearch))

        var searchList = ''

        filterSearch.map((value) => {
            searchList += 
                `
                    <div class='col-lg-4'>
                        <div class='card'>
                            <img src='${value.img}' />
                            <div class='card-body'>
                                <h3>${value.name}</h3>
                                <p>${value.price}</p>
                            </div>
                        </div>
                    </div>
                `
        })

        document.getElementById('searchProducts').innerHTML = searchList || `<p class='text-center text-danger'>No Products Found</p>`
    }
}

var cart = []

const addToCart = (productID) => {

    alert('Product Added To Your Cart')

    var cartProduct = all_products.find((value) => value.id  === productID)

    var existingProduct = cart.find((value) => value.id === productID)

    if(existingProduct){
        cartProduct.quantity++
    } 
    else{
        cartProduct.quantity = 1
        cart.push(cartProduct)
    }
    displayCart(cart)
}

const displayCart = (cartProducts) => {
    var cartList = ''
    cartProducts.map((value) => {
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

    document.getElementById('cartRow').innerHTML = cartList
} 