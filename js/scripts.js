//Business logic for PlacesVisited
function PlacesVisited() {
    this.places = {};

}

//Business logic for Place
function Place(city, country) {
    this.city = city;
    this.country = country;
}

Place.prototype.location = function () {
    return this.city + ", " + this.country;

};