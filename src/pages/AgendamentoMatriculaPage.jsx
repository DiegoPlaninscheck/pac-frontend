import { useContext, useEffect, useState } from 'react';
import AlunoConstancia from "../assets/alunoConstancia.jpg";

import axios from "../api/config";

import { Box, TextField, Typography, Button } from "@mui/material";

import { DataContext } from '../context/DataContext';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { ptBR } from '@mui/x-date-pickers/locales';


const AgendamentoMatriculaPage = () => {
    const [diaMatricula, setDiaMatricula] = useState("");
    const [horarioMatricula, setHorarioMatricula] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const { data, setDataContext } = useContext(DataContext);

    useEffect(() => {
        console.log(data);
        setNomeCompleto(data.nomeCompleto);
    }, [])

    const realizarAgendamento = () => {

        const agendamento = {
            nomeCompleto: nomeCompleto,
            diaMatricula: diaMatricula,
            horarioMatricula: horarioMatricula,
            idMatricula: data.idMatricula
        }

        // axios.post("/", agendamento, {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
    }

    return (
        <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={AlunoConstancia} alt="Aluno Constância" className="imagem" />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <TextField sx={{ width: "260px", marginBottom: '10px' }} id="NomeCompleto" label="Nome Completo" variant="outlined" defaultValue={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDayjs} locale={ptBR}>
                    <DatePicker
                        label="Dia da matrícula"
                        onChange={(date) => setDiaMatricula(data)}
                        renderInput={(params) => <TextField {...params} sx={{ marginBottom: '10px' }} />}
                        inputFormat="dd/MM/yyyy"
                    />
                    <TimePicker label="Horário da matrícula" sx={{ margin: '10px' }} onChange={(time) => setHorarioMatricula(time)} />
                </LocalizationProvider>
                <Button variant="contained" sx={{ marginLeft: '0px', marginTop: '10px', backgroundColor: "#0D3162" }} onClick={() => realizarAgendamento()}> Finalizar Agendamento </Button>
            </Box>
        </Box>
    );
}

export default AgendamentoMatriculaPage;