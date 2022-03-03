import { Alert, Snackbar } from '@mui/material';
import React from 'react';



type PropsType = {
    text: string
    open: boolean,
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}


const SnackBar = (props: PropsType) => {
    return (
        <>
            <Snackbar open={props.open} autoHideDuration={1000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success" sx={{ width: '100%' }}>
                    {props.text}
                </Alert>
            </Snackbar>

        </>
    )
}

export default SnackBar