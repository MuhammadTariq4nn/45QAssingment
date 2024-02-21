// 40: Album

function make_album(title:string,artist:string,year:number=1998):{title:string,artist:string,year:number}{
    return{
       title:title,
       artist:artist,
       year:year
    }
}
let album1=make_album("baran","Karan Khan",2018);
let album2=make_album("sanso ki mala py","Nusrat");
let album3=make_album("dhado tha piyon piyon","manji Faqeer",2008);
console.log(album1);
console.log(album2);
console.log(album3);