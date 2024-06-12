import { Button, TextField, Typography } from '@mui/material';
import AlunoConstancia from '../../assets/alunoConstancia.png';
import "./StudentRegister.css";

const StudentRegister = () => {
    return (
        <>
            <div className="box-cadastro">
                <div>
                    <img src={AlunoConstancia} alt="Aluno Constância" className="imagem" />
                </div>

                <div className='container-cadastro'>
                    <Typography sx={{ marginBottom: "2rem", fontFamily: 'Montserrat' }} variant='h4'>Cadastro de usuário</Typography>

                    <div className='container-usuario'>
                        <TextField sx={{ width: "300px" }} id="usuario" label="Usuário" variant="outlined" />
                    </div>

                    <div className='container-senha'>
                        <TextField sx={{ width: "300px" }} id="senha" label="Senha" variant="outlined" />
                    </div>

                    <div>
                        <Button sx={{ backgroundColor: "#0D3162" }} variant='contained'>Realizar cadastro</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentRegister;