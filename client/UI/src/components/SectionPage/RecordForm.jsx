import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { sendRecord } from '../../Hooks/sendRecord';
import dayjs from 'dayjs';

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


export function RecordForm({section}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [sectionName, setSectionName] = useState(section)
    const [adviser, setAdviser] = useState('')
    const [violator, setViolator] = useState('')
    const [violation, setViolation] = useState('')
    const [violationDescription, setViolationDesc] = useState('')
    const [witness, setWitness] = useState('')
    const [date, setDate] = useState(dayjs())
    const [formattedDate, setformattedDate] = useState(dayjs().format('MM-DD-YYYY'))
    
    const handleSubmit = () => {
        console.log(JSON.stringify({sectionName, adviser, violator, violation, violationDescription, witness, formattedDate : date}));
        sendRecord({sectionName, adviser, violator, violation, violationDescription, witness, date: formattedDate})
    }
    const logRecord = () => console.log({sectionName, adviser, violator, violation, violationDescription, witness, formattedDate : date});

    return(
        <>
            <Button onClick={handleOpen} variant='contained'>Add New Record</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                    },
                }}
                className='recordForm'
            >
                <DialogTitle>Add New Record</DialogTitle>

                <DialogContent>
                    <TextField required onChange={(e) => setAdviser(e.target.value)} id="outlined-basic" label="Adviser" variant="outlined" fullWidth autoFocus/>
                    <TextField required onChange={(e) => setViolator(e.target.value)} id="outlined-basic" label="Violator Name" variant="outlined" fullWidth/>
                    
                    <InputLabel id="demo-simple-select-label">Violation</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={violation}
                        label="Violation"
                        onChange={(e) => setViolation(e.target.value)}
                        fullWidth
                        required
                    >
                        <MenuItem value={'Smoking/Vaping'}>Smoking/Vaping</MenuItem>
                        <MenuItem value={'Tardiness/Truancy'}>Tardiness/Truancy</MenuItem>
                        <MenuItem value={'Disruptive Behavior'}>Disruptive Behavior</MenuItem>
                        <MenuItem value={'Cheating/Plagiarism'}>Cheating/Plagiarism</MenuItem>
                        <MenuItem value={'Vandalism'}>Vandalism</MenuItem>
                        <MenuItem value={'Bullying/Harassment'}>Bullying/Harassment</MenuItem>
                        <MenuItem value={'Possession of Contraband'}>Possession of Contraband</MenuItem>
                        <MenuItem value={'Insubordination'}>Insubordination</MenuItem>
                        <MenuItem value={'Dress Code Violations'}>Dress Code Violations</MenuItem>
                        <MenuItem value={'Skipping Detention'}>Skipping Detention</MenuItem>
                        <MenuItem value={'Forgery'}>Forgery</MenuItem>
                        <MenuItem value={'Misuse of Technology'}>Misuse of Technology</MenuItem>
                        <MenuItem value={'Gambling'}>Gambling</MenuItem>
                        <MenuItem value={'Disrespectful Behavior'}>Disrespectful Behavior</MenuItem>
                        <MenuItem value={'Theft'}>Disruptive Behavior</MenuItem>
                        <MenuItem value={'Fighting'}>Disruptive Behavior</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-multiline-static"
                        label="Violation Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        onChange={(e) => setViolationDesc(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField required onChange={(e) => setWitness(e.target.value)} id="outlined-basic" label="Witness" variant="outlined" fullWidth/>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker className='datepicker' label="Date" value={date} onChange={(newValue) => setformattedDate(newValue.format('MM-DD-YYYY')) } />
                    </DemoContainer>
                    </LocalizationProvider>
                    
                    <DialogActions>
                        <div className='formBtns'>
                            <Button onClick={handleClose} variant="outlined" className='closeBtn'>Close</Button>
                            <Button onClick={handleSubmit}  variant="contained" className='saveBtn'>Save</Button>
                        </div>
                    </DialogActions>
                    
                </DialogContent>
            </Dialog>

            {/* <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <h2>Add New Record</h2>
                    <TextField onChange={(e) => setAdviser(e.target.value)} id="outlined-basic" label="Adviser" variant="outlined" fullWidth/>
                    <TextField onChange={(e) => setViolator(e.target.value)} id="outlined-basic" label="Violator Name" variant="outlined" fullWidth/>
                    
                    <InputLabel id="demo-simple-select-label">Violation</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value={'Tardiness/Truancy'}>Tardiness/Truancy</MenuItem>
                        <MenuItem value={'Disruptive Behavior'}>Disruptive Behavior</MenuItem>
                        <MenuItem value={'Cheating/Plagiarism'}>Cheating/Plagiarism</MenuItem>
                        <MenuItem value={'Vandalism'}>Vandalism</MenuItem>
                        <MenuItem value={'Bullying/Harassment'}>Bullying/Harassment</MenuItem>
                        <MenuItem value={'Possession of Contraband'}>Possession of Contraband</MenuItem>
                        <MenuItem value={'Insubordination'}>Insubordination</MenuItem>
                        <MenuItem value={'Dress Code Violations'}>Dress Code Violations</MenuItem>
                        <MenuItem value={'Skipping Detention'}>Skipping Detention</MenuItem>
                        <MenuItem value={'Forgery'}>Forgery</MenuItem>
                        <MenuItem value={'Misuse of Technology'}>Misuse of Technology</MenuItem>
                        <MenuItem value={'Gambling'}>Gambling</MenuItem>
                        <MenuItem value={'Disrespectful Behavior'}>Disrespectful Behavior</MenuItem>
                        <MenuItem value={'Theft'}>Disruptive Behavior</MenuItem>
                        <MenuItem value={'Fighting'}>Disruptive Behavior</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-multiline-static"
                        label="Violation Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        onChange={(e) => setViolationDesc(e.target.value)}
                        fullWidth
                    />
                    <TextField onChange={(e) => setWitness(e.target.value)} id="outlined-basic" label="Witness" variant="outlined" fullWidth/>
                    <TextField onChange={(e) => setWitness(e.target.value)} id="outlined-basic" label="Witness" variant="outlined" fullWidth/>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Date" />
                    </DemoContainer>
                    </LocalizationProvider>

                    <div className='formBtns'>
                        <Button onClick={handleClose} variant="outlined" className='closeBtn'>Close</Button>
                        <Button onClick={handleClose} variant="contained" className='saveBtn'>Save</Button>
                    </div>
                    
                </Box>
            </Modal> */}
        </>
    )
}