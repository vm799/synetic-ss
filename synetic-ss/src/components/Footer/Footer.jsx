import React from "react";
import "../Footer/Footer.css"


export default function Footer(){
  
    return (
    // <footer class="footer">
    //     <a href="sinistersouls2922@gmail.com" class="footer__link">sinistersouls2922@gmail.com</a>
    //     <ul class="social-list">
    //         <li class="social-list__item">
    //             <a class="social-list__link" href="https://twitter.com/_sinister_souls">
    //                 <i class="fab fa-github"></i>
    //             </a></li>
    //             <li class="social-list__item">
    //                 <a class="social-list__link" href="https://twitter.com/_sinister_souls">
    //                     <i class="fab fa-linkedin"></i>
    //                 </a></li>
    //                 <li class="social-list__item">
    //                     <a class="social-list__link" href="https://twitter.com/_sinister_souls">
    //                         <i class="fab fa-instagram"></i>
    //                     </a></li>
                       
    //     </ul>
      
    // </footer>
    
    <footer className="footer">
    <div className="reveal container">
      <a href="#"> 
        <h3 className="footer__logo" width='100px' height="100px">Sinister Souls</h3>
        
    </a>

      <div className="footer__social">
        {/* <a href="#">
            <i class="fa 
            fa-facebook" alt="facebook"></i>
        </a>

        <a href="#" class="fa fa-pinterest" alt="pinterest" ></a> */}

        <a href="#">
           <i className="fab fa-brands fa-discord" 
           alt="discord">
             </i>JOIN US
        </a>
        
        <a href="#">
          <i className="fab 
          fa-brands fa-twitter" 
          alt="twitter">
            </i>FOLLOW US
        </a>
        
      </div>

      <div className="footer__links col1">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>

      <div className="footer__links col2">
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
      </div>

      {/* <div class="footer__cta">
        <a href="#" class="button">Request Invite</a>
      </div> */}

      
    </div>
   
    <div className="footer__copyright">
        &copy; Sinister Souls. All Rights Reserved.
        <a href="https://www.flaticon.com/free-icons/open-menu" 
        title="open-menu icons">Open-menu icons created by bqlqn - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/x" title="x icons">X icons created by Stockio - Flaticon</a>
      </div>
    <div className="attribution">
      <a href="#">Coded by PinkPistachioButterfly</a>.
      
    </div>
  </footer>)
 
}