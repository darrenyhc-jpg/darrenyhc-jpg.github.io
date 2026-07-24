document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior:"smooth"
            });

    });
});


const images = document.querySelectorAll("img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightboxImage = document.createElement("img");
lightbox.appendChild(lightboxImage);

document.body.appendChild(lightbox);


images.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightbox.classList.add("active");

    });

});


lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});
