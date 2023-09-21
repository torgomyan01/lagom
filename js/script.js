const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();

$('.gradient-card-running-line').each((index, elem) => {
    const gradientCardRunningLine = $(elem).text();

    $(elem).text('');

    for (let i = 0; i < gradientCardRunningLine.length - 1; i++) {
        $(elem).append(`<span>${gradientCardRunningLine[i]}</span>`)
    }

    const thisChild = $(elem).children('span');

    let count = 0;
    thisChild.each((index, elemSpan) => count += $(elemSpan).width())

    $(elem).css('width', `${count}px`);
    $(elem).css('animation', `gradient-card-line ${count / 80}s linear`);
    $(elem).css('animation-iteration-count', `infinite`);
    $(elem).css('animation-play-state', `paused`);

})

const slider = $('.rich-commercial-slider');

slider.slick({
    centerMode: true,
    // prevArrow: $('#prev'),
    // nextArrow: $('#next'),
    centerPadding: '450px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1352,
            settings: {
                centerPadding: '350px',
            }
        },
        {
            breakpoint: 1100,
            settings: {
                centerPadding: '250px',
            }
        },
        {
            breakpoint: 850,
            settings: {
                centerPadding: '150px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '100px',
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '50px',
            }
        },
    ]
});



$(".fix-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "smoth");
    return false;
});


const logo_number = document.querySelector('.logo-number')

window.addEventListener('scroll', (e)=>{
    const scroly = window.scrollY;
    if(scroly >= 10){
        logo_number.classList.remove('active')
    } else if(scroly <= 10){
        logo_number.classList.add('active')
    }
})

//..... Gaps

if ($(window).width() <= 768){

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box-gsap", {
        x: -350,
        scrollTrigger: {
            trigger: '.box-gsap',
            scrub: true,
            toggleActions: 'play none none none',
        },
        duration: 1
    });


}


if ($(window).width() <= 768){

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box-content", {
        x: -350,
        scrollTrigger: {
            trigger: '.box-content',
            scrub: true,
            toggleActions: 'play none none none',
        },
        duration: 1
    });


}

if ($(window).width() <= 768){

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box-compromising", {
        x: -350,
        scrollTrigger: {
            trigger: '.box-compromising',
            scrub: true,
            toggleActions: 'play none none none',
        },
        duration: 1
    });


}



    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gallery-box", {
        x: -600,
        duration: 3,
        scrollTrigger: {
            trigger: '.gallery-box',
            scrub: true,
        },
        toggleActions : 'play none none none'
    });


    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gallery-box-prev", {
        x: 600,
        duration: 3,
        scrollTrigger: {
            trigger: '.gallery-box-prev',
            scrub: true,
            end: '200%'
        },
        toggleActions : 'onEnter none none none'
    });




const sliders = document.getElementById('slider');
const sliders2 = document.getElementById('slider2');
const sliders3 = document.getElementById('slider3');
const sliders4 = document.getElementById('slider4');
const sliders5 = document.getElementById('slider5');


noUiSlider.create(sliders2, {
    start: [38700000, 98700000],
    connect: true,
    format: wNumb({
        decimals: 0,
        thousand: ','
    }),
    tooltips: true,
    range: {
        'min': 28700000,
        'max': 110000000
    }
});

noUiSlider.create(sliders, {
    start: [5, 15],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 0,
    }),
    range: {
        'min': 1,
        'max': 30
    }
});


noUiSlider.create(sliders3, {
    start: [5000000, 9000000],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 0,
        thousand: ','
    }),
    range: {
        'min': 5000000,
        'max': 13000000
    }
});


noUiSlider.create(sliders4, {
    start: [56, 157],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 0,
    }),
    range: {
        'min': 56,
        'max': 157
    }
});

noUiSlider.create(sliders5, {
    start: [28, 94],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 1,
        thousand: ','
    }),
    range: {
        'min': 28,
        'max': 94
    }
});


//........ Input Range
//


//............ Header Slider

const HeaderSlider = $('.header');
let HeaderSliderCount = 0;

const HeaderImages = [
    {
        url: 'image/header-bg1.png',
        text: `Жилой квартал ,  <br/>  который заботится  <br/> о вашем благополучии`
    },
    {
        url: 'image/header-bg2.png',
        text: `Утонченный вкус <br/>  и премиальные <br/> решения`,
    },
    {
        url: 'image/header-bg3.png',
        text: `Инновационные <br/> инженерные решения <br/> для здоровья, удобства <br/> и комфорта`,
    },
    {
        url: 'image/header-bg4.png',
        text: `Удобное расположение  <br/> в оживленной части  <br/> цветного бульвара,  <br/> рядом с метро`,
    },

]

HeaderImages.forEach((item, index) => {
    HeaderSlider.find('.slider-text-body').append(`<h2 class="heading ${index === 0 ? active : ''}">${item.text}</h2>`);
})

