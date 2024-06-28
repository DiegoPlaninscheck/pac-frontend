import { Link } from 'react-router-dom';

import { styled } from '@mui/system'
import { Button, TextField, Typography, Box } from '@mui/material';

import AlunoConstancia from '../../assets/alunoConstancia.jpg';
import "./UserRegister.css";

const BoxInputs = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem"
});

const UserRegister = () => {
    return (
        <>
            <Box className="box-cadastro">
                <Box>
                    <img src={AlunoConstancia} alt="Aluno Constância" className="imagem" />
                </Box>

                <Box className='container-cadastro'>
                    <Typography sx={{ marginBottom: "2rem", fontFamily: 'Montserrat' }} variant='h4'>Cadastro de usuário</Typography>

                    <BoxInputs className='container-usuario'>
                        <TextField sx={{ width: "80%" }} id="usuario" label="Usuário" variant="outlined" />
                    </BoxInputs>

                    <BoxInputs className='container-senha'>
                        <TextField sx={{ width: "80%" }} id="senha" label="Senha" variant="outlined" />
                    </BoxInputs>

                    <BoxInputs>
                        <Link to="/home-usuario" style={{ textDecoration: 'none', width: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button sx={{ backgroundColor: "#0D3162", width: "80%" }} variant='contained'>
                                Realizar cadastro
                            </Button>
                        </Link>
                    </BoxInputs>
                </Box>
            </Box>
        </>
    )
}

export default UserRegister;