import { AnimatePresence } from 'motion/react';
import { useLocation, useOutlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageTransition from '../components/Transition/PageTransition';

export default function MainLayout() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <div className="min-h-screen flex flex-col relative">
            <Header />

            <main className="flex-grow w-full max-w-[1362px] mx-auto px-4 flex flex-col">
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        {outlet}
                    </PageTransition>
                </AnimatePresence>
            </main>

            {location.pathname !== '/' && <Footer />}
        </div>
    );
}
