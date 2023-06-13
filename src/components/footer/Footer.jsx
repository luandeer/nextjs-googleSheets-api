import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Image from "next/image";
import logo from '../../../public/image/logo.png'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer-distributed">
            <Image src={logo} alt="logo" priority/>
            <div className="footer-right">

                <a href="https://www.facebook.com/Sonquoficial" target="_blank"><FaFacebookF/></a>
                <a href="https://www.tiktok.com/@sonquoficial" target="_blank"><FaTiktok/></a>
                <a href="https://www.youtube.com/@sonqu" target="_blank"><FaYoutube/></a>
                <a href="https://www.instagram.com/sonqu.oficial/" target="_blank"><FaInstagram/></a>

            </div>

            <div className="footer-left">
                
                <p className="footer-links">
                    <Link className="link-1" href="/">Inicio</Link>

                    <Link href="/subscribe">Suscríbete</Link>

                    <Link href="/beneficios">Beneficios</Link>

                    <a href="https://api.whatsapp.com/send?phone=51938091040&text=Hola,%20sonqu.%20Te%20escribo%20desde%20tu%20sitio%20web..." target="_blank">Horario de atención Whatsapp(9am-6pm)</a>
                </p>

                <p> copyright &copy; 2023 | Telmo P.</p>
            </div>

        </footer>
    )
}

export default Footer
