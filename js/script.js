


const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();
let activePanelNavIndex = 0;
let activePanelNavSuccess = true;

$(window).on('load', function (){
    const YoulGet = $('#youll-get').offset().top;
    console.log(YoulGet, panelNav)

    ScrollTrigger.create({
        trigger: "#youll-get",
        start: `top top-=-79` ,
        end: `top top-=2500`,
        pin: true,
        onUpdate: function (e){
            const percent = e.progress * 100;
            const activeIndex = +(percent / (100 / panelNav.length)).toFixed()

            if(activePanelNavSuccess && activeIndex < panelNav.length){
                console.log(activeIndex)
                activePanelNavIndex = activeIndex;
                activePanelNavSuccess = false;
                const thisElement = $(panelNav[activeIndex]);
                const href = thisElement.attr('href');
                $('img[data-panelyoul]').removeClass('active');
                $(`img[data-panelyoul="${activeIndex}"]`).addClass('active');

                youlTexts.addClass('d-none').removeClass('active');
                const textElem = $(`#text-${href.replace(/#/g, '')}`);
                textElem.removeClass('d-none');

                $('.youll-get .container-youl-get .panel-youl .image').css('top', `${textElem.height() + 20}px`);

                setTimeout(() => {
                    $(href).addClass('active')
                    $(`#text-${href.replace(/#/g, '')}`).addClass('active')
                }, 100);

                panelNav.removeClass('active');
                thisElement.addClass('active');
            }

            if(activePanelNavIndex !== activeIndex){
                activePanelNavIndex = activeIndex;
                activePanelNavSuccess = true;
            }

        }
    });
})


ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: {className: 'nav--fixed', targets: '.max-header'},
});

ScrollTrigger.create({
    start: 'top -900',
    end: 99999,
    toggleClass: {className: 'nav-color-black', targets: '.max-header'}
});


const PannelsTop = $('#panels').offset().top;
const panelWidths = $('#panels-container').width();


ScrollTrigger.create({
    start: `top -${PannelsTop + 500}` ,
    end: `${panelWidths}`,
    toggleClass: {className: 'nav-change', targets: '.max-header'}
});

$('.js-example-basic-single').select2({
    minimumResultsForSearch: Infinity
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
const btn_prev_slider = document.querySelector('#btn-white-slider')
const btn_buy_slider = document.querySelector('#btn-green-slider')
const buttons_slider = document.querySelector('#buttons-slider')
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

const headerSliderArray = [
    'images/slider1.png',
    'https://picsum.photos/2440/1730?random=1',
    'https://picsum.photos/2440/1730?random=2',
    'https://picsum.photos/2440/1730?random=3',
    'https://picsum.photos/2440/1730?random=4',
]

let headerSliderArraySuccess = true;


switch_planning.addEventListener('change', (e)=>{

    if(headerSliderArraySuccess){
        headerSliderArray.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = () => console.log('loaded')
        })
        headerSliderArraySuccess = false;
    }


    if(!e.currentTarget.checked){
        container1.classList.add('active')
        slider_planning.classList.remove('active')
    } else {
        slider_planning.classList.add('active')
        container1.classList.remove('active')
        open_close.classList.add('active')
    }
})


open_close.addEventListener('click', ()=>{
    col_green2.classList.toggle('active')
    col_green.classList.toggle('active')

    if(!col_green.classList.contains('active')){
        buttons_slider.classList.add('active')
        slider_planning.classList.add('ok')
    } else {
        buttons_slider.classList.remove('active')
        slider_planning.classList.remove('ok')
    }

})

btn_prev_slider.addEventListener('click', ()=>{
    buttons_slider.classList.remove('active')
    slider_planning.classList.remove('ok')
    if(!col_green.classList.contains('active')){
        col_green.classList.add('active')
        col_green2.classList.add('active')
    }
})


btn_buy_slider.addEventListener('click', ()=>{
    col_box1.classList.remove('active')
    col_box2.classList.add('active')
    buttons_slider.classList.remove('active')
    slider_planning.classList.remove('ok')
    if(!col_green.classList.contains('active')){
        col_green.classList.add('active')
        col_green2.classList.add('active')
    }
})

// ......



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



//......... Youll Get



// const scrollTop = $('#youll-get').offset().top;
// const contHeight = $('#container').height();
// const panelss = gsap.utils.toArray(".panel-youl");
//
//
// gsap.to(".panel-youl", {
//     yPercent: -100,
//     ease: "slow",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: "#container",
//         start: "top +90",
//         end: `${scrollTop + (panelss.length * contHeight)}`,
//         scrub: 0,
//         pin: true,
//     }
// });
//
//
// gsap.set(".panel-youl", { zIndex: (i, target, targets) => targets.length - i });
// const navLinks = gsap.utils.toArray(".section_nav a");
// navLinks.forEach((link, i) => {
//     link.addEventListener("mouseover", e => {
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
//         end: `${scrollTop + (i * contHeight) + contHeight}`,
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
//
//


const panelYoul = $('.panel-youl');
const panelNav = $('.section_nav a');
const youlTexts = $('.box-title .title1');

// panelNav.on('mouseenter', function (e){
//     e.preventDefault();
//     const thisElement = $(this);
//     const href = thisElement.attr('href');
//     panelYoul.addClass('d-none').removeClass('active');
//     $(href).removeClass('d-none');
//
//     youlTexts.addClass('d-none').removeClass('active');
//     $(`#text-${href.replace(/#/g, '')}`).removeClass('d-none')
//
//
//     setTimeout(() => {
//         $(href).addClass('active')
//         $(`#text-${href.replace(/#/g, '')}`).addClass('active')
//     }, 100);
//
//     panelNav.removeClass('active');
//     thisElement.addClass('active');
// })


panelNav.on('click', function (e){
    e.preventDefault();
})



// ........ slick

const allslicLengt = document.querySelectorAll('.slider .image')
const span_count = document.querySelector('.slider-text samp')
span_count.innerText = `/ ${allslicLengt.length} `
let activeIndex = 1;

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function (slider, i) {
        //FYI just have a look at the object to find available information
        //press f12 to access the console in most browsers
        //you could also debug or look in the source

        return  (i + 1) + '/' + slider.slideCount;
        // $('.slider-text .count span').text(`${activeIndex} `)
    },
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if(!slick.$dots){
        return;
    }

    const i = (currentSlide ? currentSlide : 0) + 1;

    $('.slider-text .count').text(i + '/' + (slick.$dots[0].children.length));
})


//...... Modals

const modal_links = document.querySelectorAll('#links a')
const modal_menu = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})
modal_links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        modal_menu.hide()
    })
})

const modal_purchase = new bootstrap.Modal(document.getElementById('modal-purchase'), {
    keyboard: false
})
const modal_bd1 = document.getElementById('modal-bd1')
const modal_bd2 = document.getElementById('modal-bd2')
const modal_ft1 = document.getElementById('modal-ft1')
const modal_ft2 = document.getElementById('modal-ft2')
const modal_btn1 = document.getElementById('btn-ft1')
const modal_btn2 = document.getElementById('btn-ft2')


modal_btn1.addEventListener('click', ()=>{
    modal_bd1.classList.remove('active')
    modal_bd2.classList.add('active')
    modal_ft1.classList.remove('active')
    modal_ft2.classList.add('active')
})

modal_btn2.addEventListener('click', ()=>{
    modal_purchase.hide()
})
