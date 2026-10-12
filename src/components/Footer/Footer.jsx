import { Link } from 'react-router-dom';
import './Footer.css';

const navigation = [
    { label: 'Home', to: '/' },
    { label: 'Works', to: '/works' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__header">
                    <span className="site-footer__mark">dHb</span>
                    <span className="site-footer__status">Available for selected projects</span>
                </div>

                <div className="site-footer__body">
                    <p className="site-footer__prompt">Have a project in mind?</p>
                    <a className="site-footer__email" href="mailto:bsgun97@gmail.com">
                        bsgun97@gmail.com
                    </a>
                </div>

                <div className="site-footer__bottom">
                    <nav className="site-footer__nav" aria-label="Footer navigation">
                        {navigation.map((item) => (
                            <Link key={item.to} to={item.to}>{item.label}</Link>
                        ))}
                    </nav>

                    <a
                        className="site-footer__telegram"
                        href="https://t.me/bhn_Dmtr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Telegram
                    </a>

                    <span className="site-footer__copyright">© {year}</span>
                </div>
            </div>
        </footer>
    );
}
