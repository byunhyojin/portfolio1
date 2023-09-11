$(function(){
  AOS.init();
  intro=gsap.timeline({
    onComplete:function(){
      $('body').removeClass('hidden')
  }
  })
  intro.to('.loading .text:nth-child(1)',{opacity:1,duration: 1.5})
  intro.to('.loading .text:nth-child(1)',{opacity:0,duration: 1})
  intro.to('.loading .text:nth-child(2)',{opacity:1,duration: 1.5})
  intro.to('.loading .text:nth-child(2)',{opacity:0,duration: 1})
  intro.to('.loading .text:nth-child(3)',{opacity:1,duration: 1.5})
  intro.to('.loading .text:nth-child(3)',{opacity:0,duration: 1})
  intro.to('.loading',{height:0})

  $('.hide-bg').each(function(each,element){
    gsap.to(element,{
      scrollTrigger:{
        trigger:element,
        start:"0 80%",
        end:""

      },
      height:0
    })
  })
 

})