setInterval(() => {
    HeaderSlider.css('background-images', `url(${HeaderImages[HeaderSliderCount].url})`)
    HeaderSlider.find('.count').text(`${HeaderSliderCount + 1}/${HeaderImages.length}`)

    HeaderSlider.find('.heading').removeClass(active)[HeaderSliderCount].classList.add(active);

    HeaderSliderCount++;
    if(HeaderSliderCount === HeaderImages.length){
        HeaderSliderCount = 0;
    }
}, 3000)




// sindey-prime-slider

const sindeyPrimeSlider = $('.sindey-prime-slider');
let sindeyPrimeSliderCount = 0;
const sindeyPrimeSliderImages = [
    {
        url: 'image/slider1.png',
        text: 'Закрытый двор с озеленением',
    },
    {
        url: 'image/slider2.jpg',
        text: 'Всестороннее благополучие ',
    },
    {
        url: 'image/slider3.png',
        text: 'Закрытый двор с озеленением',
    },
    {
        url: 'image/slider4.png',
        text: 'Планировка по высоким стандартам бизнес-класса',
    },
    {
        url: 'image/slider5.png',
        text: 'Фудхолл с фокусом на здоровое питание',
    },
]




sindeyPrimeSliderImages.forEach((item, index) => {
    sindeyPrimeSlider.find('.buttons').append(`<div class="button ${index === 0 ? active : ''}"></div>`);
    sindeyPrimeSlider.find('.slider-text-body').append(`<div class="slider-text ${index === 0 ? active : ''}">${item.text}</div>`);
})



setInterval(() => {
    sindeyPrimeSlider.css('background-images', `url(${sindeyPrimeSliderImages[sindeyPrimeSliderCount].url})`)
    sindeyPrimeSlider.find('.count').text(`${sindeyPrimeSliderCount + 1}/${sindeyPrimeSliderImages.length}`)
    // sindeyPrimeSlider.find('.slider-text').text(`${sindeyPrimeSliderImages[sindeyPrimeSliderCount].text}`)

    sindeyPrimeSlider.find('.button').removeClass(active)[sindeyPrimeSliderCount].classList.add(active);
    sindeyPrimeSlider.find('.slider-text').removeClass(active)[sindeyPrimeSliderCount].classList.add(active);

    sindeyPrimeSliderCount++;
    if(sindeyPrimeSliderCount === sindeyPrimeSliderImages.length){
        sindeyPrimeSliderCount = 0;
    }
}, 3000)






const fixButton = $('.fix-button');
const fixButtonBtn = $('.fix-button-btn');

const fixButtonStorageName = 'success-cookie';

const fixButtonStorage = localStorage.getItem(fixButtonStorageName);

fixButtonBtn.on('click', function (){
    localStorage.setItem(fixButtonStorageName, 'true');
    fixButton.addClass(none)
})

if(!fixButtonStorage){
    fixButton.removeClass(none)
}



// GSAP NUMBERS

const items = document.querySelectorAll(".number-animation");

gsap.from(items, {
    textContent: 0,
    duration: 2,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
        each: 1.0,
        onUpdate: function() {
            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        },
    }
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


setInterval(() => {
    const endOfMonth = moment().endOf('month');
    const countDown = moment.duration(endOfMonth.diff(moment()))._data;


    $('.day-count').text(countDown.days);
    $('.hour-count').text(countDown.hours);
    $('.min-count').text(countDown.minutes);
    $('.sec-count').text(countDown.seconds);
}, 1000)


const tgToken = 'bot6257124480:AAGDfdClfEPWGTDDAht-C6QjzlXrRJiNhb4';
const chatID = '@Sydney_Mail_Bot';
// const chatID = '809580214';

//utm_campaign - 95179887
// utm_content - 14938138702
// utm_term - жк панорама парк купить


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const utm_campaign = urlParams.get('utm_campaign')
const utm_content = urlParams.get('utm_content')
const utm_term = urlParams.get('utm_term')

$('.utm_campaign').val(utm_campaign);
$('.utm_content').val(utm_content);
$('.utm_term').val(utm_term);

const chatIDs = [];

$('.form-sites').on('submit', function (e){
    e.preventDefault();
    const data = $(e.target).serialize().replace(/=/g, ': ').replace(/&/g, '\n\r');
// getUpdates
    $.ajax({
        url: `https://api.telegram.org/${tgToken}/getUpdates`,
        method: 'get',
        dataType: 'json',
        success: function(_data){

            _data.result.forEach((item) => {
                const chatID = item.message.chat.id;
                if(!chatIDs.includes(chatID)){
                    chatIDs.push(chatID)
                }
            })
            startSendMessage(data);

        }
    });

})



function startSendMessage(data){
    let intCount = 0;
    const int = setInterval(() => {
        $.ajax({
            url: `https://api.telegram.org/${tgToken}/sendMessage`,         /* Куда отправить запрос */
            method: 'get',             /* Метод запроса (post или get) */
            dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
            data: {
                chat_id: chatIDs[intCount],
                parse_mode: 'html',
                text: data
            },
            success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                console.log(data, 22222)
            }
        });
        if(intCount === chatIDs.length - 1){
            clearInterval(int)
        }
        intCount++
    }, 1000)
}


