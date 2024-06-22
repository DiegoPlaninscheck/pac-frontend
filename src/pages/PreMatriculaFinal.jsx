import { Button, TextField, Box, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import { FileUpload } from 'primereact/fileupload';

import AlunoConstancia from "../assets/alunoConstancia.png"
import "../components/PreMatriculaFinal/PreMatriculaFinal.css"


const PreMatriculaFinal = () => {
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
                        <div className="card">
                            <FileUpload mode="advanced" name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Arraste e solte arquivos aqui para armazenar.</p>} />
                        </div>
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
                        <TextField sx={{ width: "80%" }} id="rendaFamiliar" label="Renda Familiar" variant="outlined" />
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", justifyContent: "center", justifyItems: "center", flexDirection: "column", marginBottom: "3rem" }}>
                        <Typography sx={{ fontFamily: "'Montserrat', sans-serif" }} variant="h6">Periodo escolar</Typography>
                        <RadioGroup
                            sx={{ width: "100%", display: "flex", justifyContent: "start", justifyItems: "center", flexDirection: "row" }}
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Matutino" control={<Radio sx={{ color: "#0D3162", '&.Mui-checked': { color: "#0D3162" } }} />} label="Matutino" />
                            <FormControlLabel value="Vespertino" control={<Radio sx={{ color: "#FFA500", '&.Mui-checked': { color: "#FFA500" } }} />} label="Vespertino" />
                            <FormControlLabel value="Integral" control={<Radio sx={{ color: "#FF0000", '&.Mui-checked': { color: "#FF0000" } }} />} label="Integral" />
                        </RadioGroup>
                    </Box>
                    <Box >
                        <Button sx={{ backgroundColor: "#0D3162" }} variant="contained">Realizar pré matricula</Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default PreMatriculaFinal;