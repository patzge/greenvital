export default {
    props: ['product'],
    data() {
      return {
        dialog: false,
      };
    },
    methods: {
        toggleDialog() {
            this.dialog = !this.dialog;
        }
    },
    template: `

      
          <div class = "special-img position-relative overflow-hidden">
              <img src = "images/VeganDesigner.png" class = "w-100">
          </div>
          <div class = "text-center">
              <p class = "text-capitalize mt-3 mb-1">{{ product.name }}</p>
              <p class = "text-capitalize mt-3 mb-1">{{ product.description }}</p>
              <span class = "fw-bold d-block">{{ product.price }} &euro;</span>
              <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="$emit('order', product.id)">Bestellen</span>
          </div>`

    /* <img :src="'https://wetebucket.s3.us-west-2.amazonaws.com/'+product.image" class="w-100"> */
  };
  