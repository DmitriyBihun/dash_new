import React, { useCallback, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';
import ContactSidebar from '../ContactSidebar/ContactSidebar';
import { navRoutes } from '../../data/router/routes';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-[#ebebeb]/40 border-b border-[#1B1A1F]/5">

                <div className="max-w-[1362px] mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold tracking-tight">dHb</Link>

                    <nav className="flex items-center gap-3 text-sm uppercase">
                        {navRoutes.map((route, index) => (
                            <React.Fragment key={route.path}>
                                {index > 0 && <span className="text-[#1B1A1F]/30">/</span>}
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        `transition-all ${isActive ? ' text-[#1B1A1F] underline underline-offset-4' : 'text-[#1B1A1F]/60 hover:text-[#1B1A1F]'}`
                                    }
                                >
                                    {route.label}
                                </NavLink>
                            </React.Fragment>
                        ))}
                    </nav>

                    <button
                        type="button"
                        className="group flex items-center gap-1.5 text-sm uppercase text-[#1B1A1F] underline underline-offset-4 decoration-[#1B1A1F]/60 hover:no-underline transition-all cursor-pointer"
                        onClick={() => setIsMenuOpen(true)}
                        aria-expanded={isMenuOpen}
                        aria-controls="contact-sidebar"
                    >
                        Contacts
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z" />
                        </svg>
                    </button>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <ContactSidebar onClose={closeMenu} />
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;