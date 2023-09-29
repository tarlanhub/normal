class CartRecommendationsSidebar extends HTMLElement {

	constructor(){
		super();
		this.generateRecommendations();
	}

	generateRecommendations(){
		const cartItems = document.getElementById('AjaxCartForm').querySelectorAll('.cart-item');
		if ( cartItems.length > 0 ) {
			fetch(`${KROWN.settings.routes.product_recommendations_url}?section_id=cart-recommendations-sidebar&product_id=${cartItems[0].dataset.productId}&limit=6`)
				.then(response => response.text())
				.then(text => {
					const innerHTML = new DOMParser()
            .parseFromString(text, 'text/html')
            .querySelector('.cart-recommendations-sidebar');
          if ( innerHTML && innerHTML.querySelectorAll('.product-item').length > 0 ) {
          	document.getElementById('cart-recommendations-sidebar').innerHTML = innerHTML.innerHTML;
          }
				})
		}
	}
}
customElements.define('cart-recommendations-sidebar', CartRecommendationsSidebar);