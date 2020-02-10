if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('../sw.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}


$(document).ready(function () {  
    $("#next-quote").on("click", function (e) {
      e.preventDefault();
      
      var randomQuoteNumber = getRandomQuoteNumber();
      updateQuote(randomQuoteNumber);
    });
    
    var q = location.search.split("?q=")[1];
    
    if (q >= 0 && q < quotes.length) {
      updateQuote(q);
    } else {
      $("#next-quote").click();
    }
  });
  
  function updateQuote(quoteNumber) {
    var randomQuote = quotes[quoteNumber];
      
    $("#quote").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
    $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass();
    });
  
    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" https://igalafacts.igaladigital.org?q=" + quoteNumber);
  }
  
  function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
  }
  
  var quotes = [{"author": "IgalaDigital", "quote": "Did You Know That Ojaina is the place where the Attah's of Igala are burried?"},

  {"author": "IgalaDigital", "quote": "Did You Know That the first aircraft that visited the Igala Kingdom landed at Idah in 1955?"},

  {"author": "IgalaDigital", "quote": "Did You Know That Attah Ameh Oboni, had seen to the completion of an aerodrome in 1954 at Idah?"},
    
  {"author": "Ilemona", "quote": "Did you know that the Igala alphabet was adopted from the English alphabet. The latter has five (5) vowels: “a,” “e,” “i,” “o,” “u.”?"},

  {"author": "Achimugu Ilemona", "quote": "Did you know the Igala alphabet is made up of thirty-one (31) letters: some vowels, others consonants?"},

  {"author": "IgalaDigital", "quote": "Did You Know That Ojaina is a restricted place only allowed for members from the Attah Ruling House?"},

  {"author": "IgalaDigital", "quote": "Did you know that Ata Ameh Oboni speak fluently in Igala, Ebira & Hausa?"},

  {"author": "Onuche Joseph", "quote": "Did you know that the Ígálá language has seven (7) vowels: “a,” “e,” “ẹ,” “i,” “o,” “ọ,” “u” (encompassing both all the 5 English vowels and two indigenous ones, ‘ẹ’ and  ‘ọ’).?"},
  
  {"author": "Naomi", "quote": "Did You Know That Idah is also called Idah Alu Ogo Oja Abutu Eje?"},
  
  {"author": "Inikpi", "quote": "Did you know that Abutu- Eje was the first Igala Ruler?"},

  {"author": "IgalaDigital", "quote": "Did you know that you may likely come home to meet one of your family member dead if you kill an animal at Ojaina?"},

  {"author": "IgalaDigital", "quote": "Did you know that ata Ameh Oboni took his own life on the night of June 26, 1956?"},

  {"author": "IgalaDigital", "quote": "Did you know that the mighty Ata Ameh Oboni died at the age of 51?"},

  {"author": "IgalaDigital", "quote": "Did you know that attah Ameh Oboni schooled in Okene(Ebira Land) between 1934 and 1939? Learned in Hausa Literature"},

  {"author": "IgalaDigital", "quote": "Did you know that ata Ameh Oboni started off as a market stall tax collector for Idah and Ejule market?"},

  {"author": "IgalaDigital", "quote": "Did you know that Ata Obaje Ocheje moved Ameh Oboni from being a market stall tax collector to be come a cheif as onu ugwolawo due to his hard work?"},

  {"author": "IgalaDigital", "quote": "Did you know that Ameh Oboni was moved to ankpa from ugwolawo as the judge, commonly known as *Wakali, to be in charge of seven districts?"},

  {"author": "IgalaDigital", "quote": "Did you know that Patrick A. Okpanachi, Mallam Garba and Peter Achimugwu were the first in Igala Land that speaks and write in English Language?"},

  {"author": "IgalaDigital", "quote": "Did you know that Peter Achimugwu was the man that led the campaign to remove Ameh Oboni as the Attah?"}
]

