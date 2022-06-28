import React,{useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { UserAuth } from '../services/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function SignUp() {
     const [email, setEmail] = useState('');
     const [emailErr, setEmailErr] = useState(false);
     const [name,setName]=useState('');
     const [fname,setfName]=useState('');
     const [open,setOpen]=useState(false);
     const {googleSignIn, user}=UserAuth();
     const validEmail = new RegExp(
     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );


     // to close the modal
     const handleClose = () => setOpen(false);

     //to handle google sign in
     const handleOnClick= async()=>{
      try{
          await googleSignIn()
      } catch(err){
        console.log(err);
      }
     }

     //to handle Sign In button
     const handleSignIn=()=>{
       if (!validEmail.test(email)) {
         setEmailErr(true);
      } else{
           setName(fname);
      }
     }


     useEffect(()=>{
        setName(user?.displayName);
     },[user])


     useEffect(()=>{
         setOpen(true);
     },[name])

  return (
    <div className='signup'>
         <div>
          <TextField
          required
          id="outlined-required"
          label="First name"
          defaultValue=""
          style={{width:"10vw",marginTop:"8%",marginBottom:20,marginLeft:"12%"}}
          onChange={(e)=>setfName(e.target.value)}
        />
         <TextField
          required
          id="outlined-required"
          label="Last name"
          defaultValue=""
          style={{width:"10vw",marginTop:"8%",marginBottom:25,marginLeft:"10%"}}
        />
      </div>

        <div>
         <TextField
          required
          error={emailErr}
          id="outlined-required"
          label="Email address"
          defaultValue=""
           onChange={(e) => setEmail(e.target.value)}
            style={{width:"24vw",marginLeft:"11%",marginBottom:25}}
        />
        </div>
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
           style={{width:"24vw",marginLeft:"11%",marginBottom:25}}
        />
        <FormControlLabel 
        control={<Checkbox defaultChecked />} 
        label="Subscribe to our newsletter"
        style={{marginLeft:"23%"}}
         />
         <Button
         style={{width:"24vw",marginLeft:"11%",marginTop:20,backgroundColor:"#0000ff",color:"white"}}
         onClick={handleSignIn}
         >SIGN UP</Button>

         <p style={{marginLeft:"40%",marginBottom:"10px"}}>or signup with:</p>
         <div className='icons'>

         <Button 
        onClick={handleOnClick}
         >
            <FacebookOutlinedIcon />
         </Button>

         <Button
         onClick={handleOnClick}
         >
             <GoogleIcon />
         </Button>

         <Button
          onClick={handleOnClick}
         >
             <TwitterIcon />
         </Button>

         <Button
          onClick={handleOnClick}
         >
             <GitHubIcon />
         </Button>
        {
          
          name?.length>=1 && (
            <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
              >
               <Box sx={style}>
                 <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name} has signed in.
                 </Typography>
                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                 </Typography>
               </Box>
         </Modal>
          )
        }
         </div>
    </div>
  )
}

export default SignUp