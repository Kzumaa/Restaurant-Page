export default ()=> {
    const homeContent = document.createElement("div");
    homeContent.classList.add('home', "content-grid", "container");
    homeContent.innerHTML = `
            <p class="headline">Welcome</p>
            <p class="content">Discover the mouthwatering flavors of Vietnam with our signature banh mi sandwiches. </p>
            <p class="headline">Culinary </p>
            <p class="content">
                Our crispy baguettes are filled with savory meats, crisp pickled vegetables, and fragrant herbs, 
                creating the perfect balance of textures and tastes in every bite. 
            </p>
            <p class="headline">Ingredients</p>
            <p class="content">
                From traditional pork and pâté to 
                modern vegetarian options, we offer a variety of fillings to satisfy every palate. Each banh mi is 
                made fresh to order, showcasing the vibrant culinary heritage of Vietnam right here in Hanoi. 
            </p>
    `;
    return homeContent;
};