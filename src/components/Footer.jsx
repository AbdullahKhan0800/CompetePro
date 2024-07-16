import React, { useState } from "react"
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import '../assets/css/footer.css'

function Footer() {
    const [inputvalue, setinputvalue] = useState('')
    return (
        <footer className="container">
            <div className="border-black border-b border-solid border-opacity-20 mt-10">
                <div className="newsletter container flex text-center justify-center items-center flex-col gap-5" data-aos="fade-up">
                    <h4 className=" text-[#1c72b8]">To keep up to date with all the latest news, advice and jobs</h4>
                    <p>Please sign up to the bigfolio email newsletter.</p>
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
                <div className="navigations grid grid-cols-4 py-16 gap-10" data-aos="fade-up">
                    <div className="nav border-black pt-10 border-t border-solid border-opacity-20">
                        <div className="footer-heading">Legal</div>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li>Terms of Use</li>
                            <li>Do not sell my data</li>
                        </ul>
                    </div>
                    <div className="nav border-black pt-10 border-t border-solid border-opacity-20">
                        <div className="footer-heading">Company</div>
                        <ul>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#our-work">Our work</a></li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="nav border-black pt-10 border-t border-solid border-opacity-20">
                        <div className="footer-heading">Resources</div>
                        <ul>
                            <li>Blog</li>
                            <li><a href="#our-customer">Customer stories</a></li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="nav border-black pt-10 border-t border-solid border-opacity-20">
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
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/bigfolio">LinkedIn
                                <div className="followarrowUplink">
                                    <div className="firstArrow">
                                        <MdArrowOutward />
                                    </div>
                                    <div className="secondArrow">
                                        <MdArrowOutward />
                                    </div>
                                </div></a></li>
                            <li><a href="https://www.facebook.com/bigfolio.co" target="_blank" rel="noreferrer">Facebook
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
            </div>
            <hr />
            <div className="footer_copyRight">
                <div className="copyright">
                    <ul>
                        <li className="font-Euro text-sm font-bold">Copyright © 2021-2024 Bigfolio.</li>
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
        </footer>
    )
}

export default Footer
