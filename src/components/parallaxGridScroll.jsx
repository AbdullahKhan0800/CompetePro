import { ParallaxScroll } from './ui/parallax-scroll';
import phoneScreenSHot from '../assets/Images/phoneScreenSHot.png'
export function ParallaxScrollDemo() {
  let array = [];
  for (let index = 1; index < 18; index++) {
    array.push(`https://www.bigfolio.co/images/img${index}.png`);
    // array.push(phoneScreenSHot);
  }
  return (
    <div className="container">
      <div className="paralexGrid">
        <div className="grid-containerparalex">
          <h3>Trusted Partner for the Most Innovative Global Brands</h3>
          <p className="paragraph">Let's connect to discuss tailoring your Shopify theme to perfection or crafting a brand-new online store from the ground up.</p>
          <div className="girdThreeparalex">
            <div>
              <h5>1000+</h5>
              <p className="paragraph rightAlign">Designed Shopify storefronts</p>
            </div>
            <div>
              <h5>1.2B+</h5>
              <p className="paragraph rightAlign">Revenue generated in 2023</p>
            </div>
            <div>
              <h5>5 Star</h5>
              <p className="paragraph rightAlign">Registered in Shopify Partner Directory</p>
            </div>
          </div>
        </div>
        <ParallaxScroll images={array} />
      </div>
    </div>
  )
}