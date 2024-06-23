import '../App'
import Navbar from '../components/Navbar/Navbar';
import StudentImage from '../components/StudentImage/StudentImage';
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <StudentImage />
            <Footer />
        </div>
    );
};

export default HomePage;
