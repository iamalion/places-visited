### TESTS

Describe Place()
Test 1: "It will create a new Place object with a place that was visited"
Code: new Place("Paris","France");
Expected output: Place {city: 'Paris', country: 'France'}
<!--
function Place(city, country) {
    this.city = city;
    this.country = country;
-->
Test 2: "It will return city + country to create a new location."
Code: place1.location();
Expected output: "Paris, France"

Test 3: "It will...
Code:
Expected output: