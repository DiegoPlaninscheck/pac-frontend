import alunoHome from '../../assets/alunoHome.jpg';
import './StudentImage.css';

const StudentImage = () => {
  return (
    <div className="student-image-container">
      <img src={alunoHome} alt="Aluno Constância" className="responsive-image" />
    </div>
  );
};

export default StudentImage;
