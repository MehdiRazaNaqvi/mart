const ini = {
    products: [
        { id: 1, name: "Bata shoes", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "bohht achi shirt haiii" },
        { id: 2, name: "Hand bag", price: "1000", img: "https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P3466509_3.jpg?v=1603878013", des: "bohht achi shirt haiii" },
        { id: 3, name: "Shirt", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "bohht achi shirt haiii" },
        { id: 4, name: "Vivo", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "bohht achi shirt haiii" },
        { id: 5, name: "Wooden chair", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "bohht achi shirt haiii" },
        { id: 6, name: "School bag", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "bohht achi shirt haiii" },



    ],

    product: {}
}


export default (state = ini, action) => {
    switch (action.type) {

        case("pro"):
        console.log("chalrha")
        return {...state , product : state.products.find(product => product.id == action.id)}

        default:
            return state
    }
}