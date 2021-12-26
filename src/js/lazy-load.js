const images = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshhold: 0,
    rootMargin: "300px"
        // threshhold: 1
        // rootMargin: "0px 0px 300px 0px"
};

function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    //if there is no image src it will quit the function.
    if (!src) {
        return;
    }
    //if the image have data-src it will store it .
    img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);


//to apply for each items an observer.
images.forEach(image => {
    imgObserver.observe(image);
})