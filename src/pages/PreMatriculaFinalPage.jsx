import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Button, TextField, Box, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import { FileUpload } from 'primereact/fileupload';

import AlunoConstancia from "../assets/alunoConstancia.png"
import "../components/PreMatriculaFinal/PreMatriculaFinal.css"

import { DataContext } from "../context/DataContext";

import axios from "../api/config";

const PreMatriculaFinal = () => {
    const [fotoAluno, setFotoAluno] = useState("");
    const [rendaFamiliar, setRendaFamiliar] = useState("");
    const [periodoEscolar, setPeriodoEscolar] = useState("");
    const { data, setDataContext } = useContext(DataContext);

    useEffect(() => console.log(data), []);

    const criarEndereco = async () => {
        const endereco = {
            cep: data.cep,
            rua: data.rua,
            bairro: data.bairro,
            cidade: data.cidade
        };

        const result = await axios.post("/address", endereco, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return result.data[0].idEndereco;
    };

    const realizarPreMatricula = async () => {
        const preMatricula = {
            nomeCompleto: data.nomeCompleto,
            dataNascimento: data.dataNascimento,
            nomeResponsavelLegal: data.nomeResponsavelLegal,
            emailResponsavelLegal: data.emailResponsavelLegal,
            fotoAluno: fotoAluno[0],
            rendaFamiliar: rendaFamiliar,
            periodoEscolar: periodoEscolar,
            idEndereco: await criarEndereco()
        }

        console.log(preMatricula);

        axios.post("/registration", preMatricula, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    return (
        <>
            <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
                <Box>
                    <img src={AlunoConstancia} alt="Aluno Constância" className="imagem" />
                </Box>
                <Box className="container-principal">
                    <Box sx={{ width: "80%", marginBottom: "3rem" }}>
                        <Typography sx={{ fontFamily: "'Montserrat', sans-serif" }} variant="h4">Pré-Matricula</Typography>
                    </Box>
                    <Box sx={{ marginBottom: "3rem" }}>
                        {/* <div className="card">
                            <FileUpload onSelect={(e) => setFotoAluno(e.files)} mode="advanced" name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Arraste e solte arquivos aqui para armazenar.</p>} />
                        </div> */}
                        {/* <Button
                            variant="contained"
                            component="label"
                        >
                            Adicionar Imagem
                            <input
                                type="file"
                                hidden
                            />
                        </Button> */}
                    </Box>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "3rem" }}>
                        <TextField sx={{ width: "80%" }} id="rendaFamiliar" label="Renda Familiar" variant="outlined" onChange={(e) => setRendaFamiliar(e.target.value)} />
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", justifyContent: "center", justifyItems: "center", flexDirection: "column", marginBottom: "3rem" }}>
                        <Typography sx={{ fontFamily: "'Montserrat', sans-serif" }} variant="h6">Periodo escolar</Typography>
                        <RadioGroup
                            sx={{ width: "100%", display: "flex", justifyContent: "start", justifyItems: "center", flexDirection: "row" }}
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={(e) => setPeriodoEscolar(e.target.value)}
                        >
                            <FormControlLabel value="Matutino" control={<Radio sx={{ color: "#0D3162", '&.Mui-checked': { color: "#0D3162" } }} />} label="Matutino" />
                            <FormControlLabel value="Vespertino" control={<Radio sx={{ color: "#FFA500", '&.Mui-checked': { color: "#FFA500" } }} />} label="Vespertino" />
                            <FormControlLabel value="Integral" control={<Radio sx={{ color: "#FF0000", '&.Mui-checked': { color: "#FF0000" } }} />} label="Integral" />
                        </RadioGroup>
                    </Box>
                    <Box >
                        <Button sx={{ backgroundColor: "#0D3162" }} variant="contained" onClick={() => realizarPreMatricula()}><Link className="link" to={"/home-usuario"}>Realizar pré matricula</Link> </Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default PreMatriculaFinal;