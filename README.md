### TESTS

#### Describe Place()
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
<!--
Place.prototype.location = function () {
    return this.city + ", " + this.country;
-->

#### Describe placesVisited()
Test 3: "It will add a new place."
Code: 
Expected output:
<!--
function PlacesVisited() {
    this.places = {};
}
PlacesVisited.prototype.addPlace = function(place){
    this.places[place.city] = place;
}
-->
Test 4: "It will assign a unique ID to each  new entry."
Code:
Expected output:
<!--
PlacesVisited.prototype.addPlace = function(place){
    place.id = this.assignId();
    this.places[place.city] = place;
}
PlacesVisited.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};
-->
Test 5: "It will retrieve the place."
Code:
Expected outcome: