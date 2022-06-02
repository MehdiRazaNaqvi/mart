const ini = {

    products: [

        // { name: "Bata shoes",price: "1200", img: "https://4-be-cdn.bata.eu/gallery/1/5/e/b/4/a.jpg", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad maiores eveniet alias porro saepe eum accusamus totam soluta, aliquam fuga blanditiis delectus? Porro accusantium assumenda illum. Ullam, maiores iure." },
        // { name: "Hard ball", price: "3900", img: "https://cdn.shopify.com/s/files/1/0477/9429/0854/products/CTBLCA03-2white-1000x1000_300x_crop_center.jpg?v=1601639847", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam molestias quaerat, nihil saepe dolorum illum consequatur provident, necessitatibus sed exercitationem. Distinctio, nemo dolorum inventore tempore labore perferendis non qui." },
        // { name: "Shirt sleveless", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam molestias quaerat, nihil saepe dolorum illum consequatur provident, necessitatibus sed exercitationem. Distinctio, nemo dolorum inventore tempore labore perferendis non qui." },
        // { name: "Glasses", price: "700", img: "https://ae01.alicdn.com/kf/Ha2cf2c8fb5624218a5820f625c64d26f8/Vintage-Round-Glasses-Clear-Lens-Fashion-Gold-Round-Metal-Frame-Glasses-Optical-Men-Women-Eyeglass-Frame.jpg_Q90.jpg_.webp", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad maiores eveniet alias porro saepe eum accusamus totam soluta, aliquam fuga blanditiis delectus? Porro accusantium assumenda illum. Ullam, maiores iure." },
        // { name: "Sofa Chair", price: "30000", img: "https://static-01.daraz.pk/p/83ee65e6010c990044b39773352b61f2.jpg", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas recusandae vitae modi rerum ex velit quidem soluta nam architecto? Praesentium quisquam, eius enim doloremque saepe aspernatur illum tempore est." },
        // { name: "School bag", price: "3000", img: "https://ae01.alicdn.com/kf/Ha6d31d2aa9f34ccfb7d61a74cdf31866w/White-School-Backpack-Women-Canvas-Black-Backpacks-for-Women-2020-New-School-Bag-for-Teens-Female.jpg", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad maiores eveniet alias porro saepe eum accusamus totam soluta, aliquam fuga blanditiis delectus? Porro accusantium assumenda illum. Ullam, maiores iure.   " },



    ],

    darktheme: false,
    user: { name: "" },
    cart: []

}


export default (state = ini, action) => {

    switch (action.type) {
        case ("add"):
            return { ...state, products: [...state.products, action.payload] }


        case ("theme"):
            return { ...state, darktheme: !state.darktheme }


        case ("firebase"):
            return { ...state, products: state.products=action.payload }



        case ("sign"):
            return { ...state, user: action.payload }


        case ("add_to_cart"):
            return { ...state, cart: [...state.cart, action.payload] }


        case ("filter"):


            let arr = [];
            state.products.map((v) => v.name.toLocaleLowerCase() == action.payload.toLocaleLowerCase() ? arr.push(v) : null);
            
           
            
            
            return { ...state, products: arr }


        default:
            return state;
    }

}
