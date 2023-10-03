


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
const switch_planning = document.querySelector('#switch-planning input')
const container1 = document.querySelector('#container1')
const slider_planning = document.querySelector('#slider-image')
const open_close = document.querySelector('#open-close')
const col_green2 = document.querySelector('#col-green2')
const col_green = document.querySelector('#col-green')

btn_col.addEventListener('click', ()=>{
    col_box1.classList.remove('active')
    col_box2.classList.add('active')
})

btn_prev.addEventListener('click', ()=>{
    col_box1.classList.add('active')
    col_box2.classList.remove('active')
})

switch_planning.addEventListener('change', (e)=>{
    if(!e.currentTarget.checked){
        container1.classList.add('active')
        slider_planning.classList.remove('active')
        open_close.classList.remove('active')
    } else {
        slider_planning.classList.add('active')
        container1.classList.remove('active')
        open_close.classList.add('active')
    }
})


open_close.addEventListener('click', ()=>{
    col_green2.classList.toggle('active')
    col_green.classList.toggle('active')
})


// ......


const headerSliderArray = [
    'images/slider1.png',
    'https://picsum.photos/2440/1730?random=1',
    'https://picsum.photos/2440/1730?random=2',
    'https://picsum.photos/2440/1730?random=3',
    'https://picsum.photos/2440/1730?random=4',
]

const left_btn = document.querySelector('.left-btn')
const right_btn = document.querySelector('.right-btn')


left_btn.addEventListener('click', ()=>{
    ChangeSlider('minus')
})

right_btn.addEventListener('click', ()=>{
    ChangeSlider('plus')
})
let num = 0;




const headerImageBlock = document.querySelector('.slider-image');
const count_span = document.querySelector('.count span');
const count_samp = document.querySelector('.count samp');
count_span.innerHTML = `${num + 1} / ${headerSliderArray.length}`

function ChangeSlider(numStatus){

    numStatus === 'plus' ? num++ : num--
    console.log(num)
    if(num >= headerSliderArray.length){
        num = 0
    } else if(num < 0){
        num = headerSliderArray.length-1
    }
    count_span.innerText = `${num  + 1} / ${headerSliderArray.length}`
    headerImageBlock.style.backgroundImage = `url(${headerSliderArray[num]})`;


}



// /* Panels */
// const youAdd = gsap.utils.toArray("#you");
// const aaa = gsap.to(youAdd, {
//     yPercent: 100,
//     ease: "none",
//     scrollTrigger: {
//         trigger: "#you-add-body",
//         pin: true,
//         start: "top",
//         end: "top",
//         scrub: 1,
//         snap: {
//             snapTo: 2,
//             inertia: false,
//             // duration: {min: 0.1, max: 0.1}
//         },
//     }
// });


//......... Youll Get


// gsap.registerPlugin(ScrollTrigger);


// const scrollTop = $('#youll-get').offset().top;
// const contHeight = $('#container').height();
// const panelss = gsap.utils.toArray(".panel-youl");
//
//
// gsap.to(".panel-youl:not(:last-child)", {
//     yPercent: -100,
//     ease: "slow",
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: "#container",
//         start: "top top",
//         end: `+=${panelss.length * contHeight}px`,
//         scrub: 1,
//         pin: true,
//     }
// });
//
//
// gsap.set(".panel-youl", { zIndex: (i, target, targets) => targets.length - i });
// const navLinks = gsap.utils.toArray(".section_nav a");
// navLinks.forEach((link, i) => {
//     link.addEventListener("click", e => {
//         e.preventDefault();
//         console.log(i)
//         gsap.to(window,
//           {
//               scrollTo: scrollTop + (i * contHeight)
//           });
//     });
// });
//
// panelss.forEach((panel, i) => {
//     ScrollTrigger.create({
//         start: 0,
//         end: scrollTop + (i * contHeight) - contHeight,
//         markers: true,
//         onLeave: () => {
//             if(navLinks[i + 1]) {
//                 gsap.to(navLinks[i + 1], {scale: 1.3, color: "red"});
//                 gsap.to(navLinks[i], {scale: 1, color: "blue"});
//             }
//         },
//         onEnterBack: () => {
//             gsap.to(navLinks[i], {scale: 1.3, color: "red"});
//             if(navLinks[i + 1]) {
//                 gsap.to(navLinks[i + 1], {scale: 1, color: "blue"});
//             }
//         },
//     })
// });


