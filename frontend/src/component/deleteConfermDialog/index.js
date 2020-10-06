import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

function DeleteConfirmDialog(props) {
    return (
        <div>
            <Dialog 
                {...props}
                aria-labelledby="form-dialog-title"
                fullWidth
            >   
                <div className="d-flex">
                    <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
                    <div className="ml-auto p-3"><span onClick={props.onHide}><CloseIcon /></span></div>
                </div>
                <p className="ml-4" >
                    {props.cofirmmessge ?  props.cofirmmessge  : null }
                </p>
                
            </Dialog>
        </div>
    )
}

export default DeleteConfirmDialog
