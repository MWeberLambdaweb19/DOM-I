const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update images 
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);
let mcimg = document.getElementById("middle-img");
mcimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update navbar
let link1 = document.querySelectorAll('header nav a')[0];
link1.textContent = (siteContent["nav"]["nav-item-1"]);
link1.style.color = "green";
let link2 = document.querySelectorAll('header nav a')[1];
link2.textContent = (siteContent["nav"]["nav-item-2"]);
link2.style.color = "green";
let link3 = document.querySelectorAll('header nav a')[2];
link3.textContent = (siteContent["nav"]["nav-item-3"]);
link3.style.color = "green";
let link4 = document.querySelectorAll('header nav a')[3];
link4.textContent = (siteContent["nav"]["nav-item-4"]);
link4.style.color = "green";
let link5 = document.querySelectorAll('header nav a')[4];
link5.textContent = (siteContent["nav"]["nav-item-5"]);
link5.style.color = "green";
let link6 = document.querySelectorAll('header nav a')[5];
link6.textContent = (siteContent["nav"]["nav-item-6"]);
link6.style.color = "green";

// Prepend and append
let testanchor = document.createElement('a');
testanchor.textContent = "References";
testanchor.style.color = "Green";
testanchor.style.cursor = "Pointer";
let navbar = document.querySelector('header nav');
navbar.appendChild(testanchor);
let trueanchor = document.createElement('a');
trueanchor.textContent = "Sales";
trueanchor.style.color = "Green";
trueanchor.style.cursor = "Pointer";
navbar.prepend(trueanchor);

// Update call to action
let ctabold = document.querySelector(".cta-text h1");
ctabold.textContent = (siteContent["cta"]["h1"]);
ctabold.style.color = "Orange";
let ctabutton = document.querySelector(".cta-text button");
ctabutton.textContent = (siteContent["cta"]["button"]);
ctabutton.style.color = "Green";
ctabutton.style.border = "1px solid blue";
let ctaborder = document.querySelector(".cta-text");
ctaborder.style.borderBottom = "10px dashed red";
ctaborder.style.borderTop = "10px dashed red";
// Update main content
// Added a stretch goal in the beginning here
let mainborderbox = document.querySelector(".main-content");
mainborderbox.style.borderTop = "5px dashed blue";
mainborderbox.style.borderBottom = "5px dashed blue";
let featureTitle = document.querySelectorAll(".text-content h4")[0];
featureTitle.textContent = (siteContent["main-content"]["features-h4"]);
let featureTalk = document.querySelectorAll(".text-content p")[0];
featureTalk.textContent = (siteContent["main-content"]["features-content"]);

let aboutTitle = document.querySelectorAll(".text-content h4")[1];
aboutTitle.textContent = (siteContent["main-content"]["about-h4"]);
let aboutTalk = document.querySelectorAll(".text-content p")[1];
aboutTalk.textContent = (siteContent["main-content"]["about-content"]);

let serviceTitle = document.querySelectorAll(".text-content h4")[2];
serviceTitle.textContent = (siteContent["main-content"]["services-h4"]);
let serviceTalk = document.querySelectorAll(".text-content p")[2];
serviceTalk.textContent = (siteContent["main-content"]["services-content"]);

let productTitle = document.querySelectorAll(".text-content h4")[3];
productTitle.textContent = (siteContent["main-content"]["product-h4"]);
let productTalk = document.querySelectorAll(".text-content p")[3];
productTalk.textContent = (siteContent["main-content"]["product-content"]);

let visionTitle = document.querySelectorAll(".text-content h4")[4];
visionTitle.textContent = (siteContent["main-content"]["vision-h4"]);
let visionTalk = document.querySelectorAll(".text-content p")[4];
visionTalk.textContent = (siteContent["main-content"]["vision-content"]);

// Updating Contact
let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = (siteContent["contact"]["contact-h4"]);

let contactinfo1 = document.querySelectorAll(".contact p")[0];
contactinfo1.textContent = (siteContent["contact"]["address"]);
contactinfo1.style.fontSize = "3rem";

let contactinfo2 = document.querySelectorAll(".contact p")[1];
contactinfo2.textContent = (siteContent["contact"]["phone"]);
contactinfo2.style.fontSize = "3rem";

let contactinfo3 = document.querySelectorAll(".contact p")[2];
contactinfo3.textContent = (siteContent["contact"]["email"]);
contactinfo3.style.fontSize = "3rem";

// Updating Footer
let footy = document.querySelector("footer p");
footy.textContent = (siteContent["footer"]["copyright"]);
footy.style.fontSize = "5rem";