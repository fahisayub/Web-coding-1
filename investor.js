var title=document.createElement('h1');
        title.innerHTML='Strategic Investors';
        title.style.textAlign='center';
        title.style.fontSize='40px';
       var container= document.createElement('div');
        container.setAttribute('id','container');
      

       document.querySelector('body').append(title,container);

        investorData=[
            {name:"Vijay Shekhar Sharma" , img:'https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg' ,logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg" , role:"Co-Founder & CEO",},
            {name:'Kunal Shah' , img:'https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png' ,logo:'https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png' , role:'Founder',},
            {name:'Amrish Rau' , img:'https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg' ,logo:'https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png' , role:'CEO',},
            {name:'Sampad Swain' , img: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg',logo:'https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png' , role:'Co-Founder & CEO',},
        ];
        investorData.map(function(ele){
            var investor=document.createElement('div');
            investor.setAttribute('class','investor');
            var image=document.createElement('img');
            image.setAttribute('id','img');
            var name=document.createElement('h2');
            var role=document.createElement('h5');
            var logo=document.createElement('img');
            logo.setAttribute('id','logo');
             image.src=ele.img;
            name.innerHTML=ele.name;
            role.innerHTML=ele.role;
            logo.src=ele.logo;
            investor.append(image,name,role,logo);
            document.querySelector('div').append(investor);


        });

