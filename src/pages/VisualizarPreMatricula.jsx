import { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import TablePreMatricula from "../components/TablePreMatricula/TablePreMatricula";

import axios from "../api/config.js";

const VisualizarPreMatricula = () => {

    const [data, setData] = useState([
        {
            id: 1,
            numeroCadastro: 123,
            aluno: 'aluno 1',
            nascimento: '08/03/2005',
            resposavel: 'responsavel 1',
            telefone: '123456789',
            email: "diego@gmail.com",
        },
        {
            id: 2,
            numeroCadastro: 456,
            aluno: 'aluno 2',
            nascimento: '08/03/2005',
            resposavel: 'responsavel 2',
            telefone: '123456789',
            email: "gabriel@gmail.com",
        },
        {
            id: 3,
            numeroCadastro: 789,
            aluno: 'aluno 3',
            nascimento: '08/03/2005',
            resposavel: 'responsavel 3',
            telefone: '123456789',
            email: "eduarda@gmail.com",
        },
    ]);

    useEffect(() => {
        setData([
            {
                id: 1,
                numeroCadastro: 123,
                aluno: 'aluno 1',
                nascimento: '08/03/2005',
                resposavel: 'responsavel 1',
                telefone: '123456789',
                email: "diego@gmail.com",
            },
            {
                id: 2,
                numeroCadastro: 456,
                aluno: 'aluno 2',
                nascimento: '08/03/2005',
                resposavel: 'responsavel 2',
                telefone: '123456789',
                email: "gabriel@gmail.com",
            },
            {
                id: 3,
                numeroCadastro: 789,
                aluno: 'aluno 3',
                nascimento: '08/03/2005',
                resposavel: 'responsavel 3',
                telefone: '123456789',
                email: "eduarda@gmail.com",
            },
        ]);
    }, []);

    function exportToExcel() {
        console.log('Exporting to Excel');
        axios.post("/registration/exportToExcel", {
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        });
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