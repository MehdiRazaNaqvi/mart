const ini = {

    products: [
        { id: 1, name: "Bata shoes", price: "12,000", img: "https://4-be-cdn.bata.eu/gallery/1/5/e/b/4/a.jpg", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad maiores eveniet alias porro saepe eum accusamus totam soluta, aliquam fuga blanditiis delectus? Porro accusantium assumenda illum. Ullam, maiores iure." },
        { id: 2, name: "Hand bag", price: "19,000", img: "https://www.pungles.com/images/com_hikashop/upload/quilted-shoulder-crossbody-gold-chain-faux-leather-white-bag-3.jpg", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam molestias quaerat, nihil saepe dolorum illum consequatur provident, necessitatibus sed exercitationem. Distinctio, nemo dolorum inventore tempore labore perferendis non qui." },
        { id: 3, name: "Shirt sleveless", price: "1000", img: "https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam molestias quaerat, nihil saepe dolorum illum consequatur provident, necessitatibus sed exercitationem. Distinctio, nemo dolorum inventore tempore labore perferendis non qui." },
        { id: 4, name: "Glasses", price: "7,000", img: "https://ae01.alicdn.com/kf/Ha2cf2c8fb5624218a5820f625c64d26f8/Vintage-Round-Glasses-Clear-Lens-Fashion-Gold-Round-Metal-Frame-Glasses-Optical-Men-Women-Eyeglass-Frame.jpg_Q90.jpg_.webp", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad maiores eveniet alias porro saepe eum accusamus totam soluta, aliquam fuga blanditiis delectus? Porro accusantium assumenda illum. Ullam, maiores iure." },
        { id: 5, name: "Sofa Chair", price: "30,000", img: "https://static-01.daraz.pk/p/83ee65e6010c990044b39773352b61f2.jpg", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas recusandae vitae modi rerum ex velit quidem soluta nam architecto? Praesentium quisquam, eius enim doloremque saepe aspernatur illum tempore est."},
        { id: 6, name: "School bag", price: "7000", img: "https://ae01.alicdn.com/kf/Ha6d31d2aa9f34ccfb7d61a74cdf31866w/White-School-Backpack-Women-Canvas-Black-Backpacks-for-Women-2020-New-School-Bag-for-Teens-Female.jpg", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad maiores eveniet alias porro saepe eum accusamus totam soluta, aliquam fuga blanditiis delectus? Porro accusantium assumenda illum. Ullam, maiores iure.   " },



    ],

    darktheme : false
}


export default (state = ini , action) => {

    switch(action.type){
                case("add"):
                return {...state , products : [...state.products , action.payload ]} 

                case("theme"):
                return {...state , darktheme : !state.darktheme}
                
                default:
                    return state;
    }
 
    }
