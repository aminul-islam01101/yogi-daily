import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
    // card animator
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="bg-gray-50">
            <Home />
            <Footer />
        </div>
    );
};

export default App;
