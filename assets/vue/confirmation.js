export default {

  created() {

    this.deleteBasket();

  },
  
  methods: {
    deleteBasket() {
      let url = new URL(origin + '/api/basket/delete');
      fetch(url, {
        method: "POST",
      });

    }
  }, 

    template: `
    <div class="container">
    <div class = "title text-center py-5">
                <h2 class = "position-relative d-inline-block">Bestätigung</h2>
        </div>
    <div class="h2">Vielen Dank für Ihre Bestellung!</div>
    <div class="mt-4">
      <a class="btn btn-primary" href = "/shopping">Produkte</a>
    </div>
    </div>
      `,
  };
  