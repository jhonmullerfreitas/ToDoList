import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { ButtonSubmitEdit, FormEditNameList } from './styles';
import TextField from '@mui/material/TextField';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import axios from "axios"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '80vw',
    sm: '60vw',
    md: '40vw',
    lg: '30vw'
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalEditItem(props) {
    const schema = yup.object().shape({
        name: yup.string().required("Nome obrigatório."),
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const token = window.localStorage.getItem("@token")
    const idList = window.localStorage.getItem("@idListDetail")

    const editName = (data) => {
        data = { ...data, idItem: props.idItem}
        axios.patch(`http://localhost:3001/item/${idList}`, 
            data, 
            {
              headers:{
                'Authorization':`Bearer ${token}`
              }
            }
        )
        .then((res)=> {
            setOpen(false)
        })
        .catch((error)=>console.log(error))
    }

  return (
    <div>
      <Button onClick={handleOpen} sx={{color: 'var(--blue)'}}>
        <EditIcon fontSize="small" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar item
          </Typography>
          
          <FormEditNameList onSubmit={handleSubmit(editName)} >
            <TextField size="small" label="Informe o novo nome" {...register("name")} />
            <ButtonSubmitEdit type='submit'>Editar</ButtonSubmitEdit>
          </FormEditNameList>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalEditItem;