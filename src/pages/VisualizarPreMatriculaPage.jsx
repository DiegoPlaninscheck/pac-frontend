import { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import TablePreMatricula from "../components/TablePreMatricula/TablePreMatricula";

import axios from "../api/config.js";

const VisualizarPreMatricula = () => {

    const [data, setData] = useState([
        {
            id: 1,
            numero_cadastro: 123,
            aluno: 'aluno 1',
            data_nascimento: '08/03/2005',
            resposavel: 'responsavel 1',
            telefone: '123456789',
            email: "diego@gmail.com",
        },
        {
            id: 2,
            numero_cadastro: 456,
            aluno: 'aluno 2',
            data_nascimento: '08/03/2005',
            resposavel: 'responsavel 2',
            telefone: '123456789',
            email: "gabriel@gmail.com",
        },
        {
            id: 3,
            numero_cadastro: 789,
            aluno: 'aluno 3',
            data_nascimento: '08/03/2005',
            resposavel: 'responsavel 3',
            telefone: '123456789',
            email: "eduarda@gmail.com",
        },
    ]);

    useEffect(() => {
        setData([
            {
                id: 1,
                numero_cadastro: 123,
                aluno: 'aluno 1',
                data_nascimento: '08/03/2005',
                resposavel: 'responsavel 1',
                telefone: '123456789',
                email: "diego@gmail.com",
            },
            {
                id: 2,
                numero_cadastro: 456,
                aluno: 'aluno 2',
                data_nascimento: '08/03/2005',
                resposavel: 'responsavel 2',
                telefone: '123456789',
                email: "gabriel@gmail.com",
            },
            {
                id: 3,
                numero_cadastro: 789,
                aluno: 'aluno 3',
                data_nascimento: '08/03/2005',
                resposavel: 'responsavel 3',
                telefone: '123456789',
                email: "eduarda@gmail.com",
            },
        ]);
    }, []);

    function exportToExcel() {
        console.log('Exporting to Excel');
        axios.post("/exportToExcel", data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => console.log(res));
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 1rem 0 1rem' }}>
                <Typography sx={{ fontFamily: "Montserrat" }} variant="h4" component="h1" gutterBottom>Visualizar Pré-Matrícula</Typography>
                <Button variant="contained" color="primary" onClick={() => exportToExcel()}>Export to Excel</Button>
            </Box >
            <TablePreMatricula data={data} />
        </>
    );
}

export default VisualizarPreMatricula;