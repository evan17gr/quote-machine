var backgrounds = [{
  image: "http://www.hdbloggers.net/wp-content/uploads/2016/01/HD-Desktop-Background.jpg"
}, {
  image: "http://awesomewallpapers.files.wordpress.com/2010/01/zcity-7.jpg"
}, {
  image: "http://www.emoticonswallpapers.com/wallpaper/cities/cities-wallpaper-005.jpg"
}, {
  image: "http://www.desktopwallpaperhd.net/wallpapers/17/d/night-city-background-computer-179261.jpg"
}, {
  image: "http://wallpaperrs.com/uploads/photography/one-world-trade-center-cities-spectacular-hd-wallpaper-142944107626.jpg"
}, {
  image: "https://wallpaperscraft.com/image/new_york_city_top_view_85115_1920x1080.jpg"
}, {
  image: "http://cdn.wallpapersafari.com/42/40/wNqXGR.jpg"
}, {
  image: "http://travelhdwallpapers.com/wp-content/uploads/2015/01/Sydney-Night-8.jpg"
}, {
  image: "http://cdn.wallpapersafari.com/59/27/oNU5fY.jpg"
}, {
  image: "http://cdn.pcwallart.com/images/germany-city-at-night-wallpaper-2.jpg"
}]

function randomBackground() {
  var random = Math.floor(Math.random() * backgrounds.length);
  if (random == 0) {
    random = 1;
  }

  document.getElementsByTagName("body")[0].style.backgroundImage = "url(" + backgrounds[random].image + ")";

}

document.getElementById("new-quote").onclick = fwork;

var tweetQuote = '';
function fwork() {
  randomBackground();
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.jsonO", function(data) {
    $("#actual-quote").html('"' + data.quote + '"')
    $("#author").html("<p>&ndash;" + data.author + "<p>")

  if (data.quoteAuthor) {
  $("#author").html("<p>&ndash;" + data.author + "</p>")
} else {
  $("#author").html("<p>&ndash;"+"Unknown!"+ "</p>")
}
    tweetQuote=data.quote+'-'+""+data.author;
  });

};

$("#twitter").click(function(){
  console.log(tweetQuote);
    window.open('https://twitter.com/intent/tweet?text='+tweetQuote,'_blank');
  });
