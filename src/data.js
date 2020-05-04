import look1img1 from "../public/static/images/look1img1.jpg";
import look1img2 from "../public/static/images/look1img2.jpg";
import look1img3 from "../public/static/images/look1img3.jpg";
import look2img1 from "../public/static/images/look2img1.jpg";
import look2img2 from "../public/static/images/look2img2.jpg";
import look2img3 from "../public/static/images/look2img3.jpg";
import look3img1 from "../public/static/images/look3img1.jpg";
import look3img2 from "../public/static/images/look3img2.jpg";
import look3img3 from "../public/static/images/look3img3.jpg";
import look3img4 from "../public/static/images/look3img4.jpg";
import look4img1 from "../public/static/images/look4img1.jpg";
import look4img2 from "../public/static/images/look4img2.jpg";
import look4img3 from "../public/static/images/look4img3.jpg";
import look5img1 from "../public/static/images/look5img1.jpg";
import look5img2 from "../public/static/images/look5img2.jpg";
import look5img3 from "../public/static/images/look5img3.jpg";
import look5img4 from "../public/static/images/look5img4.jpg";
import mainpagelooks from "../public/static/images/mainpagelooks.jpg"
import mainpageshoes from "../public/static/images/mainpageshoes.jpg"
import mainpageapparels from "../public/static/images/mainpageapparels.jpg"

