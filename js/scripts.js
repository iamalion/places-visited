//Business logic for PlacesVisited
function PlacesVisited() {
    this.places = {};
    this.currentId = 0;
}
PlacesVisited.prototype.addPlace = function(place){
    place.id = this.assignId();
    this.places[place.city] = place;
}
PlacesVisited.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

//Business logic for Place
function Place(city, country, year) {
    this.city = city;
    this.country = country;
    this.year = year
}

Place.prototype.location = function () {
    return this.city + ", " + this.country;

};