import { useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { Modal, Box, Typography } from '@mui/material';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const TablePreMatricula = (props) => {
    const [open, setOpen] = useState(false);

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
            editable: true,
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
            field: "edit",
            headerName: "Editar",
            width: 100,
            renderCell: (params) => {
                return (
                    <EditRoundedIcon onClick={() => setOpen(true)} />
                );
            },
        },
        {
            field: "delete",
            headerName: "Deletar",
            width: 100,
            renderCell: (params) => {
                return (
                    <DeleteForeverRoundedIcon />
                );
            },
        }
    ];

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <DataGrid getRowId={(row) => row.idMatricula} rows={rows} columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5, }, },
                }}
                checkboxSelection
                disableRowSelectionOnClick />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ backgroundColor: "#fff" }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default TablePreMatricula;