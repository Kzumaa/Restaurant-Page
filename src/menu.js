export default ()=> {
    const menuContent = document.createElement("div");
    menuContent.classList.add('menu', "container");
    menuContent.innerHTML = `
            <div class="foods">
                <p class="headline">Foods</p>
                <p class="name content">Traditional banhmi</p>
                <p class="price content">20.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Eggs banhmi</p>
                <p class="price content">10.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Grilled meat banhmi</p>
                <p class="price content">15.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Pate banhmi</p>
                <p class="price content">10.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Eggs banhmi</p>
                <p class="price content">10.000</p>
                <p class="currency content">đ</p>
            </div>
            <div class="drinks">
                <p class="headline">Drinks</p>
                <p class="name content">Ice tea</p>
                <p class="price content">5.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Melon juice</p>
                <p class="price content">15.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Lemonade</p>
                <p class="price content">10.000</p>
                <p class="currency content">đ</p>
                <p class="name content">Peach juice</p>
                <p class="price content">15.000</p>
                <p class="currency content">đ</p>
            </div>
    `;
    return menuContent;
};