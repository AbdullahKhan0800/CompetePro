import { NavLink } from "react-router-dom";

export default function HeroBanner() {
    return (
        <div className="bg-gradiant pb-20 pt-16">
            <div className="container">
                <p className='mb-5 font-Euro text-[14px] text-white'>You are viewing <NavLink className={'currenturl font-Euro'} to="/">Home</NavLink>/<NavLink className={'currenturl font-Euro'} to="/services">Services</NavLink></p>
            </div>
            <div className="bg-aboutBoxPattern container">
                <div className="flex justify-between items-center py-8">
                    <h2 className="primary_heading text-white">
                        Trusted eCommerce
                    </h2>
                    <h2 className="primary_heading headingHolo font-SuisseIntl">
                        Est.2021
                    </h2>
                </div>
                <hr className="my-4 opacity-30" />
                <h2 className="headingBCClip primary_heading ml-32 py-8">
                    Shopify Plus
                </h2>
                <hr className="my-4 opacity-30" />
                <div className="bannerGrid py-8">
                    <p className="paragraph text-white">
                        Transforming great ideas into profitable ventures.
                    </p>
                    <h2 className="primary_heading text-white">
                        Leading Agency
                    </h2>
                    <div className="flex justify-center items-center gap-3">
                       <img src="/shopify_glyph.png" width="100px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}