import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { useKeenSlider } from "keen-slider/react"
// import CodeExample from '../components/CodeExample'
import "keen-slider/keen-slider.min.css"

function Services() {
  let arraySlider = [];
  for (let index = 1; index < 18; index++) {
    arraySlider.push(`/portfolioImages/img${index}.png`);
  }
  // const WheelControls = (slider) => {
  //   let touchTimeout
  //   let position
  //   let wheelActive

  //   function dispatch(e, name) {
  //     position.x -= e.deltaX
  //     position.y -= e.deltaY
  //     slider.container.dispatchEvent(
  //       new CustomEvent(name, {
  //         detail: {
  //           x: position.x,
  //           y: position.x,
  //         },
  //       })
  //     )
  //   }

  //   function wheelStart(e) {
  //     position = {
  //       x: e.pageX,
  //       y: e.pageY,
  //     }
  //     dispatch(e, "ksDragStart")
  //   }

  //   function wheel(e) {
  //     dispatch(e, "ksDrag")
  //   }

  //   function wheelEnd(e) {
  //     dispatch(e, "ksDragEnd")
  //   }

  //   function eventWheel(e) {
  //     if (e.deltaX) {
  //       e.preventDefault()
  //       if (!wheelActive) {
  //         wheelStart(e)
  //         wheelActive = true
  //       }
  //       wheel(e)
  //       clearTimeout(touchTimeout)
  //       touchTimeout = setTimeout(() => {
  //         wheelActive = false
  //         wheelEnd(e)
  //       }, 50)
  //     }
  //   }

  //   slider.on("created", () => {
  //     slider.container.addEventListener("wheel", eventWheel, {
  //       passive: false,
  //     })
  //   })
  // }
  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        "(min-width: 500px)": {
          slides: { perView: 2, spacing: 5 }
        },
        "(min-width: 800px)": {
          slides: { perView: 3, spacing: 10 }
        },
        "(min-width: 1200px)": {
          slides: { perView: 4, spacing: 10 }
        },
        "(min-width: 1500px)": {
          slides: { perView: 5, spacing: 10 }
        }
      },
      mode: "free-snap",
      loop: true
    }
    // [WheelControls]
  )
  const dataServices = [
    {
      name: "Shopify Custom Development",
      services: [
        "Shopify",
        "Shopify Plus",
        "Shopify Apps",
        "BigCommerce",
        "Web and Mobile Apps",
        "Ongoing Support"
      ]
    },
    {
      name: "UI/UX Design",
      services: [
        "UI/ UX Design",
        "Digital",
        "Design System",
        "Ecommerce",
        "Webflow"
      ]
    },
    {
      name: "Mobile App",
      services: [
        "UI/ UX Design",
        "Digital",
        "Design System",
        "Ecommerce",
        "Webflow"
      ]
    },
    {
      name: "Branding",
      services: [
        "UI/ UX Design",
        "Digital",
        "Design System",
        "Ecommerce",
        "Webflow"
      ]
    },
    {
      name: "Development",
      services: [
        "UI/ UX Design",
        "Digital",
        "Design System",
        "Ecommerce",
        "Webflow"
      ]
    }
  ]
  return (
    <>
      <HeroBanner />
      <div className='ourServices'>
        {
          dataServices.map((value, index) => (
            <div key={index} className='innerServices'>
              <p className='paragraph opacityHalf'>{index + 1}</p>
              <div>
                <h2 className='primary_heading font-SuisseIntl text-[#1c72b8]'>{value.name}</h2>
                <div className='flex gap-6 mt-5'>
                  {
                    value.services.map((service, indexmap) => (
                      <p key={indexmap} className={indexmap === value.services.length - 1 ? "paragraph opacityHalf" : "paragraph opacityHalf listStyleBetween"} >{service}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className='ourWorkHomepageSection' id="our-work">
        <div className="flex items-end justify-between mb-10 w-8/12 m-auto">
          <div>
            <h3>
              Our Work
            </h3>
            <h3 className='text-[#1c72b8]'>
              & Case Studies
            </h3>
          </div>
          <div>
            <p className="paragraph">Explore client success stories</p>
            <p className="paragraph opacity">Contact us to start a new journey</p>
          </div>
        </div>
        <div className="container">
          <div ref={sliderRef} className="keen-slider">
            {
              arraySlider.map(slide => (
                <div className="sliderSlide keen-slider__slide">
                  <img src={slide} alt="" />
                </div>
              ))
            }
          </div>
        </div>
        {/* <CodeExample /> */}
      </div>
    </>
  )
}

export default Services
