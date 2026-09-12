import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-white-200  p-10 mt-20">
        <aside>
          <img src={FooterLogo} alt="" />
          <p>
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
           
          </p>
          <div className="flex gap-2 mt-2 list-none">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title font-bold">PRODUCT</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Projects</a>
        
        </nav>
        <nav>
          <h6 className="footer-title  font-bold">COMPANY</h6>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        
        </nav>
        <nav>
          <h6 className="footer-title  font-bold">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Service</a>
       
        </nav>
       
    
      </footer>
     <hr className="my-4 border-t border-gray-300" />
     <div className="flex justify-between">
            <p >© 2026 Dev Stack. All rights reserved.</p>
     <div className="flex gap-4">
        <p>Privacy</p>
     <p>Terms</p>
     </div>
     </div>
    </div>
  );
};

export default Footer;
