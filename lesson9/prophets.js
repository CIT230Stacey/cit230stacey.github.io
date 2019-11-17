const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];


    for (let i = 0; i < prophets.length; i++ ) {  
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let image = document.createElement('img');

        
        h3.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birth.textContent = "Date of Birth: " + prophets[i].birthdate;
        place.textContent = "Place of Birth: " + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order);

        card.appendChild(h3);
        card.appendChild(birth); 
        card.appendChild(place);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
        
    }
  });




