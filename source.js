var ARRlinks =[
    'https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B9%D0%BD%D0%B0_%D0%B8_%D0%BC%D0%B8%D1%80',
    'https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80_%D0%B8_%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0',
    'https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D0%BB%D0%B0%D0%BD_%D0%B8_%D0%9B%D1%8E%D0%B4%D0%BC%D0%B8%D0%BB%D0%B0',
    'https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%BD%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D0%B5'

];

var NumOfArr = Math.floor(Math.random() * (ARRlinks.length + 1));
var link = ARRlinks[NumOfArr];

var goTo = function() {
    var meni_1 = link;
    location.href = meni_1;
}
