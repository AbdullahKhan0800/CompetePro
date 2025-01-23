import React, { useState } from "react"
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import '../assets/css/footer.css'

function Footer() {
    const [inputvalue, setinputvalue] = useState('')
    return (
        <footer className="container">
            <div className="border-black border-b border-solid border-opacity-20 mt-10">
                <div className="newsletter container flex text-center justify-center items-center flex-col gap-5">
                    <h4 className=" text-[#1c72b8]">To keep up to date with all the latest news, advice and jobs</h4>
                    <p>Please sign up to the Compete Pro email newsletter.</p>
                    <div className="footer_newsletter">
                        <input type="text" id="newsletteremail" value={inputvalue} className="News_Letter_Input" onChange={(e) => {
                            setinputvalue(e.target.value)
                        }} />
                        <div className="arrowUpNewsletter">
                            <div className="firstArrow text-[#1c72b8]">
                                <MdArrowOutward />
                            </div>
                            <div className="secondArrow text-[#1c72b8]">
                                <MdArrowOutward />
                            </div>
                        </div>
                        <label htmlFor="newsletteremail" className={`labelEmailNewsletter${inputvalue !== '' ? " News_letter_value" : ""}`}>ENTER EMAIL</label>
                    </div>
                </div>
                <div className="navigations grid pt-5 pb-4 md:py-16 gap-5 md:gap-10">

                    <div className="nav border-black pt-4 md:pt-10 border-t border-solid border-opacity-20 col-span-2 md:col-span-1">
                        <div className="footer-heading">Company</div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ipsam, beatae non rerum Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="nav border-black pt-4 md:pt-10 border-t border-solid border-opacity-20">
                        <div className="footer-heading">Resources</div>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                            <li><NavLink to="/services">Our Services</NavLink></li>
                            <li><NavLink to="/contact-us">Contact us</NavLink></li>
                            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="nav border-black pt-4 md:pt-10 border-t border-solid border-opacity-20">
                        <div className="footer-heading">Follow us</div>
                        <ul className="followUsFooter">
                            <li><a href="https://www.shopify.com/partners/directory/partner/bigfolio-us" target="_blank" rel="noreferrer">Shopify
                                <div className="followarrowUplink">
                                    <div className="firstArrow">
                                        <MdArrowOutward />
                                    </div>
                                    <div className="secondArrow">
                                        <MdArrowOutward />
                                    </div>
                                </div></a>
                            </li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdullah-khan-66790822b/">LinkedIn
                                <div className="followarrowUplink">
                                    <div className="firstArrow">
                                        <MdArrowOutward />
                                    </div>
                                    <div className="secondArrow">
                                        <MdArrowOutward />
                                    </div>
                                </div></a></li>
                            <li><a href="https://www.facebook.com/biatemper0800/" target="_blank" rel="noreferrer">Facebook
                                <div className="followarrowUplink">
                                    <div className="firstArrow">
                                        <MdArrowOutward />
                                    </div>
                                    <div className="secondArrow">
                                        <MdArrowOutward />
                                    </div>
                                </div></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <hr />
            <div className="footer_copyRight">
                <div className="copyright">
                    <ul>
                        <li className="font-Euro text-sm font-bold">Copyright © 2021-2024 CompetePro.</li>
                    </ul>
                </div>
                <div className="copyright">
                    <ul>
                        <li className="font-Euro text-sm font-bold">Privacy Policy</li>
                        <li className="font-Euro text-sm font-bold">Terms of Use</li>
                        <li className="font-Euro text-sm font-bold">Do not sell my data</li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer
