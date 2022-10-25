import './style.scss';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer1">
                    <div className="our_store">
                        <div className="title">
                            <h4>OUR STORE</h4>
                        </div>
                        <div className="content formatText">
                            We promise we'll get back to you promply - Your  gifting needs are always on our minds!
                        </div>
                        <div className="times">Monday - Friday 8am - 6pm pts</div>
                    </div>
                    <div className="info_service">
                        <div className="infomation">
                            <div className="title">
                                <h4>INFOMATION</h4>
                            </div>
                            <ul className="list_info formatText">
                                <li className="text">My account</li>
                                <li className="text">Track Orders</li>
                                <li className="text">Reminder Service</li>
                                <li className="text">Shipping & Returns</li>
                                <li className="text">Sign Up</li>
                            </ul>

                        </div>
                        <div className="services">
                            <div className="title">
                                <h4>SERVICES</h4>
                            </div>
                            <ul className="list_info formatText">
                                <li className="text">Size Charts</li>
                                <li className="text">Contact Us</li>
                                <li className="text">How To Order</li>
                                <li className="text">FAQ</li>
                                <li className="text">Size Charts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="newsletter">
                        <div className="title">
                            <h4>NEWSLETTER SIGN-UP</h4>
                        </div>
                        <div className="formatText">
                            <div className="text">For News & Special Offers</div>
                            <div className="formsubmit">
                                <input type="text" className='inputSubmit' placeholder='email@gifymo.com' />
                                <button className='btnSubmit'>
                                    <span>Submit</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer2">
                    <div className="copyright">
                        <div className="contents">
                            <div className="noidung ">Copyright© 2021 </div>
                            <a href="#">Gifymo.</a>
                        </div>
                        <div className="allright ">All Rights Reserved.</div>
                    </div>
                    <div className="iconlk">
                        <a href="#">
                            <FaFacebookF className='colorIcon' />
                        </a>
                        <a href="#">
                            <GrInstagram className='colorIcon' />

                        </a>
                        <a href="#">
                            <FaTwitter className='colorIcon' />

                        </a>
                        <a href="#">
                            <FaPinterestP className='colorIcon' />

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer