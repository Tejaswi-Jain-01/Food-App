import React, { useState } from "react";
import chef from "../../src/image/chef-1.png"
import { ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import contactbg from "../../src/image/contactbg.jpg"
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

<div className="bg-black bg-opacity-50 relative">
        <img src={contactbg} className="sm:h-[20rem] w-full" />
        <div className="absolute top-0 left-0 flex w-full h-full items-center justify-center">
          <h1 className="text-5xl font-semibold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row">
        <div className="sm:w-full md:w-1/2 bg-gradient-to-tr from-amber-400 via-green-500 to-teal-200 rounded-3xl text-black p-8 sm:mt-2">
          <h1 className="font-bold text-3xl">Get In Touch</h1>
          <input type="text" placeholder="First Name" className=" m-auto rounded-2xl text-center bg-gradient-to-br from-orange-100 to-sky-200  md:h-[3rem] sm:w-auto   " />
            <input type="text" placeholder="Last Name" className=" m-auto rounded-2xl text-center bg-gradient-to-br from-orange-100 to-sky-200  md:h-[3rem] sm:w-[14rem] " />
            <input type="email" placeholder="Email" className=" m-auto rounded-2xl text-center bg-gradient-to-br from-orange-200 to-sky-300 h-[3rem] w-[14rem] " />
            <input type="phone" placeholder="Phone" className=" m-auto rounded-2xl text-center bg-gradient-to-br from-orange-200 to-sky-300 h-[3rem] w-[14rem] " />
            <input type="text" placeholder="Address" className=" m-auto mt-[2rem] rounded-2xl text-center bg-gradient-to-br from-orange-100 to-blue-200 h-[3rem] sm:w-[50%] " />
          <input type="text" placeholder="type your message here!" className="m-auto mt-[2rem] rounded-2xl text-center bg-gradient-to-br from-pink-100 to-sky-200 h-[6rem] w-full " />

          <Stack className="md:ml-[20rem] sm:mt-[3rem]" direction="row" spacing={2}>
            <Button variant="contained" color="primary" endIcon={<SendIcon />} onClick={handleClick}>Send</Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Thanks!</DialogTitle>
              <DialogContent>
                <Alert severity="success">your data sent</Alert>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </div>

        <div className="sm:w-full md:w-1/2 bg-blue-100 rounded-3xl text-blue p-8 mt-8 md:mt-0">

          <img src={chef} alt="" className="mx-auto sm:w-[20rem] h-auto" />

          <div className="mt-4">

          <div className="md:flex">
              <ImPhone />
              <div>+91, 8860357937, 7669237937, 9582307779</div>
            </div>

            <div className="flex">
              <IoIosMail /><div>info@homefoodi.com</div>
            </div>

          </div>
        </div>
      </div>

    
    </>
  )
}
export default Contact;