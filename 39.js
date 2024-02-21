function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var country1 = city_country("Lahore", "pakistan");
var country2 = city_country("Tokyo", "japan");
var country3 = city_country("Istanbul", "Turkey");
console.log(country1);
console.log(country2);
console.log(country3);
