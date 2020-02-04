

var project = {
  title: "The Gentlewoman Autum/Winter 2015",
  class: "imageClass",
  description: "Anyone passing through Dublin Airport this summer was greeted by a huge poster of Saoirse Ronan – fittingly for one of Ireland’s national treasures. That might seem a strange way to describe a 21-year-old. But Saoirse first lit up the screen eight years ago, as Briony Tallis in Atonement, and has continued to illuminate it ever since with parts ranging from a teen assassin in Hanna to an immortal vampire in Neil Jordan’s Byzantium.",
  image: "https://www.bruil.info/wp-content/uploads/2013/07/The-Gentlewoman-12-Saoirse-Ronan.jpg",
};


function myFunction() {
  var box1 = document.querySelector("#b1");
  var title = document.createElement("h2");
  var description = document.createElement("p");
  var image = document.createElement("img");

  title.innerHTML = project.title;
  image.src = project.image;
  description.innerHTML = project.description;


  title.className = "titleClass";
  image.className = "imageClass";
  description.className = "descriptionClass";

  box1.appendChild(image);
  box1.appendChild(title);
  box1.appendChild(description);
  
};



var project2 = {
  title2: "The Gentlewoman Spring/Summer 2015",
  class2: "imageClass2",
  description2: "Björk Guðmundsdóttir’s always been full of surprises — musically, visually, even romantically (she dated Tricky and Goldie). At 49, she’s still on the road to revelation. Her gorgeous new album, leaked in January, drips with pain and self-investigation following her recent heart-breaking uncoupling, while a major exhibition opening at New York’s Museum of Modern Art in March promises to blow our socks off with more-than-state-of-the-art sonic installations and galleries filled with glittering ideas.",
  image2: "bjork.jpg",
};


function myFunction2() {
  var box2 = document.querySelector("#b2");
  var title2 = document.createElement("h2");
  var description2 = document.createElement("p");
  var image2 = document.createElement("img");

  title2.innerHTML = project2.title2;
  image2.src = project2.image2;
  description2.innerHTML = project2.description2;


  title2.className = "titleClass2";
  image2.className = "imageClass2";
  description2.className = "descriptionClass2";

  box2.appendChild(image2);
  box2.appendChild(title2);
  box2.appendChild(description2);
};


var project3 = {
  title3: "The Gentlewoman Autum/Winter 2016",
  class3: "imageClass3",
  description3: "There is cause for celebration — a new Zadie Smith novel is in our midst. And this time, the fearless British writer has moved beyond the familiar setting of her other books, the decidedly ungentrified London postcode of NW6. Having left the area in 2010 and relocated with her family to New York, where the 40-year-old happily teaches the lucky students of NYU, her ear for dialogue and vivid storytelling are opening up to tales of her adopted city and of west Africa, where her book Swing Time is set. When the writing’s done, though, the former jazz singer likes nothing more than a good old singsong around the piano or a blast of uncensored hip-hop. Eclecticism, for Zadie, is an essential source of constant revelation.",
  image3: "https://thegentlewoman.co.uk/img/MTQwb1BFYnFsMGd6eUdLUU0rN0dLdz09/tgw-website-spreads-master-cover-2-1.jpg",
};


function myFunction3() {
  var box3 = document.querySelector("#b3");
  var title3 = document.createElement("h2");
  var description3 = document.createElement("p");
  var image3 = document.createElement("img");

  title3.innerHTML = project3.title3;
  image3.src = project3.image3;
  description3.innerHTML = project3.description3;


  title3.className = "titleClass3";
  image3.className = "imageClass3";
  description3.className = "descriptionClass3";

  box3.appendChild(image3);
  box3.appendChild(title3);
  box3.appendChild(description3);
};

var project4 = {
  title4: "The Gentlewoman Autum/Winter 2018",
  class4: "imageClass4",
  description4: "At 90, Agnès Varda suddenly finds herself exalted as a role model for women in film; a fashion icon; loved by the art world — never mind her 40 films as a pioneering director. In the past 18 months she has received an Oscar, been nominated for another, and created a new artwork for the Liverpool Biennial.Her films, often personal, always playful and with a keen affection for those she documents, have disrupted convention. More than anything, through her militant gaze she has shown us the world.",
  image4: "https://www.bruil.info/wp-content/uploads/2013/07/The-Gentlewoman-18-Agn%C3%A8s-Varda.jpg",
};



function myFunction4() {
  var box4 = document.querySelector("#b4");
  var title4 = document.createElement("h2");
  var description4 = document.createElement("p");
  var image4 = document.createElement("img");

  title4.innerHTML = project4.title4;
  image4.src = project4.image4;
  description4.innerHTML = project4.description4;


  title4.className = "titleClass4";
  image4.className = "imageClass4";
  description4.className = "descriptionClass4";

  box4.appendChild(image4);
  box4.appendChild(title4);
  box4.appendChild(description4);
};


var project5 = {
  title5: "The Gentlewoman Autum/Winter 2019",
  class5: "imageClass5",
  description5: "Thirty-four years after her most famous novel was published, Margaret Atwood, 79, has written its sequel, The Testaments. It is fresh on the shelves and has already been longlisted for the Booker Prize. In the interim, the events heralded by The Handmaid’s Tale seem distressingly to have been coming true.",
  image5: "https://www.bruil.info/wp-content/uploads/2019/09/The-Gentlewoman-20-Margaret-Atwood.png",
};



function myFunction5() {
  var box5 = document.querySelector("#b5");
  var title5 = document.createElement("h2");
  var description5 = document.createElement("p");
  var image5 = document.createElement("img");

  title5.innerHTML = project5.title5;
  image5.src = project5.image5;
  description5.innerHTML = project5.description5;


  title5.className = "titleClass5";
  image5.className = "imageClass5";
  description5.className = "descriptionClass5";

  box5.appendChild(image5);
  box5.appendChild(title5);
  box5.appendChild(description5);
};