// 40: Album
function make_album(title, artist, year) {
    if (year === void 0) { year = 1998; }
    return {
        title: title,
        artist: artist,
        year: year
    };
}
var album1 = make_album("baran", "Karan Khan", 2018);
var album2 = make_album("sanso ki mala py", "Nusrat");
var album3 = make_album("dhado tha piyon piyon", "manji Faqeer", 2008);
console.log(album1);
console.log(album2);
console.log(album3);