////  22

// gsap.to(".panel-youl:not(:last-child)", {
//     yPercent: -100,
//     ease: "slow",
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: "#container",
//         start: "top top",
//         end: "+=500%",
//         scrub: 1,
//         pin: true
//     }
// });
//
// gsap.set(".panel-youl", { zIndex: (i, target, targets) => targets.length - i });
//
//
// const scrollTop = $('#youll-get').offset().top;
// const contHeight = $('#container').height();
//
// const pinSpacer = document.querySelector('.pin-spacer');
//
//
// const navLinks = gsap.utils.toArray(".section_nav a");
// navLinks.forEach((link, i) => {
//     link.addEventListener("mouseover", e => {
//         e.preventDefault();
//         gsap.to(window, {scrollTo: scrollTop + (i * contHeight)});
//     });
// });
//
// const panelss = gsap.utils.toArray(".panel-youl");
// panelss.forEach((panel, i) => {
//     console.log(navLinks)
//     ScrollTrigger.create({
//         start: `${scrollTop}` - 50 ,
//         end: (i + 1) * contHeight * 2.2,
//         onLeave: () => {
//             if(navLinks[i + 1]) {
//                 gsap.to(navLinks[i + 1], {scale: 1.3, color: "#303030"});
//                 gsap.to(navLinks[i], {scale: 1, color: "#30303099"});
//             }
//         },
//         onEnterBack: () => {
//             gsap.to(navLinks[i], {scale: 1.3, color: "#303030"});
//             if(navLinks[i + 1]) {
//                 gsap.to(navLinks[i + 1], {scale: 1, color: "#30303099"});
//             }
//         },
//     })
// });


// 2


const scrollTop = $('#youll-get').offset().top;
const contHeight = $('#container').height();
const panelss = gsap.utils.toArray(".panel-youl");


gsap.to(".panel-youl", {
    yPercent: -100,
    ease: "slow",
    stagger: 1,
    scrollTrigger: {
        trigger: "#container",
        start: "top",
        end: `${scrollTop + (panelss.length * contHeight)}`,
        scrub: 0,
        pin: true,
    }
});


gsap.set(".panel-youl", { zIndex: (i, target, targets) => targets.length - i });
const navLinks = gsap.utils.toArray(".section_nav a");
navLinks.forEach((link, i) => {
    link.addEventListener("mouseover", e => {
        e.preventDefault();
        console.log(i)
        gsap.to(window,
          {
              scrollTo: scrollTop + (i * contHeight)
          });
    });
});

panelss.forEach((panel, i) => {
    ScrollTrigger.create({
        start: 0,
        end: `${scrollTop + (i * contHeight) + contHeight}`,
        onLeave: () => {
            if(navLinks[i + 1]) {
                gsap.to(navLinks[i + 1], {scale: 1.3, color: "#303030"});
                gsap.to(navLinks[i], {scale: 1, color: "#30303099"});
            }
        },
        onEnterBack: () => {
            gsap.to(navLinks[i], {scale: 1.3, color: "#303030"});
            if(navLinks[i + 1]) {
                gsap.to(navLinks[i + 1], {scale: 1, color: "#30303099"});
            }
        },
    })
});



// ........ slick

const allslicLengt = document.querySelectorAll('.slider .image')
const span_count = document.querySelector('.slider-text samp')
span_count.innerText = allslicLengt.length

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
}).on('afterChange', function (e, i){
    console.log(e, i)
});
