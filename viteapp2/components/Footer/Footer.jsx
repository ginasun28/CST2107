// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-white">
            <h4 className='quick-links'>Quick Links</h4>
            <ul className='fnav-container-1'>
                <li className='fnav-item'>
                    Home
                </li>
                <li className='fnav-item'>
                    About
                </li>
                <li className='fnav-item'>
                    Service
                </li>
                <li className='fnav-item'>
                    Contact
                </li>
            </ul>
            <ul className='fnav-container-2'>
                <li className='fnav-item-2'>
                    <a href=""><img className='facebook' width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" /></a>
                </li>
                <li className='fnav-item-2'>
                    <a href=""><img className='twitter' width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter" /></a>
                </li>
                <li className='fnav-item-2'>
                    <a href=""><img className='instagram' width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" /></a>
                </li>
                <li className='fnav-item-2'>
                    <a href=""><img className='github' width="64" height="64" src="https://img.icons8.com/sf-black-filled/64/github.png" alt="github" /></a>
                </li>
            </ul>
            <hr />
            <div className="copyright">
                © 2023 Copyright:
                <a className="text-white" href="#">ViteApp2</a>
            </div>
        </footer>
    )
}

export default Footer;
