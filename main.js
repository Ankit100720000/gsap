// const openNav =()=>{
//     console.log("hello")
// }
var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    markers:true,
}})

tl.to("#fanta",{
    top:"120%",
    left:"5%"
},'orange')
tl.to("#orange-cut",{

    top:"155%",
    left:"22%"
})
tl.to("#orange",{
    top:"165%",
    right:"10%"
})