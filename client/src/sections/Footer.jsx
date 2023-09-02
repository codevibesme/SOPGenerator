import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
    return (
      <footer className='max-container'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <h3 className="text-4xl font-montserrat text-stone-50 font-bold">EFFIZIENT</h3>
            <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm text-stone-50'>
            Contact us, get assessed, get advise. Help us help you achieve your immigration dreams and succeed in Canada. We want the best for you. You succeed, we succeed
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon) => (
                <div
                  className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
  
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap '>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                  {section.title}
                </h4>
                <ul className="max-sm:gap-2">
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-stone-50 hover:text-slate-gray'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        <div className='flex justify-between text-white-400 mt-18 max-sm:flex-col max-sm:items-center max-sm:mt-10'>
          <div className='flex flex-1 justify-center items-center gap-5 font-montserrat cursor-pointer'>
            <p className="text-stone-50">&copy; 2023 Soham Malakar. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer text-stone-50'>Terms & Conditions</p>
        </div>
        </footer>
  );
};

export default Footer;