import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Box, TextField, Typography, Button } from "@mui/material"
import { styled } from '@mui/system'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from "dayjs";

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import AlunoConstancia from "../assets/alunoConstancia.jpg"
import "../components/PreMatricula/PreMatricula.css"

import { DataContext } from "../context/DataContext";

const BoxInputs = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "2rem"
});

const PreMatricula = () => {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [nomeResponsavelLegal, setNomeResponsavelLegal] = useState("");
    const [emailResponsavelLegal, setEmailResponsavelLegal] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");

    const { data, setDataContext } = useContext(DataContext);

    const setData = () => {
        setDataContext(
            {
                nomeCompleto: nomeCompleto,
                dataNascimento: dataNascimento,
                nomeResponsavelLegal: nomeResponsavelLegal,
                emailResponsavelLegal: emailResponsavelLegal,
                cep: cep,
                rua: rua,
                bairro: bairro,
                cidade: cidade,
            }
        );
    };

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
                        <TextField sx={{ width: "250px" }} id="NomeCompleto" label="Nome Completo" variant="outlined" onChange={(e) => setNomeCompleto(e.target.value)} />
                        <TextField sx={{ width: "250px" }} id="CEP" label="CEP" variant="outlined" onChange={(e) => setCep(e.target.value)} />
                    </BoxInputs>
                    <BoxInputs>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(e) => {
                                setDataNascimento(e.format())
                                console.log(e.format())
                            }} />
                        </LocalizationProvider>
                        <TextField sx={{ width: "250px" }} id="Rua" label="Rua" variant="outlined" onChange={(e) => setRua(e.target.value)} />
                    </BoxInputs>
                    <BoxInputs>
                        <TextField sx={{ width: "250px" }} id="NomeResponsavel" label="Nome do Responsável Legal" variant="outlined" onChange={(e) => setNomeResponsavelLegal(e.target.value)} />
                        <TextField sx={{ width: "250px" }} id="Bairro" label="Bairro" variant="outlined" onChange={(e) => setBairro(e.target.value)} />
                    </BoxInputs>
                    <BoxInputs>
                        <TextField sx={{ width: "250px" }} id="E-mailReponsavel" label="E-mail do Reponsável Legal" variant="outlined" onChange={(e) => setEmailResponsavelLegal(e.target.value)} />
                        <TextField sx={{ width: "250px" }} id="Cidade" label="Cidade" variant="outlined" onChange={(e) => setCidade(e.target.value)} />
                    </BoxInputs>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                        <Button sx={{ width: "80%", height: "3rem", backgroundColor: "#0D3162" }} variant="contained" endIcon={<NavigateNextRoundedIcon />} onClick={() => setData()}><Link className="link" to={"/pre-matricula-final"}>Proximo passo</Link></Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default PreMatricula;