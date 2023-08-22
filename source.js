var ARRlinks =[
    'https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B9%D0%BD%D0%B0_%D0%B8_%D0%BC%D0%B8%D1%80',
    'https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80_%D0%B8_%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0',
    'https://en.wikipedia.org/wiki/Rat',
    'https://en.wikipedia.org/wiki/Fox'

];

var NumOfArr = Math.floor(Math.random() * (ARRlinks.length + 1));
var link = ARRlinks[NumOfArr];

var goTo = function() {
    var meni_1 = link;
    location.href = meni_1;
}