var tl = gsap.timeline()


tl.from("nav",{
    opacity: 0,
    y:-10,
    delay: 0.8,
    duration: 2,
// stagger: 0.2

})

gsap.from(" .pg1-content button",{
    repeat: -1,
    yoyo: true,
    y: -12
})

gsap.from(".pg2-content",{
    opacity: 0,
    delay: 1,
    duration: 1,
    x: 30,
    scrollTrigger:{
        trigger:".pg2-content",
        scroller:"body",
    }
})

// gsap.from(".pg3-heading",{
// opacity: 0,
// delay: 2,
// duartion: 1.7,
// x: -100,
// scrollTrigger:{
//     trigger: ".pg3-heading",
//     scroller: "body"
// }
// })


gsap.from(".wedding, .fashion, .travel, .kids",{
    opacity: 0,
    delay: 1,
    duration: 2,
    scale: 0.7,
    scrollTrigger:{
        trigger:".wedding",
        scroller:"body",
    }
})


var knowmorebtn = document.querySelector(".knowmore")
var pg3 =  document.querySelector(".pg3anotherpg")
var closebtn = document.querySelector(".close")
var imgbox = document.querySelector(".imgbox")
var events = document.querySelector(".event")
var food = document.querySelector(".food")
var nature = document.querySelector(".nature")
var wild = document.querySelector(".wild")
var water = document.querySelector(".water")
var product = document.querySelector(".product")
var realestate = document.querySelector(".realestate")



knowmorebtn.addEventListener("click", function(){
    pg3.style.top = `200%`
})

closebtn.addEventListener("click",function(){
    pg3.style.top = `-300%`

})

food.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.webp?b=1&s=170667a&w=0&k=20&c=28UZDQVkSbPg3-SX4s0jWARo0F7j2EC8zrvQHuh8WnU=)"
  
})

nature.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D)"
})

wild.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://media.istockphoto.com/id/531313601/photo/resting-tiger-in-forest-late-afternoon.webp?b=1&s=170667a&w=0&k=20&c=8Yzcl_vz-oR-lPPAAvrlgs0KvONmY7ulzX4xSecsYKk=)"
})

water.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://media.istockphoto.com/id/472563478/photo/underwater-world-with-corals-and-tropical-fish.webp?b=1&s=170667a&w=0&k=20&c=P8iYRLKSxOPvNYmu0EP_bAeqTUw8OWiBePmxuw_vdso=)"
})


product.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8)"
})


realestate.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://media.istockphoto.com/id/1159873271/photo/residential-area-in-the-city-modern-apartment-buildings.webp?b=1&s=170667a&w=0&k=20&c=8bgBCOBBgVLLUbZeHkmhvvh52dSGsZ6_FnJ77UBwM4w=)"
})

events.addEventListener("click",function(){
    imgbox.style.backgroundImage = "url(https://media.istockphoto.com/id/1415056757/photo/colorful-wedding-tents-at-night.webp?b=1&s=170667a&w=0&k=20&c=ApWOQpmwZRgNAc9ina7XUdb0S25h2gSiuADl8KIyZxM=)"
})
