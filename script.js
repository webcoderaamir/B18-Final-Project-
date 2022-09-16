function show() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
show();



gsap.from(".rowtxts", {
    opacity: 1,
    duration: 1,
    onStart: function () {
        $('.rowtxts').textillate({ in: { effect: 'fadeInUp' } });
    }
})


var tl = gsap.timeline()

tl
    .to(".rowtxts", {
        scrollTrigger: {
            scroller: "#main",
            trigger: ".rowtxts",
            start: "top 10%",
            scrub: 2,
        },
        opacity: 0,
        delay: 1,
        // stagger: .08
    })
    .to("#line1", {
        scrollTrigger: {
            scroller: "#main",
            trigger: "#line1",
            start: "top 10%",
            scrub: 2,
        },
        opacity: 0,
        delay: 1,
    })
    .from(".rowtxts2", {
        scrollTrigger: {
            scroller: "#main",
            trigger: ".rowtxts2",
            start: "top 80%",
            scrub: 2,
        },
        opacity: 0,
        delay: 1,
        stagger: .08,
        y: 10,
    })

    .to("#page4 #callline", {
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page4 #callline",
            start: "top 90%",
            scrub: 2,
        },
        width: "78%",
    })
    .from(".rowtxt3", {
        scrollTrigger: {
            scroller: "#main",
            trigger: ".rowtxt3",
            start: "top 80%",
            scrub: 2,
        },
        opacity: 0,
        delay: 1,
        stagger: .08,
        y: 40,
    })
    .from(".rowtxt4", {
        scrollTrigger: {
            scroller: "#main",
            trigger: ".rowtxt4",
            start: "top 80%",
            scrub: 2,
        },
        opacity: 0,
        delay: 1,
        stagger: .08,
        y: 10,
    })






let draghover = document.querySelector(".dragpointer")
document.addEventListener("mousemove", (sham) => {
    draghover.style.left = sham.x + 'px';
    draghover.style.top = sham.y + 'px';
    draghover.style.opacity = "1"
})
document.addEventListener("mouseleave", (sham) => {
    draghover.style.opacity = "0"
})





function slideropenvideo() {

    document.querySelector(".circle")
        .addEventListener("mousemove", function (dets) {
            var point = document.querySelector(".circle").getBoundingClientRect()
            var xVal = dets.clientX - point.x;
            var yVal = dets.clientY - point.y;
            document.querySelector("#minicircle").style.top = yVal + "px";
            document.querySelector("#minicircle").style.left = xVal + "px";
            document.querySelector("#minicircle").style.boxShadow = "0 0 10px 3px yellow";
        })

    document.querySelector(".circle")
        .addEventListener("mouseleave", function (dets) {
            document.querySelector("#minicircle").style.top = 50 + "%";
            document.querySelector("#minicircle").style.left = 50 + "%";
            document.querySelector("#minicircle").style.boxShadow = "none";
        })




    let allSlides = document.querySelectorAll(".slide");
    allSlides = [...allSlides];

    var Hovered = null;


    allSlides.forEach(function (elem) {
        elem.addEventListener("mouseover", function (dets) {
            Hovered = ".opener" + dets.target.dataset.index;
            document.querySelector(Hovered).style.width = "100%";
        })

        elem.addEventListener("mouseleave", function (dets) {
            Hovered = ".opener" + dets.target.dataset.index;
            document.querySelector(Hovered).style.width = "0%";
        })
    });




}


function workAnimationCode() {
    gsap.to("#work .card", {
        scrollTrigger: {
            scroller: "#main",
            trigger: "#work",
            start: "top 0%",
            // markers: true,
            pin: true,
            scrub: 3,
        },
        top: "-400%",
        ease: Power4,
        stagger: .08,
        delay: 1
    })
}


var circlehover = document.querySelector("#circle-hover")
var takelook = document.querySelector("#takelook")
var h1 = document.querySelector(".row5>h1")
var h2 = document.querySelector(".row5>.h2")
var h3 = document.querySelector(".row6>h1")
var h4 = document.querySelector(".row7>h1")
takelook.addEventListener("mouseover", function () {
    circlehover.style.top = "20%"
    circlehover.style.backgroundColor = "yellow"
    circlehover.style.color = "black"
    takelook.style.backgroundColor = "black"
    h1.style.color = "white"
    h2.style.color = "white"
    h3.style.color = "white"
    h4.style.color = "white"
})
takelook.addEventListener("mouseleave", function () {
    circlehover.style.top = "78%"
    circlehover.style.backgroundColor = "black"
    circlehover.style.color = "white"
    takelook.style.backgroundColor = "white"
    h1.style.color = "black"
    h2.style.color = "black"
    h3.style.color = "black"
    h4.style.color = "black"
})


const workhover = document.querySelector(".card .viewcircle")
document.addEventListener("mousemove", (elem) => {
    workhover.style.left = elem.x + 'px';
    workhover.style.top = elem.y + 'px';
})


const card = document.querySelector(".card")
var workdiv = document.querySelector("#worktext>h1")
var viewcircle = document.querySelector(".viewcircle")
card.addEventListener("mouseover", function () {
    workdiv.style.opacity = ".5"
    card.style.opacity = "1"
    viewcircle.style.opacity = "1"

})
card.addEventListener("mouseleave", function () {
    workdiv.style.opacity = "1"
    viewcircle.style.opacity = "0"
})


const card2 = document.querySelector(".card2")
var workdiv = document.querySelector("#worktext>h1")
var viewcircle2 = document.querySelector(".viewcircle2")
card2.addEventListener("mouseover", function () {
    workdiv.style.opacity = ".5"
    card2.style.opacity = "1"
    viewcircle2.style.opacity = "1"
})
card2.addEventListener("mouseleave", function () {
    workdiv.style.opacity = "1"
    viewcircle2.style.opacity = "0"
})

const card3 = document.querySelector(".card3")
var workdiv = document.querySelector("#worktext>h1")
var viewcircle3 = document.querySelector(".viewcircle3")
card3.addEventListener("mouseover", function () {
    workdiv.style.opacity = ".5"
    card3.style.opacity = "1"
    viewcircle3.style.opacity = "1"
})
card3.addEventListener("mouseleave", function () {
    workdiv.style.opacity = "1"
    viewcircle3.style.opacity = "1"
})




const circle = document.querySelector(".videopointer")
document.addEventListener("mousemove", (elem) => {
    circle.style.left = elem.x + 'px';
    circle.style.top = elem.y + 'px';
})


var pointer = document.querySelector(".videopointer")
document.querySelector("#video").addEventListener("mouseover", function () {
    pointer.style.opacity = 1
})
document.querySelector("#video").addEventListener("mouseleave", function () {
    pointer.style.opacity = 0
})





slideropenvideo();
workAnimationCode();
