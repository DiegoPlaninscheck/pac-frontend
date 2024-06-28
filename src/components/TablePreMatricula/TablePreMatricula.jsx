import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from "../../api/config";

import { DataGrid } from '@mui/x-data-grid';

import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import dayjs from 'dayjs';

const BoxInputs = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "2rem"
});

const TablePreMatricula = (props) => {
    const [open, setOpen] = useState(false);
    const [idAtual, setIdAtual] = useState(-1);

    const rows = props.data ? [...props.data] : [];

    const columns = [
        {
            field: 'idMatricula',
            headerName: 'ID Matrícula',
            width: 90,
        },
        {
            field: 'nomeCompleto',
            headerName: 'Nome completo',
            width: 150,
            editable: false,
        },
        {
            field: 'dataNascimento',
            headerName: 'Data Nascimento',
            width: 150,
            editable: true,
        },
        {
            field: 'nomeResponsavelLegal',
            headerName: 'Nome Responsável Legal',
            width: 150,
            editable: true,
        },
        {
            field: 'emailResponsavelLegal',
            headerName: 'Email Responsável Legal',
            width: 150,
            editable: true,
        },
        {
            field: 'rendaFamiliar',
            headerName: 'Renda Familiar',
            width: 150,
            editable: true,
        },
        {
            field: 'periodoEscolar',
            headerName: 'Período Escolar',
            width: 150,
            editable: true,
        },
        {
            field: 'idEndereco',
            headerName: 'ID Endereco',
            width: 150,
            editable: false,
        },
        {
            field: 'cep',
            headerName: 'CEP',
            width: 150,
            editable: false,
        },
        {
            field: 'cidade',
            headerName: 'Cidade',
            width: 150,
            editable: false,
        },
        {
            field: 'bairro',
            headerName: 'Bairro',
            width: 150,
            editable: false,
        },
        {
            field: 'rua',
            headerName: 'Rua',
            width: 150,
            editable: false,
        },
        {
            field: "edit",
            headerName: "Editar",
            width: 100,
            renderCell: (params) => {
                return (
                    <EditRoundedIcon id={`modal-id-matricula-${params.row.idMatricula}`} onClick={() => {
                        setIdAtual(params.row.idMatricula);
                        setOpen(true)
                    }} />
                );
            },
        },
        {
            field: "delete",
            headerName: "Deletar",
            width: 100,
            renderCell: (params) => {
                return (
                    <DeleteForeverRoundedIcon id={`delete-id-matricula-${params.row.idMatricula}`} onClick={() => {
                        axios.delete(`/registration/${params.row.idMatricula}`);
                        window.location.reload();
                    }} />
                );
            },
        }
    ];

    const handleClose = () => {
        setOpen(false);
    }

    const ModalEdit = (props) => {
        const data = rows.find((row) => row.idMatricula === props.id);
        console.log(data);

        const [nomeCompleto, setNomeCompleto] = useState(data.nomeCompleto);
        const [dataNascimento, setDataNascimento] = useState(data.dataNascimento);
        const [nomeResponsavelLegal, setNomeResponsavelLegal] = useState(data.nomeResponsavelLegal);
        const [emailResponsavelLegal, setEmailResponsavelLegal] = useState(data.emailResponsavelLegal);
        const [periodoEscolar, setPeriodoEscolar] = useState(data.periodoEscolar);
        const [rendaFamiliar, setRendaFamiliar] = useState(data.rendaFamiliar);
        const [cep, setCep] = useState(data.cep);
        const [rua, setRua] = useState(data.rua);
        const [bairro, setBairro] = useState(data.bairro);
        const [cidade, setCidade] = useState(data.cidade);

        const preMatriculaEdit = {
            nomeCompleto: nomeCompleto,
            dataNascimento: dataNascimento,
            nomeResponsavelLegal: nomeResponsavelLegal,
            emailResponsavelLegal: emailResponsavelLegal,
            periodoEscolar: periodoEscolar,
            rendaFamiliar: rendaFamiliar,
            idEndereco: data.idEndereco
        }

        const enderecoEdit = {
            cep: cep,
            rua: rua,
            bairro: bairro,
            cidade: cidade
        }

        console.log(preMatriculaEdit);
        console.log(enderecoEdit);

        const editPreMatricula = () => {
            axios.put(`/registration/${data.idMatricula}`, preMatriculaEdit, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            axios.put(`/address/${data.idEndereco}`, enderecoEdit, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        return (
            <>
                <Box sx={{ width: "80vw", height: "80vh" }}>
                    <Modal
                        sx={{ width: "100%", height: "auto", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}
                        id="modal"
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <>
                            <Box sx={{ width: "80vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "#fff", borderRadius: "1rem" }}>
                                <Box sx={{ width: "80%", marginBottom: "3rem" }}>
                                    <Typography sx={{ fontFamily: 'Montserrat' }} variant="h4">Edição Pré-Matricula</Typography>
                                </Box>
                                <BoxInputs>
                                    <TextField sx={{ width: "250px" }} id="NomeCompleto" label="Nome Completo" variant="outlined" defaultValue={data.nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
                                    <TextField sx={{ width: "250px" }} id="CEP" label="CEP" variant="outlined" defaultValue={data.cep} onChange={(e) => setCep(e.target.value)} />
                                </BoxInputs>
                                <BoxInputs>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker defaultValue={dayjs(data.dataNascimento)} onChange={(e) => {
                                            let date = e.format().split("T")[0];
                                            setDataNascimento(date);
                                            console.log(date);
                                        }} />
                                    </LocalizationProvider>
                                    <TextField sx={{ width: "250px" }} id="Rua" label="Rua" variant="outlined" defaultValue={data.rua} onChange={(e) => setRua(e.target.value)} />
                                </BoxInputs>
                                <BoxInputs>
                                    <TextField sx={{ width: "250px" }} id="PeriodoEscolar" label="Periodo Escolar" variant="outlined" defaultValue={data.periodoEscolar} onChange={(e) => setPeriodoEscolar(e.target.value)} />
                                    <TextField sx={{ width: "250px" }} id="RendaFamiliar" label="Renda Familiar" variant="outlined" defaultValue={data.rendaFamiliar} onChange={(e) => setRendaFamiliar(e.target.value)} />
                                </BoxInputs>
                                <BoxInputs>
                                    <TextField sx={{ width: "250px" }} id="NomeResponsavel" label="Nome do Responsável Legal" variant="outlined" defaultValue={data.nomeResponsavelLegal} onChange={(e) => setNomeResponsavelLegal(e.target.value)} />
                                    <TextField sx={{ width: "250px" }} id="Bairro" label="Bairro" variant="outlined" defaultValue={data.bairro} onChange={(e) => setBairro(e.target.value)} />
                                </BoxInputs>
                                <BoxInputs>
                                    <TextField sx={{ width: "250px" }} id="E-mailReponsavel" label="E-mail do Reponsável Legal" variant="outlined" defaultValue={data.emailResponsavelLegal} onChange={(e) => setEmailResponsavelLegal(e.target.value)} />
                                    <TextField sx={{ width: "250px" }} id="Cidade" label="Cidade" variant="outlined" defaultValue={data.cidade} onChange={(e) => setCidade(e.target.value)} />
                                </BoxInputs>
                                <Box sx={{ width: "90%", display: "flex", justifyContent: "end", alignItems: "center", marginTop: "3rem" }}>
                                    <Button sx={{ width: "20%", height: "3rem", backgroundColor: "#0D3162" }} variant="contained" endIcon={<NavigateNextRoundedIcon />} onClick={() => editPreMatricula()}><Link className="link" to={"/home-usuario"}>Editar</Link></Button>
                                </Box>
                            </Box>
                        </>
                    </Modal>
                </Box>
            </>
        )
    }

    return (
        <>
            <DataGrid getRowId={(row) => row.idMatricula} rows={rows} columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5, }, },
                }}
                checkboxSelection
                disableRowSelectionOnClick />

            {open ? <ModalEdit id={idAtual} /> : <></>}
        </>
    )
}

export default TablePreMatricula;