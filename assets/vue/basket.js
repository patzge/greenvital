export default {
  data() {
    return {
      basket: [],
    };
  },
  created() {
    let url = new URL(origin + '/api/basket');
    fetch(url)
    .then(res => res.json())
    .then(data => this.basket = data.basket)
  },
  methods: {

  },  
  template: `
  <div class = "title text-center py-5">
  <h2 class = "position-relative d-inline-block">Einkaufskorb</h2>
  </div>
    <div class="mx-4">
    <ul class="list-group mb-4">                
      <li class="list-group-item" v-for="item in basket">{{ item.name }}</li>
    </ul>
    <router-link class="btn btn-secondary mr-5" to="/">Weiter einkaufen</router-link>
    <router-link class="btn btn-primary" to="/address">Bestellung abschliessen</router-link>
    </div>
    `,
};
