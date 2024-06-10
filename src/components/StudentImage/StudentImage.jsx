import AlunoConstancia from '../../assets/alunoHome.png';
import './StudentImage.css';

const StudentImage = () => {
  return (
    <div className="student-image-container">
      <img src={AlunoConstancia} alt="Aluno Constância" className="responsive-image" />
    </div>
  );
};

export default StudentImage;
