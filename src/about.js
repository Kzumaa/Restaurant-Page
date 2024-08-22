export default ()=> {
    const aboutContent = document.createElement("div");
    aboutContent.classList.add("content-grid", "container");
    aboutContent.innerHTML = `
            <p class="headline">History</p>
            <p class="content">Founded in 2024 by Kazuma, our restaurant brings 
                the vibrant flavors of Vietnamese street food.
            </p>
            <p class="headline">Core values</p>
            <p class="content">
                 We specialize in authentic banh mi sandwiches, crafted with 
                 fresh, locally-sourced ingredients and traditional 
                 recipes passed down through generations.
            </p>
            <p class="headline">Culinary philosophy</p>
            <p class="content">
                 Our passionate 
                 team is dedicated to delivering a taste of Saigon in 
                 every bite, blending time-honored techniques with innovative 
                 twists. 
            </p>
            <p class="headline">Atmosphere</p>
            <p class="content">At Banhmi, we're more than just a 
                 sandwich shop – we're a celebration of Vietnamese culinary 
                 heritage and a welcoming community hub for food lovers of 
                 all backgrounds.
            </p>
    `;
    return aboutContent;
};