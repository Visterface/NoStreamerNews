function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
async function filter() {
    await delay(5)
    var class_name = document.getElementsByClassName("list view_titles");
    if (class_name) {
        var article = document.getElementsByClassName("article");
        for (let i = 0; i < article.length; i++) {
            var text = article[i].textContent.toLowerCase();
            if (text.includes("streamer") || text.includes("twitch") || text.includes("youtube")) {
                article[i].innerHTML = "";

            }
        }
    }
}
self.filter()

var button = document.getElementsByClassName("loadmore")
var scroll = document.addEventListener("scroll", filter)
if (button) {
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = filter;
    }
}
