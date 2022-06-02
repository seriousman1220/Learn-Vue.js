var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        product: "Socks",
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neut'],
        variants:[
            {
                variantId: 1,
                variantColor: "Red",
            },
            {
                variantId: 2,
                variantColor: "Blue",
            },
            {
                variantId: 3,
                variantColor: "Green",
            },
            {
                variantId: 4,
                variantColor: "Brown",
            },
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart += 1;
        }
    }
})