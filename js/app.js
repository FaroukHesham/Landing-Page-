/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation bar global variable
const navigationBar = document.getElementById("navbar__list");

// sections golbal variables
const sections = Array.from(document.querySelectorAll("section"));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to create the section buttons in the navigation bar
function navigationBarSections(){

    //looping over sections to put them dynamically in the navigation bar
    for ( const section of sections){
        sectionId = section.getAttribute('id');
        sectionNumber = section.getAttribute('data-nav');

    sectionsList = document.createElement("li");
    
    //linking every section in the navigation bar to it's place in the page
   sectionsList.innerHTML = `<a class '=menu__link' href ='#${sectionId}'>${sectionNumber}</a>`;

    navigationBar.appendChild(sectionsList);
    sectionsList.addEventListener("click", (e) => {
        e.preventDefault();
          section.scrollIntoView({behavior: "smooth"});
      });


    }
};


// function to get the screen view 
function isSctionAtScreen (section){
    let sectionPlace = section.getBoundingClientRect();
    return (sectionPlace.top <=40 && sectionPlace.bottom >= 40);
}


//  function to add or remove active class
function changeActiveClass(){
    for (const section of sections){
        if(isSctionAtScreen(section)){
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        } else{
            section.classList.remove('your-active-class');
        }
    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navigationBarSections();




document.addEventListener('scroll', changeActiveClass);



/**
 * End Main Functions
*/

