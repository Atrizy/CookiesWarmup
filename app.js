// Using your knowledge of JS, try to create the following 
// Create a variable called "menu_item" as an object
//   Give this object the following key-value pairs:
//     name: string
//     description: string
//     image_src: string (external image please)
//     price: number

// Write a function that will take in an object of the form above and inject it onto the page
//   If you want to style the item, go add a little css in a style.css file
//   I would recommend have an empty container in the HTML already there to be appended to

// Call the function and pass your menu_item as the argument

// Create a variable called "menu_items" as an array of objects.
//   Each object should be the same format as menu_item.
//   Write a loop that goes through each item in menu_items and calls your function created earlier to inject the item on the page

//   Add the script tag in your HTML that links to the cookies-js library
//   Add in logic to your function that allows each menu_item to be clicked
//     When a menu item is clicked, it should create a cookie called "selected_item" 
//       and set it to a value of the "name" of the menu item

//   Create a second page that will show the name of the selected item to the user
//     If the user has not selected an item, show them an error message

//   See if you can figure out how to store more than just the name of the item (description, price, image_src)
//     so you can show the user the same card as they saw on the menu page and not just the name.

//   Create a git commit at this point with a message of your choosing
//   Create an empty GitHub repository called CookieWarmup
//   Connect your local repository to the new remote repository
//   Verify your code is "pushed" up to the remote repository
function addCards() {
var cards_menu = [
    {
        name: "Zekrom",
        description: "Legendary 5st generation card",
        img_src: "https://nerdable.com/wp-content/uploads/2021/04/pokemon-card.jpg",
        price: "$5,000"
    },
    {
        name: "Raichu",
        description: "Legendary 1st generation card",
        img_src: "https://assets.dicebreaker.com/prerelease-raichu-pokemon-card.jpg/BROK/resize/660%3E/format/jpg/quality/80/prerelease-raichu-pokemon-card.jpg",
        price: "$10,500"
    },
    {
        name: "Lugia",
        description: "Legendary 1st edition card",
        img_src: "https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/660%3E/format/jpg/quality/80/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg",
        price: "$144,300"
    }
  ]

  while(i < cards_menu.length) {
        var card_container = document.getElementById("card_menu");{
        var new_card = document.createElement("artilce");
        new_card.classList.add("card_container");
        var new_image = document.createElement("img");
        new_image.src = cards_menu[i].img_src;
        new_card.appendChild(new_img);
        var new_title = document.createElement("h1");
        new_title.innerText = cards_menu[i].title;
        new_card.appendChild(new_card);
        card_container.appendChild(new_card);
    }
   i++;
  }
}

var cards = {
        name: "Charizard",
        description: "Legendary 1st generation card",
        img_src: "https://m.media-amazon.com/images/I/71nbfl-JklS._AC_SL1024_.jpg",
        price: "$220,574"
}


function button_pushed() {
    Cookies.set("chosen", "Charizard")
    window.location.href='/section.html'
}

function button_pushed2() {
    Cookies.set("chosen", "Zekrom")
    window.location.href='/section.html'
}

function button_pushed3() {
    Cookies.set("chosen", "Raichu")
    window.location.href='/section.html'
}

function button_pushed4() {
    Cookies.set("chosen", "Lugia")
    window.location.href='/section.html'
}