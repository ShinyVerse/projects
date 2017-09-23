var people = [
              'Bobby',
              'Gina',
              'Dave',
              'Sue',
              'Eric'
            ];

var dog =  {
    type : ['Mutt', 'Poodle', 'Corgi', 'Dalmation', 'Border Collie', 'German Sheperd'],
    color: ['Brown', 'White', 'Multi-colored', 'Ginger', 'Yellow'],
    eats: ['Lemons', 'Bubblegum', 'Noodles', 'All that lives', 'Children', 'Cats'],
};

var childName = document.getElementById('childName');
var thisChild = childName.textContent = people[Math.floor(Math.random()* people.length)];
var dogBreed = dog.type[Math.floor(Math.random()* dog.type.length)];
var dogColor = dog.color[Math.floor(Math.random()* dog.color.length)];
var favoriteFood = dog.eats[Math.floor(Math.random()* dog.eats.length)]

var aboutDog = document.getElementById('aboutDog');
aboutDog.textContent = thisChild + "'s dog is a " + dogBreed.toLowerCase() +
                      ", it's fur is " + dogColor.toLowerCase() + " and it's favourite food is "
                      + favoriteFood.toLowerCase() + ".";
