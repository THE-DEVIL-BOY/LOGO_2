setTimeout(()=>{
    $(".cont1").addClass("ani1");
    setTimeout(()=>{
        $(".cont1").removeClass("ani1");
        $(".cont1").addClass("ani2");
        setTimeout(()=>{
            $(".cont1").removeClass("ani2");
            $(".cont1").addClass("ani3");
            setTimeout(()=>{
                $(".cont1").removeClass("ani3");
                $(".cont1").addClass("ani4");
                setTimeout(()=>{
                    $(".cont1").removeClass("ani4");
                    $(".cont1").addClass("ani5");       
                    
                    setTimeout(()=>{
                        $(".cont1").removeClass("ani5");
                        setTimeout(()=>{
                            $(".cont1").addClass("large");       
                            $(".cont").addClass("fade1");       
                            $(".cont").removeClass("hide");        
                            setTimeout(()=>{
                              setTimeout(()=>{
                                $(".cont1").addClass("hide");       
                                setTimeout(()=>{
                                    $(".cont").css({"background-image": "url(img2.jpg)"});              
                                    $(".cont1").addClass("hide");       
                                    
                                  },900,)
                              },850.5,) 
                            },850.2,)     
   
                        },850,)
                    },800,)  

                },750,)
            },700,)
        },650,)

    },600)
},500)
