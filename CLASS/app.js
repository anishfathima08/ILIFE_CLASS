var all_products = [
    { 
        id: 1, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 1", 
        price: 100,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!'
    },
    { 
        id: 2, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 2", 
        price: 200,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!'
    },
    { 
        id: 3, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 3", 
        price: 300,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!'
    },
    { 
        id: 4, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 4", 
        price: 400,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!'
    },
    { 
        id: 5, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 5", 
        price: 500,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!'
    },
    { 
        id: 6, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 6", 
        price: 600,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!'
    },
    { 
        id: 7, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 7", 
        price: 700,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!' 
    },
    { 
        id: 8, 
        img : '../../CLASS/img1.jpg', 
        name: "Product 8", 
        price: 800,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum veritatis odit architecto temporibus itaque fugit, obcaecati accusamus et eveniet!' 
    }
];


const displayProduct = () => {
    var productList = ''
    all_products.map((value) => {
        productList += 
        `
            <div class="col-lg-3 col-md-6">
                <div class="card my-5">
                    <img src="${value.img}" alt="">
                    <div class="card-body">
                        <h3>${value.name}</h3>
                        <h4>${value.price}</h4>
                        <p>${value.desc}</p>
                        <button class="btn btn-primary"  onclick='addToCart(${value.id})'>Add to Cart</button>
                        <button class="btn btn-success">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        `
    })

    document.getElementById('cardRow').innerHTML = productList
}

displayProduct()

const searchFun = () => {
    var userSearch = document.getElementById('userSearch').value.toUpperCase();

    if(userSearch.length === 0){
        document.getElementById('searchRow').innerHTML = ''
    }
    else{
        var filterSearch = all_products.filter((value) => value.name.toUpperCase().includes(userSearch))

        var searchList = ''

        filterSearch.map((value) => {
            searchList += 
            `
                <div class="col-lg-6">
                    <div class="card my-5">
                        <img src="${value.img}" alt="">
                        <div class="card-body">
                            <h3>${value.name}</h3>
                            <h4>${value.price}</h4>
                            <p>${value.desc}</p>
                            <button class="btn btn-primary">Add to Cart</button>
                            <button class="btn btn-success">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            `
        })

        document.getElementById('searchRow').innerHTML = searchList || `<p class='text-center text-danger'>No Products Found</p>`
    }

}

var cart = []

const addToCart = (productID) => {

    // alert('Product Added To the Cart Successfully')

    var cartProduct = all_products.find((a) => a.id == productID)

    var existingProduct = cart.find((a) => a.id == productID)

    if(existingProduct){
        cartProduct.quantity++
    }
    else{
        cartProduct.quantity = 1;
        cart.push(cartProduct)
    }

    displayCart(cart)

}

const displayCart = (products) => {
    var cartList = ''
    products.map((value) => {
        cartList +=
        `
            <tr>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>${value.quantity}</td>
                <td>${value.price * value.quantity}</td>
                <td>
                    <button class='btn btn-danger' onclick='removeFromCart(${value.id})'>Remove</button>
                </td>
            </tr>
        `
    })
    document.getElementById('cartTable').innerHTML = cartList || `<p class='text-center text-danger'>Your Cart is Empty</p>`
}

const removeFromCart = (productID) => {
    cart = cart.filter((a) => a.id !== productID)
    console.log(cart)
}