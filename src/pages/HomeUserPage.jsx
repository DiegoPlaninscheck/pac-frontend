import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StudentImage from "../components/StudentImage/StudentImage";

const HomeUserPage = () => {
    const firstLink = {
        title: "VISUALIZAR PRÉ-MATRÍCULA",
        link: "visualizar-pre-matricula"
    };

    return (
        <div>
            <Navbar firstLink={firstLink} secondLink={""} />
            <StudentImage />
            <Footer />
        </div>
    )
}

export default HomeUserPage;