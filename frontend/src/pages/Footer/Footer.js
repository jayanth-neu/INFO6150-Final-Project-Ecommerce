import React, { useState } from "react";
import {FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input, Stack, Button } from "@chakra-ui/react";
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const [email, setemail] = useState("");
    let isEmail = false;

    function ValidateEmail(email) {
        console.log("In validation");
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          isEmail = true;
        }
      }
    
      function handleSubscribe() {
        console.log("In handlesubs");
        ValidateEmail(email);
        console.log(isEmail);
        if (isEmail == true) {
          alert("You have successfully subscribed");
        } else {
          alert("Please enter a valid email");
        }
      }

    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Women'>Women</Link></li>
                        <li><Link to = '/shop/?cg=Men'>Men</Link></li>
                        <li><Link to = '/shop/?cg=Accessories'>Accessories</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Track Order</li>
                        <li>Track Returns</li>
                        <li>Track Shipping</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Any queries?</h1>
                    <ul>
                        <li><Link to=''>Contact Us: (857)345-8097</Link></li>
                        <li><Link to=''>Email Us: lifestylefashion@gmail.com</Link></li>
                        <li><Link to=''>Address: 124 Brook street, Boston, MA, 02116</Link></li>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
          <h1>Newsletter</h1>
          <ul>
            <li>
              <Stack spacing={3}>
                <Input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  placeholder="Your Email Address"
                />
              </Stack>
            </li>
            <li>
              <Button onClick={handleSubscribe} className="footerBtn">
                Subscribe
              </Button>
            </li>
          </ul>
        </div>

                <div className="creditsIcons">
                    <ul>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img1"/></li>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img2" /></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" /></li>
                        <li><img src="https://i.imgur.com/IDHC2iv.png" className="img4" /></li>
                    </ul>
                    
                </div>
                
                <div className="paragraphFooter"><p>Copyright ©2022 All rights reserved.</p>
                <p>Jayanth | Yashwanth | Akshay | Sai Meghana</p>
                </div>



            </footer>

        </div>
    )
}

export default Footer;
