describe('Тестирование testqastudio', function () {

    it('search something', function () {
       cy.visit(' https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.header-left-items > .site-branding').click();
       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.header-right-items > .header-cart').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Юрий');
       cy.get('#billing_last_name').type('Акинчин');
       cy.get('#billing_address_1').type('Санкт-Петербургская 9');
       cy.get('#billing_city').type('Санкт-Петербург');
       cy.get('#billing_state').type('Ленинградская область');
       cy.get('#billing_postcode').type('650056');
       cy.get('#billing_phone').type('79099099900');
       cy.get('#billing_email').type('wpk099@mail.ru');
       cy.get('#place_order').click();
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');

    })
})