export default [
  {
    sys:{
      id:"123"
    },
    fields:{
      type:"Main",
      slug:"Summer",
      occasion:"party",
      price:1500,
      featured:false,
      images:[
        {
          fields:{
            file:{
              url:mainpagelooks
            },
            price:1500,
            item_type:"Looks",
            description:"Get your whole look dressed up by Us",
            link:"/looks"
          }
        },
        {
          fields:{
            file:{
              url:mainpageshoes
            },
            price:500,
            description:`Nice pair of shoes always adds to the dress`,
            item_type:"Shoes",
            link:"/shoes"
          }
        },
        {
          fields:{
            file:{
              url:mainpageapparels
            },
            price:1000,
            description:`Hand Picked Clothing`,
            item_type:"Apparels",
            link:"/apparels"
          }
        }
      ]
    }
  },
  {
    sys:{
      id:"1"
    },
    fields:{
      type:"Summer",
      slug:"Summer",
      occasion:"party",
      price:1500,
      featured:false,
      brand:"H&M",
      description:"white cotton shirt and denim",
      images:[
        {
          fields:{
            file:{
              url:look1img1
            },
            price:1500,
            item_type:"Look1",
            description:`Shirt woven in a stretch cotton blend 
            with a narrow turn-down collar, French front and 
            a yoke and darts at the back. Long sleeves with 
            adjustable buttoning at the cuffs, and a rounded 
            hem. Muscle Fit – a fit designed to showcase the 
            physique. Narrow shoulders and tapered sleeves 
            create a flattering silhouette.`,
            link:""
          }
        },
        {
          fields:{
            file:{
              url:look1img2
            },
            price:500,
            description:`Shirt woven in a stretch cotton blend 
            with a narrow turn-down collar, French front and 
            a yoke and darts at the back. Long sleeves with 
            adjustable buttoning at the cuffs, and a rounded 
            hem. Muscle Fit – a fit designed to showcase the 
            physique. Narrow shoulders and tapered sleeves 
            create a flattering silhouette.`,
            item_type:"Shirt",
            link:"https://www2.hm.com/en_in/productpage.0618319002.html"
          }
        },
        {
          fields:{
            file:{
              url:look1img3
            },
            price:1000,
            description:`5-pocket jeans in washed stretch
             denim with a regular waist, zip fly and 
             skinny legs.`,
            item_type:"Denim",
            link:"https://www2.hm.com/en_in/productpage.0664647029.html"
          }
        }
      ]
    }
  },
  {
    sys:{
      id:"2"
    },
    fields:{
      type:"Winter",
      slug:"Winter",
      occasion:"casual",
      price:3500,
      featured:true,
      brand:"H&M",
      description:"white cotton shirt and denim",
      images:[
        {
          fields:{
            file:{
              url:look2img1
            },
            price:3500,
            description:`Long-sleeved top in soft sweatshirt 
            fabric with a lined drawstring hood, kangaroo 
            pocket and ribbing at the cuffs and hem. Soft 
            brushed inside.`,
            item_type:"Look1",
            link:""
          }
        },
        {
          fields:{
            file:{
              url:look2img2
            },
            price:1500,
            description:`Long-sleeved top in soft sweatshirt 
            fabric with a lined drawstring hood, kangaroo 
            pocket and ribbing at the cuffs and hem. Soft 
            brushed inside.`,
            item_type:"hoodie",
            link:"https://www2.hm.com/en_in/productpage.0685814033.html"
          }
        },
        {
          fields:{
            file:{
              url:look2img3
            },
            price:2000,
            description:`5-pocket jeans in washed, stretch
             denim with a regular waist, zip fly and button,
              and skinny legs.`,
            item_type:"Denim",
            link:"https://www2.hm.com/en_in/productpage.0730863005.html"
          }
        }
      ]
    }
  },
  {
    sys:{
      id:"3"
    },
    fields:{
      type:"Winter",
      slug:"WinterCool",
      occasion:"casual",
      price:4400,
      featured:true,
      brand:"H&M",
      description:"white cotton shirt and denim",
      images:[
        {
          fields:{
            file:{
              url:look3img1
            },
            price:3500,
            description:``,
            item_type:"Look1",
            link:"",
            description:`Padded jacket in woven fabric 
            with a jersey-lined hood with an elasticated 
            drawstring. Zip with a wind flap and press-studs
             down the front, zipped, diagonal front pockets
              and an inner pocket. Ribbing at the cuffs and
               hem. Lined.`
          }
        },
        {
          fields:{
            file:{
              url:look3img2
            },
            price:3000,
            item_type:"Padded Jacket",
            link:"https://www2.hm.com/en_in/productpage.0790820002.html",
            description:`Padded jacket in woven fabric 
            with a jersey-lined hood with an elasticated 
            drawstring. Zip with a wind flap and press-studs
             down the front, zipped, diagonal front pockets
              and an inner pocket. Ribbing at the cuffs and
               hem. Lined.`
          }
        },
        {
          fields:{
            file:{
              url:look3img3
            },
            price:750,
            description:`Joggers in sweatshirt fabric with an 
            elasticated drawstring waist, side pockets, a 
            back pocket, contrasting colour stripes down 
            the sides and ribbed hems. Soft brushed inside.`,
            item_type:"jogger",
            link:"https://www2.hm.com/en_in/productpage.0694968012.html"
          }
        },
        {
          fields:{
            file:{
              url:look3img4
            },
            price:750,
            item_type:"T Shirt",
            description:`T-shirt in cotton jersey with a 
            print motif on the front and ribbing around 
            the neckline.`,
            link:"https://www2.hm.com/en_in/productpage.0789525018.html"
          }
        }
      ]
    }
  },
  {
    sys:{
      id:"4"
    },
    fields:{
      type:"Summer",
      occasion:"casual",
      slug:"Summer368",
      price:2500,
      description:"Simple but effective",
      featured:true,
      brand:"H&M",
      description:"white cotton shirt and denim",
      images:[
        {
          fields:{
            file:{
              url:look4img1
            },
            price:2500,
            item_type:"Look1",
            link:""
          }
        },
        {
          fields:{
            file:{
              url:look4img2
            },
            price:500,
            item_type:"Tshirt",
            link:"https://www2.hm.com/en_in/productpage.0513699009.html"
          }
        },
        {
          fields:{
            file:{
              url:look4img3
            },
            price:2000,
            item_type:"denim",
            link:"https://www2.hm.com/en_in/productpage.0664647029.html"
          }
        }
      ]
    }
  },
  {
    sys:{
      id:"5"
    },
    fields:{
      occasion:"party",
      slug:"party234",
      price:14500,
      featured:true,
      brand:"H&M",
      description:"white cotton shirt and denim",
      images:[
        {
          fields:{
            file:{
              url:look5img1
            },
            price:14500,
            description:`
            PREMIUM QUALITY
            Tuxedo trousers in a wool weave with satin 
            stripes down the sides of the legs. Concealed 
            hook-and-eye fastener, zip fly, side pockets 
            and jetted back pockets. Skinny Fit – a fit 
            with slightly shorter legs that is close-fitting
            at the thighs, knees and ankles to create a 
            completely fitted silhouette.`,
            item_type:"Look1",
            link:""
          }
        },
        {
          fields:{
            file:{
              url:look5img2
            },
            price:14500,
            item_type:"Look2",
            description:`
            PREMIUM QUALITY
            Tuxedo trousers in a wool weave with satin 
            stripes down the sides of the legs. Concealed 
            hook-and-eye fastener, zip fly, side pockets 
            and jetted back pockets. Skinny Fit – a fit 
            with slightly shorter legs that is close-fitting
            at the thighs, knees and ankles to create a 
            completely fitted silhouette.`,
            link:""
          }
        },
        {
          fields:{
            file:{
              url:look5img3
            },
            price:9999,
            item_type:"jacket",
            description:`
            PREMIUM QUALITY
            Tuxedo trousers in a wool weave with satin 
            stripes down the sides of the legs. Concealed 
            hook-and-eye fastener, zip fly, side pockets 
            and jetted back pockets. Skinny Fit – a fit 
            with slightly shorter legs that is close-fitting
            at the thighs, knees and ankles to create a 
            completely fitted silhouette.`,
            link:"https://www2.hm.com/en_in/productpage.0768410001.html"
          }
        },
        {
          fields:{
            file:{
              url:look5img4
            },
            price:4500,
            item_type:"trouser",
            description:`PREMIUM QUALITY
            Tuxedo trousers in a wool weave with satin stripes
             down the sides of the legs. Concealed hook-and-eye
              fastener, zip fly, side pockets and jetted back 
              pockets. Skinny Fit – a fit with slightly shorter
               legs that is close-fitting at the thighs, knees 
               and ankles to create a completely fitted silhouette.`,
            link:"https://www2.hm.com/en_in/productpage.0784280001.html"
          }
        }
      ]
    }
  }
]
