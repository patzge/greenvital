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
    order: function (id) {
      let url = new URL(origin + "/api/basket");
      let data = new FormData();
      data.append("id", id);
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
      <div class="my-5" v-for="category in this.categories">
        <div class = "title text-center py-5">
                <h2 class = "position-relative d-inline-block">{{category.name}}</h2>
        </div>
        <hr>
        <section id = "special" class = "py-5">
          <div class = "special-list row g-0">
              <div class = "col-md-6 col-lg-4 col-xl-3 p-2" v-for="product in category.products">
                <catalogentry :product='product' @order="order"></catalogentry>
              </div>
          </div>
        </section>
      </div>
      <router-link class="btn btn-primary" to="/basket">To Shopping Basked</router-link>
    </div>`,
  };
