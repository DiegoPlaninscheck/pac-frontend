import { Box, TextField } from "@mui/material"
import AlunoConstancia from "../assets/alunoConstancia.png"
import "../components/PreMatricula/PreMatricula.css"


const PreMatricula = () => {
    return (
        <>
            <div className="student-image-container">
                <img src={AlunoConstancia} alt="Aluno Constância" className="responsive-image" />
            </div>
            <h1>Pré Matricula</h1>
            <Box className="containerPrincipal">
                <TextField sx={{ width: "300px" }} id="NomeCompleto" label="Nome Completo" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="CEP" label="CEP" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="DataNascimento" label="Data de Nascimento" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="Rua" label="Rua" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="NomeResponsavel" label="Nome do Responsavel Legal" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="Bairro" label="Bairro" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="E-mailReponsavel" label="E-mail do reponsavel legal" variant="outlined" />
                <TextField sx={{ width: "300px" }} id="E-mailReponsavel" label="E-mail do reponsavel legal" variant="outlined" />
            </Box>
        </>
    )
}


export default PreMatricula;