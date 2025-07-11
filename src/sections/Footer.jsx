import { socialImgs } from "../constants";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col justify-center md:items-center">
            <a href="https://github.com/RICHARDKHRISTI">Peek at my Github</a>
          </div>
          <div className="socials">
            {socialImgs.map((socialImg, index) => (
                <a
                    key={index}
                    href={socialImg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                >
                  <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                </a>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
              © {new Date().getFullYear()} Richard K. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;