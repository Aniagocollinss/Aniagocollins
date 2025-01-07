//declare variables
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');

//give functions to the variables
//open function
open.addEventListener('click', function () {
    sidebar.style.left = '0px';
    sidebar.style.transitionDelay = '0.3s';
});
//close function
close.addEventListener('click', function () {
    sidebar.style.left = '-250px';
    sidebar.style.transitionDelay = '0.3s';
});

// Reviews data
const reviews = [
    {
        id: 1,
        name: "Chiamaka Aniago",
        job: "Freelancer",
        img: "chi.jpg",
        text: "Before using this tool, managing our team's workload was a constant struggle. Now, everything is streamlined, and we've experienced a 34.5% improvement in efficiency.",
    },
    {
        id: 2,
        name: "Henrietta C. Aniago",
        job: "Content Creator",
        img: "naza.jpg",
        text: "Before this product, managing tasks across my team felt chaotic. Now we are always in sync, and we have seen a 29.81% increase in productivity",
    },
    {
        id: 3,
        name: "Somto Aniago",
        job: "Photographer",
        img: "som.jpg",
        text: "Initially, task management was a nightmare for our team. Since adopting this system, we've increased collaboration, resulting in a 27.6% increase in our team's output.",
    },
];

// Declare variables
const hen = document.querySelector(".hen"); // Name
const job = document.querySelector(".job"); // Job title
const testi = document.querySelector(".testi"); // Testimonial text
const nazapix = document.querySelector(".nazapix"); // Image element (correcting the reference)
const prev = document.querySelector(".prev"); // Previous button
const next = document.querySelector(".next"); // Next button

// Track current review
let currentItem = 1;

// On DOM content loaded, show the first review
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// Show person based on index
function showPerson(person) {
    const item = reviews[person];
    nazapix.src = item.img; // Set image source
    hen.textContent = item.name; // Set name
    job.textContent = item.job; // Set job title
    testi.textContent = item.text; // Set testimonial text
}

// Show next person
next.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0; // Loop back to the first review
    }
    showPerson(currentItem);
});

// Show previous person
prev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1; // Loop back to the last review
    }
    showPerson(currentItem);
});








