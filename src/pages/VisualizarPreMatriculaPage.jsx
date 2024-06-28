import { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import TablePreMatricula from "../components/TablePreMatricula/TablePreMatricula";

import axios from "../api/config.js";

const VisualizarPreMatricula = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/registration/registrationAddress").then((res) => {
            for (let item of res.data) {
                item.dataNascimento = item.dataNascimento.split("T")[0]
            }
            setData(res.data)
        });
    }, []);

    // function exportToExcel() {
    //     console.log('Exporting to Excel');
    //     axios.post("/exportToExcel", data, {
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     }).then((res) => console.log(res));
    // }

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