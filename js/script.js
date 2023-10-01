


const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();



ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: {className: 'nav--fixed', targets: '.max-header'},
});

$(window).scroll();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



/// Gallery
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;

// document.querySelectorAll(".anchor").forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         let targetElem = document.querySelector(e.target.getAttribute("href")),
//           y = targetElem;
//         if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
//             let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
//               totalMovement = (panels.length - 1) * targetElem.offsetWidth;
//             y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
//         }
//         gsap.to(window, {
//             scrollTo: {
//                 y: y,
//                 autoKill: false
//             },
//             duration: 1
//         });
//     });
// });


/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
    xPercent: -100 * ( panels.length - 1 ),
    ease: "none",
    scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: {min: 0.1, max: 0.1}
        },
        end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
    }
});


// gsap.to(".gallery2", {
//     y: -100,
//     x: -100,
//     duration: 2,
//     ease: "elastic",
//     scrollTrigger: {
//         trigger: ".gallery2",
//         containerAnimation: tween,
//         start: "left center",
//         toggleActions: "play none none reset"
//     }
// });

// gsap.to(".image-3-1", {
//     y: -100,
//     x: -100,
//     duration: 2,
//     ease: "elastic",
//     scrollTrigger: {
//         trigger: ".image-3-1",
//         containerAnimation: tween,
//         start: "left center",
//         toggleActions: "play none none reset"
//     }
// });


// let elements = gsap.utils.toArray(document.querySelectorAll(".panel h2"));
// let scrollTriggerTimeline = gsap.timeline();
//
// console.log(elements)
//
// panels.forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top 50%",
//
//         onEnter: () => {
//             // gsap
//             //   .timeline()
//             //   .set(button, { className: "button" }, "+=1")
//             //   .set(button, { className: "button non-active" }, "+=1");
//             console.log(panels[i])
//         },
//         onEnterBack: () => {
//             // gsap
//             //   .timeline()
//             //   .set(button, { className: "button" }, "+=1")
//             //   .set(button, { className: "button non-active" }, "+=1");
//             // gsap.set(".nav__info button", { color: "#0a71e4", fontWeight: "normal" });
//             // gsap.set(buttons[i], { color: "#FF4087", fontWeight: "bold" });
//             console.log(panels[i])
//         }
//     });
// });



// ....... planning


const btn_col = document.querySelector('#col-box1-btn')
const btn_buy = document.querySelector('#btn-buy')
const btn_prev = document.querySelector('#btn-prev')
const col_box1 = document.querySelector('#col-box1')
const col_box2 = document.querySelector('#col-box2')

btn_col.addEventListener('click', ()=>{
    col_box1.classList.remove('active')
    col_box2.classList.add('active')
})

btn_prev.addEventListener('click', ()=>{
    col_box1.classList.add('active')
    col_box2.classList.remove('active')
})


