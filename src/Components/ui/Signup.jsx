import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { pink } from '@mui/material/colors';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));


export default function Login({SignOpen, setSignOpen}) {

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={()=>setSignOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={SignOpen}
        
      >
        <DialogTitle sx={{ m: 0, p: 2, alignSelf: "center", fontWeight: "bold", "fontSize": "larger", display: 'flex', flexDirection: "row" }} id="customized-dialog-title">
          Get Started
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>setSignOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{display: 'flex', overflow: 'hidden'}}>
          <Typography gutterBottom sx={{display: 'flex', flexDirection: 'column', paddingY: "24px"}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" color="primary" fullWidth />
            <TextField id="outlined-basic" label="Password" variant="outlined" color="primary" type="password"  fullWidth sx={{marginTop: 2, width: "42vh"}} />
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" color="primary" type="password"  fullWidth sx={{marginTop: 2, width: "42vh"}} />
            <ColorButton variant="contained" sx={{"marginTop": 5}} fullWidth >Log in</ColorButton>
          </Typography>
          </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}