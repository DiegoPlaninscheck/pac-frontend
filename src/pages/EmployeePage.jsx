import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StudentImage from "../components/StudentImage/StudentImage";

const EmployeePage = () => {
    const firstLink = "VISUALIZAR PRÉ-MATRÍCULA";

    return (
        <div>
            <Navbar firstLink={firstLink} />
            <StudentImage />
            <Footer />
        </div>
    )
}

export default EmployeePage;