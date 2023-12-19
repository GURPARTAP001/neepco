// import React, { useState } from 'react';
// import { Button, Stepper, Step, StepLabel,Typography } from '@mui/material';
// import { Dialog, DialogTitle, DialogContent } from '@mui/material';
// import Single_doc_upload from './Single_doc_upload';


// const steps = ['PAN Card', 'Company Registration', 'GST Registration', 'Income Tax Return', 'Business License', 'Bank Clearance'];

// const Doc_upload = () => {
//     const [activeStep, setActiveStep] = useState(0);

//     const handleNext = () => {
        
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
        
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleSubmit = () => {
//         // Submit form logic here
//     };

//     return (
//         <div>
//             <Stepper activeStep={activeStep}>
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//             {activeStep === steps.length ? (
//                 <div>
//                     <Typography>All steps completed</Typography>
//                     <Button onClick={handleSubmit}>Submit</Button>
//                 </div>
//             ) : (
                
//                 <div>
//                     <Single_doc_upload label={steps[activeStep]}/>
//                     <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
//                     <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Doc_upload;

import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Typography, useTheme, useMediaQuery } from '@mui/material';
import Single_doc_upload from './Single_doc_upload';

const steps = ['PAN Card', 'Company Registration', 'GST Registration', 'Income Tax Return', 'Business License', 'Bank Clearance'];

const Doc_upload = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        // Submit form logic here
    };

    return (
        <div>
            <Stepper activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? (
                <div>
                    <Typography sx={{ mt: 2 }}>All steps completed</Typography>
                    <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 1 }}>Submit</Button>
                </div>
            ) : (
                <div>
                    <Single_doc_upload label={steps[activeStep]} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: theme.spacing(2) }}>
                        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Doc_upload;
