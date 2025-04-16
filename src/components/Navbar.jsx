import React, { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav>
                <a className="Navbar-Logo" href="/">
                    <img
                        src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718650379/Quinn_Daisies_Blog/Asset_2_exyhed.png"
                        alt="Biitech Opportunity Platform"
                    />
                </a>

                <ul className="Navlink-Left">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/get-a-quote">Get Quotes</a></li>
                    <li><a href="/about-quinn-daisies-logistics">About Us</a></li>
                    <li><a href="/quinn-daisies-logistics-services">Our Service</a></li>
                </ul>

                <ul className="Navlink-Right">
                    <li><a href="/contact-quinn-daisies-logistics">Contact Us</a></li>
                    <li className="active"><a href="https://calendly.com/quinndaisies-info/meeting">Consultation</a></li>
                </ul>
            </nav>

            <div className="ResponsiveNavigation">
                <a className="Navbar-Logo" href="/">
                    <img
                        src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718650379/Quinn_Daisies_Blog/Asset_2_exyhed.png"
                        alt="Biitech Opportunity Platform"
                    />
                </a>

                <div className="ResponsiveNavigationControl" onClick={toggleMenu}>
                    {menuOpen ? (
                        <div className="ResponsiveIcons active">
                            <span className="material-symbols-outlined">close</span>
                        </div>
                    ) : (
                        <div className="ResponsiveIcons active">
                            <span className="material-symbols-outlined">menu</span>
                        </div>
                    )}
                </div>
            </div>

            <ul className={`responsiveMenuList ${menuOpen ? 'active' : ''}`}>
                <div className="MenuHeader">MENU</div>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/get-a-quote">Get Quotes</a></li>
                <li><a href="/about-quinn-daisies-logistics">About Us</a></li>
                <li><a href="/quinn-daisies-logistics-services">Our Service</a></li>
                <li><a href="/contact-quinn-daisies-logistics">Contact Us</a></li>
                <li><a href="https://calendly.com/quinndaisies-info/meeting">Consultation</a></li>
            </ul>
        </>
    );
}
