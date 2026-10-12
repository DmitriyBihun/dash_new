import { useEffect } from 'react';
import { motion } from 'motion/react';
import './ContactSidebar.css';

const menuVariants = {
    initial: { x: 'calc(100% + 96px)' },
    animate: {
        x: 0,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        x: 'calc(100% + 96px)',
        transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
    },
};

const curveVariants = {
    initial: { d: 'M96 0 L96 1000 Q-96 500 96 0' },
    animate: {
        d: 'M96 0 L96 1000 Q96 500 96 0',
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        d: 'M96 0 L96 1000 Q-96 500 96 0',
        transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
    },
};

const contacts = [
    { label: '01', value: '+380989710930', href: 'tel:+380989710930' },
    { label: '02', value: '@bhn_Dmtr', href: 'https://t.me/bhn_Dmtr', isExternal: true },
    { label: '03', value: 'bsgun97@gmail.com', href: 'mailto:bsgun97@gmail.com' },
];

export default function ContactSidebar({ onClose }) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="contact-sidebar" role="dialog" aria-modal="true" aria-label="Contact panel">
            <motion.button
                type="button"
                className="contact-sidebar__backdrop"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={onClose}
            />

            <motion.aside id="contact-sidebar" className="contact-sidebar__panel" variants={menuVariants} initial="initial" animate="animate" exit="exit">
                <svg className="contact-sidebar__curve" viewBox="0 0 96 1000" preserveAspectRatio="none" aria-hidden="true">
                    <motion.path className="contact-sidebar__curve-path" variants={curveVariants} initial="initial" animate="animate" exit="exit" />
                </svg>

                <div className="contact-sidebar__content">
                    <div className="contact-sidebar__topbar">
                        <p className="contact-sidebar__eyebrow">dHb</p>
                        <button type="button" className="contact-sidebar__close" onClick={onClose} aria-label="Close menu">
                            <span />
                            <span />
                        </button>
                    </div>

                    <div className="contact-sidebar__contacts" aria-label="Contact details">
                        <motion.p
                            className="contact-sidebar__title"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ delay: 0.12, duration: 0.35 }}
                        >
                            Contacts
                        </motion.p>
                        <div className="contact-sidebar__contact-list">
                            {contacts.map((contact, index) => (
                                <motion.a
                                    className="contact-sidebar__contact"
                                    key={contact.label}
                                    href={contact.href}
                                    target={contact.isExternal ? '_blank' : undefined}
                                    rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, x: 28 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 18 }}
                                    transition={{ delay: 0.16 + index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <span className="contact-sidebar__index">{contact.label}</span>
                                    <span>{contact.value}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.aside>
        </div>
    );
}
