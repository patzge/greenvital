export default {
  data() {
    return {
      categories: [],
      om: "",
    };
  },
  created() {
    let url = new URL(origin + "/api/category");
    fetch(url)
      .then((res) => res.json())
      .then((data) => (this.categories = data));
  },
  methods: {
    order: function (event) {
      let url = new URL(origin + "/api/basket");
      let data = new FormData();
      data.append("id", event.target.id);
      fetch(url, {
        method: "POST",
        body: data,
      }).then((result) => {
        this.$router.push("/basket");
      });
    },
  },
  template: `
    <div class="container">
        <span class="h1">Katalog</span>
        <div class="my-5" v-for="category in this.categories">
        <span class="h3">{{ category.name }}</span>
        <hr>
            <div class="mt-2" v-for="product in category.products">
                <div class="h4">{{ product.name }}</div>
                <div class="d-flex justify-content-between">
                    <div class="h6">{{ product.description }} </div>
                    <div>
                        <span class="h6"> {{ product.price }} &euro;</span>
                        <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="order">Bestellen</span>
                    </div>
                </div>
            </div>
        </div>
        <router-link class="btn btn-primary" to="/basket">To Shopping Basked</router-link>
    </div>`,
};