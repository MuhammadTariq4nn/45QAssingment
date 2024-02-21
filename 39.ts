function city_country(city:string,country:string):string{
    return `"${city}, ${country}"`
}
let country1=city_country("Lahore","pakistan");
let country2=city_country("Tokyo","japan");
let country3=city_country("Istanbul","Turkey");
console.log(country1);
console.log(country2);
console.log(country3)