import { DataGrid } from '@mui/x-data-grid';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const TablePreMatricula = (props) => {

    const rows = props.data ? [...props.data] : [];

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'numeroCadastro',
            headerName: 'Número de Cadastro',
            width: 150,
            editable: true,
        },
        {
            field: 'aluno',
            headerName: 'Aluno',
            width: 150,
            editable: true,
        },
        {
            field: 'nascimento',
            headerName: 'Data de Nascimento',
            width: 150,
            editable: true,
        },
        {
            field: 'resposavel',
            headerName: 'Responsável',
            width: 150,
            editable: true,
        },
        {
            field: 'telefone',
            headerName: 'Telefone',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: true,
        },
        {
            field: "edit",
            headerName: "Editar",
            width: 100,
            renderCell: (params) => {
                return (
                    <EditRoundedIcon />
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

    return (
        <>
            <DataGrid rows={rows} columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5, }, },
                }}
                checkboxSelection
                disableRowSelectionOnClick />
        </>
    )
}

export default TablePreMatricula;