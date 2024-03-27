function cursor(){
    var cursor = document.querySelector("#cursor")
    document.addEventListener("mousemove", function (dets) {
    cursor.style.left = `${dets.x}px`
    cursor.style.top = `${dets.y}px`
})



var text = document.querySelectorAll("a")

text.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        cursor.style.transform = 'scale(2.5)';
    })
    elem.addEventListener('mouseout', function(){
        cursor.style.transform = 'scale(1)';
    })
})

var img = document.querySelectorAll("#nav .left img")

img.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        cursor.style.transform = 'scale(2.5)';
    })
    elem.addEventListener('mouseout', function(){
        cursor.style.transform = 'scale(1)';
    })
})

var im = document.querySelectorAll("#studio img")

im.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        cursor.style.transform = 'scale(2.5)';
    })
    elem.addEventListener('mouseout', function(){
        cursor.style.transform = 'scale(1)';
    })
})

var icons = document.querySelectorAll("#nav right img")

icons.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        cursor.style.transform = 'scale(2.5)';
    })
    elem.addEventListener('mouseout', function(){
        cursor.style.transform = 'scale(1)';
    })
})





var t = document.querySelectorAll("#page2 #page2-top .mid")

        t.forEach(function (elem) {
            elem.addEventListener("mousemove", function () {
                cursor.style.transform = 'scale(2.5)';
            })
            elem.addEventListener('mouseout', function(){
                cursor.style.transform = 'scale(1)';
            })
        })


        var page2= document.querySelectorAll("#page2-center")

        page2.forEach(function (elem) {
            elem.addEventListener("mousemove", function () {
                cursor.style.transform = 'scale(2.5)';
            })
            elem.addEventListener('mouseout', function(){
                cursor.style.transform = 'scale(1)';
            })
        })



}

cursor()







function one(){
    
gsap.to(".laal" ,{
    y:"200%",
    ease:Expo.easeInOut,
    duration:4
})
gsap.to(" #page1-bottam .left .laal" ,{
    y:"-200%",
    ease:Expo.easeInOut,
    duration:4
})
gsap.to(" #page1-mid .right .laal" ,{
    y:"-200%",
    ease:Expo.easeInOut,
    duration:4
})

}
one()

function two(){
    
gsap.to(".mid #hara" ,{
    x:"-200%",
    ease:Expo.easeInOut,
    duration:4,
    delay:4

})
gsap.to(" #page1-mid .left #hara" ,{
    y:"200%",
    ease:Expo.easeInOut,
    duration:4,
    delay:4
})
gsap.to(" #page1-bottam .mid #hara" ,{
    x:"200%",
    ease:Expo.easeInOut,
    duration:4,
    delay:4,
})

}
two()

function three(){
    gsap.to("#page1-mid .right #pila" ,{
        y:"-200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:8
    })
    gsap.to("#page1-bottam .mid #pila" ,{
        x:"-200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:8
    })
    gsap.to("#nav .left #pila" ,{
        x:"300%",
        ease:Expo.easeInOut,
        duration:4,
        delay:8
    })
}
three()

function onerepeat(){
    
    gsap.to(".laal" ,{
        y:"-200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:12
    })
    gsap.to(" #page1-bottam .left .laal" ,{
        y:"200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:12
    })
    gsap.to(" #page1-mid .right .laal" ,{
        y:"200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:12
    })
}

onerepeat()

function tworepeat(){
    
    gsap.to(".mid #hara" ,{
        x:"200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:16
    
    })
    gsap.to(" #page1-mid .left #hara" ,{
        y:"-200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:16
    })
    gsap.to(" #page1-bottam .mid #hara" ,{
        x:"-200%",
        ease:Expo.easeInOut,
        duration:4,
        delay:16
    })
    
}
tworepeat()


function threerepeat(){
        gsap.to("#page1-mid .right #pila" ,{
            y:"200%",
            ease:Expo.easeInOut,
            duration:4,
            delay:20
        })
        gsap.to("#page1-bottam .mid #pila" ,{
            x:"200%",
            ease:Expo.easeInOut,
            duration:4,
            delay:20
        })
        gsap.to("#nav .left #pila" ,{
            x:"-300%",
            ease:Expo.easeInOut,
            duration:4,
            delay:20
        })
}

bottam()

threerepeat()



// function bottam(){
//         gsap.to("#page4 #uppp #kala" ,{
//             y:"400%",
//             ease:Expo.easeInOut,
//             duration:4,
//             delay:16
//         })
//         gsap.to("#page4 #uppp #leela" ,{
//             x:"200%",
//             ease:Expo.easeInOut,
//             duration:4,
//             delay:20
//         })
//         gsap.to("#page4 #uppp #tila" ,{
//             x:"-200%",
//             ease:Expo.easeInOut,
//             duration:4,
//             delay:24
//         })
// }

// bottam()
        
        one()
        two()
        three()
        onerepeat()
        tworepeat()
        threerepeat()
        // bottam()
        one()
        two()
        three()
        onerepeat()
        tworepeat()
        threerepeat()
        bottam()



        

