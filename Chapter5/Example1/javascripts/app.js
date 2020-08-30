var main = function () {
    "use strict";
    console.log("Hello, World!");
    $.getJSON("cards/aceOfSpades.json", function (card) {
 // создаем элемент для хранения карты
        var $cardParagraph = $("<p>");
 // создаем текст для карты
        $cardParagraph.text(card.rank + " of " + card.suit);
 // присоединяем абзац с картой к элементу main
        $("main").append($cardParagraph);
    });
    $.getJSON("cards/hand.json", function (hand) {
        var $list = $("<ul>");
 // hand — массив, поэтому мы можем применить к нему итерационный процесс
 // с помощью цикла forEach
        hand.forEach(function (card) {
 // создаем элемент списка для хранения карты
 // и присоединяем его к списку
        var $card = $("<li>");
         $card.text(card.rank + " of " + card.suit);
         $list.append($card);
     });
 // присоединяем список к элементу main
        $("main").append($list);
    });
};
$(document).ready(main);


     