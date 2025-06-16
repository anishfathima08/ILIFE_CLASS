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
    all_products.map((product) => {
    product_list += 
    `
        <div class="col-lg-3 col-md-6">
            <div class="card mb-5">
                <img src=${product.img} alt='' />
                <div class="card-body">
                    <h3>${product.name}</h3>
                    <h3>${product.price}</h3>
                    <button class='btn btn-primary' onclick=addToCart(${product.id})>Add to Cart</button>
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
        filterSearch.map((product) => {
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


const addToCart = (productID) => {
    var cartProducts = all_products.find((a) => a.id === productID )
    
    
    
}