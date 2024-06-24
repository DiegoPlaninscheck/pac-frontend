import { Link } from "react-router-dom";

import { Box, TextField, Typography, Button } from "@mui/material"
import { styled } from '@mui/system'

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import AlunoConstancia from "../assets/alunoConstancia.png"
import "../components/PreMatricula/PreMatricula.css"

const BoxInputs = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "2rem"
});

const PreMatricula = () => {
    return (
        <>
            <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
                <Box>
                    <img src={AlunoConstancia} alt="Aluno Constância" className="imagem" />
                </Box>
                <Box className="container-principal">
                    <Box sx={{ width: "80%", marginBottom: "3rem" }}>
                        <Typography sx={{ fontFamily: 'Montserrat' }} variant="h4">Pré-Matricula</Typography>
                    </Box>
                    <BoxInputs>
                        <TextField sx={{ width: "250px" }} id="NomeCompleto" label="Nome Completo" variant="outlined" />
                        <TextField sx={{ width: "250px" }} id="CEP" label="CEP" variant="outlined" />
                    </BoxInputs>
                    <BoxInputs>
                        <TextField sx={{ width: "250px" }} id="DataNascimento" label="Data de Nascimento" variant="outlined" />
                        <TextField sx={{ width: "250px" }} id="Rua" label="Rua" variant="outlined" />
                    </BoxInputs>
                    <BoxInputs>
                        <TextField sx={{ width: "250px" }} id="NomeResponsavel" label="Nome do Responsável Legal" variant="outlined" />
                        <TextField sx={{ width: "250px" }} id="Bairro" label="Bairro" variant="outlined" />
                    </BoxInputs>
                    <BoxInputs>
                        <TextField sx={{ width: "250px" }} id="E-mailReponsavel" label="E-mail do Reponsável Legal" variant="outlined" />
                        <TextField sx={{ width: "250px" }} id="Cidade" label="Cidade" variant="outlined" />
                    </BoxInputs>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                        <Button sx={{ width: "80%", height: "3rem", backgroundColor: "#0D3162" }} variant="contained" endIcon={<NavigateNextRoundedIcon />}><Link className="link" to={"/pre-matricula-final"}>Proximo passo</Link></Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default PreMatricula;