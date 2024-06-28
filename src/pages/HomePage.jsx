import '../App'
import Navbar from '../components/Navbar/Navbar';
import StudentImage from '../components/StudentImage/StudentImage';
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    const firstLink = {
        title: "PRÉ-MATRÍCULA",
        link: "pre-matricula"
    };
    const secondLink = {
        title: "FUNCIONÁRIO",
        link: "home-usuario"
    };

    return (
        <div>
            <Navbar firstLink={firstLink} secondLink={secondLink} />
            <StudentImage />
            <Footer />
        </div>
    );
};

export default HomePage;
