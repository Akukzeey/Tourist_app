import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaSnapchat} from "@react-icons/all-files/fa/FaSnapchat";


function Footer() {
    return(
        <div className='footer row'>
            <div className='footer-1 col' style={{marginLeft:'20px'}}>
                <h3><span>Farouk</span>Travels</h3>
                <p>Find the best destinations to have the best ascendancy</p>
            </div>
            <div className='footer-2 col'>
                <ul>
                    <li>About</li>
                    <li>Docs</li>
                </ul>
            </div>
            <div className='footer-3 col'>
                <ul>
                    <li>About</li>
                    <li>Docs</li>
                </ul>
            </div>
            <div className='footer-4 col'>
                <ul>
                    <li>lets chat</li>
                    <li>thiagoacookie@gmail.com</li>
                </ul>
                <div>
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaSnapchat/>
                </div>
            </div>
        </div>
    )
}

export default Footer