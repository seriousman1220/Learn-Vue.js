Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product">  
        <product-details></product-details>
        <p>Premium? {{premium}}</p>
        <p>Shipping? {{shipping}}</p>   
    </div>
    `,

  computed: {
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 30000;
      }
    },
  },
});

Vue.component("product-details", {
  template: `
    <div class="product-details">
            <div class="product-image">
                <img :src="image" alt="" width="100" height="150">
            </div>

            <div class="product-info">
                <h1>{{product}}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div v-for="variant in variants" :key="variant.variantId">
                    <p>{{variant.variantColor}}</p>
                </div>
                <div class="cart">
                    <button type="button" v-on:click="addToCart">Add to Cart</button>
                    <p>Cart({{cart}})</p>
                    
                </div>
            </div>
    </div>
    `,
  data() {
    return {
      message: "Hello Vue!",
      product: "Socks",
      image:
        "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
      inStock: true,
      details: ["80% cotton", "20% polyester", "Gender-neut"],
      variants: [
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
      cart: 0,
    };
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
  },
});
