import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center'> 
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Resume
          </a>
        </div>
        <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url} key={img.url}>
              <img src={img.imgPath}/>
            </a>
          ))}
        </div>

        <div className='flex flex-col justify-center items-center'>
          <p className='text-center md:text-end'>
            © {new Date().getFullYear()} Rover Gutierrez. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer