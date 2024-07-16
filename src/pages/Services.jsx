import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

function Services() {
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
            <div key={index} data-aos="fade-up" className='innerServices'>
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
    </>
  )
}

export default Services
