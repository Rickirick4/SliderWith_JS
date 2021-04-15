var modals = [
    {
        name: "Toyata Supra",
        image: "img/1.jfif",
        link: "https://garagedreams.net/buyers-guide/buying-a-toyota-supra-mk4"
    },

    {
        name: "Nissan GT-R 34",
        image: "img/2.jfif",
        link: "https://prestigemotorsport.com.au/project/1999-nissan-skyline-r34-gt-r-vspec-2/"
    },

    {
        name: "Mazda RX-7",
        image: "img/3.jfif",
        link: "https://option-tokyo.com/2019/12/18/33157/rx7_owned_texas_guy_001/"
    },

    {
        name: "Mazda RX-8",
        image: "img/4.jfif",
        link: "https://henrybushkin.com/mazda-rx8-2021-new-review.html"
    },

    {
        name: "Nissan Evo 9",
        image: "img/5.jfif",
        link: "https://www.fastcar.co.uk/cars/tuned-jdm-mitsubishi-evo-ix-mr/"
    }
]

var index = 0;
var slaytCount = modals.length;
var settings = {
    duration: 3000,
    random: false
};
var interval;


init(settings);


document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
    index--;
    showSlide(index);
});


document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index++;
    showSlide(index);
});

document.querySelectorAll(".ico").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval);
    });
});

document.querySelectorAll(".ico").forEach(function(item){
    item.addEventListener("mouseleave", function(){
        init(settings);
    });
});

function init(settings) {

    var prev;

    interval = setInterval(function () {

        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev);
            prev = index;
        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }

        showSlide(index);

    }, settings.duration)

}


function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }

    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector(".card-title").textContent = modals[index].name;

    document.querySelector(".card-img-top").setAttribute("src", modals[index].image);

    document.querySelector(".card-link").setAttribute("href", modals[index].link);
}



