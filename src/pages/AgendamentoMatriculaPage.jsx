import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, TextField, Typography, Button } from "@mui/material"
import AlunoConstancia from "../assets/alunoConstancia.jpg"
import { ptBR } from '@mui/x-date-pickers/locales';


const AgendamentoMatriculaPage = () => {
    return (
        <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={AlunoConstancia} alt="Aluno Constância" className="imagem" />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <TextField sx={{ width: "260px", marginBottom: '10px' }} id="NomeCompleto" label="Nome Completo" variant="outlined" onChange={(e) => setNomeCompleto(e.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDayjs} locale={ptBR}>
                    <DatePicker
                        label="Dia da matrícula"
                        onChange={(newValue) => setValue(newValue)}
                        renderInput={(params) => <TextField {...params} sx={{ marginBottom: '10px' }} />}
                        inputFormat="dd/MM/yyyy"
                    />
                    <TimePicker label="Horário da matrícula" sx={{ margin: '10px' }} />
                </LocalizationProvider>
                <Button variant="contained" sx={{ marginLeft: '0px', marginTop: '10px', backgroundColor: "#0D3162" }}> Finalizar Agendamento </Button>
            </Box>
        </Box>
    );
}

export default AgendamentoMatriculaPage;