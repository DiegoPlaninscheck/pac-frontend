import { Button, TextField, Box, RadioGroup, FormControlLabel, Radio } from "@mui/material";

import AlunoConstancia from "../assets/alunoConstancia.png"
import "../components/PreMatriculaFinal/PreMatriculaFinal.css"


const PreMatriculaFinal = () => {
    return (
        <>
            <div className="student-image-container">
                <img src={AlunoConstancia} alt="Aluno Constância" className="responsive-image" />
            </div>
            <h1>Pré-Matricula</h1>
            <div className="image">
                <Button
                    variant="contained"
                    component="label"
                >
                    Adicionar Imagem
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </div>
            <h1>Renda Familiar</h1>
            <div>
                <Box className="rendaFamliar">
                    <TextField sx={{ width: "300px" }} id="rendaFamiliar" label="Renda Familiar" variant="outlined" />
                </Box>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
                </RadioGroup>
            </div>
        </>
    )
}

export default PreMatriculaFinal;