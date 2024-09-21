import { MdArrowOutward } from "react-icons/md";
import '../assets/css/AboutUsHomePage.css'

export default function AboutUsHomepage() {
    return (
        <div className="container">
            <div className="grid gap-14 m-auto  py-20">
                <div className="grid gap-3">
                    <h3 className="secondary_heading">
                        We help our clients
                    </h3>
                    <h4 className="text-[#1c72b8]">
                        to build their digital presence for their most ambitious products.
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <p className="paragraph">Compete Pro specializes in assisting Enterprise Shopify Plus Merchants with a wide range of services, including custom-built site optimizations and brand-new eCommerce design and development from the ground up. With a proven track record of supporting over 1,000 Shopify stores, we cater to diverse needs, including D2C, B2B, Wholesale, and Point of Sale (POS) solutions.</p>
                    <p className="paragraph">Our proficiency in crafting custom themes and developing online stores has led to remarkable success stories for our clients, with a combined revenue exceeding $1.2 billion. Count on us to infuse vibrancy and success into your upcoming project.</p>
                </div>
                <a href="/" className="unerlineLInk relative text-[#1c72b8] border-b border-[#1c72b8] uppercase w-fit">
                    Learn more about us
                    <div className="arrowUplink">
                        <div className="firstArrow">
                            <MdArrowOutward />
                        </div>
                        <div className="secondArrow">
                            <MdArrowOutward />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}