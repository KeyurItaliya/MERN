import React, { useEffect, useState }  from 'react';
import * as Action from '../store/actions';
import { connect, useDispatch } from 'react-redux';

// import EmployeeTable from './EmployeeTable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { Formik } from "formik"
import * as Yup from 'yup';

import DeleteConfirmDialog from '../component/deleteConfermDialog'

const initialFormValue = {
                            username: '',
                            password: '',
                            address : '',
                            Mobile : ''
                          }

function MainDesh(props) {
  const resData = props.employee;
  const dispatch = useDispatch();
  const [buttonShow, setButtonShow] = useState(true)
  const [formData, setFormData] = useState(initialFormValue);
  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = React.useState(false);
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("*Required user name"),
    password: Yup.string().required("*Required password"),
    address : Yup.string().required("*Required address"),
    Mobile : Yup.number().required("*Required mobile"),
  })

  useEffect(() => {
    dispatch(Action.employeeAction())
  }, [])

  // const handleFromInpit = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   setFormData({...formData, [name]: value })
  //   // setButtonShow(true)
  // }

  // function validate(){
  //   let msg = {};
  //   let isValid = false;
  //   if(taskAddEditForm.task_name == ''){
  //     isValid = true;
  //     msg.name = 'name is required'
  //   }
  //   if( selectedTaskFor == null ){
  //     isValid = true;
  //     msg.taskFore = 'task for required'
  //   }

  //   if( dueDate == '' ){
  //     isValid = true;
  //     msg.dueDate = 'dueDate is required'
  //   }
  //   if( selecedPriority == null){
  //     isValid = true;
  //     msg.priority = 'priority is required'
  //   }
  //   // console.log("msg ===",msg)
  //   if( taskAddEditForm.task_description == ''){
  //     isValid = true;
  //     msg.task_description = 'description is required'
  //   }
  //   return {isValid, msg};
  // }
  // validate()

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   // this.setState({ value: this.state.input });
  //   dispatch(Action.employeeRegister(formData))
  // }
  return (
      <React.Fragment>
            <TableContainer className="shadow mb-2" component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Mobile No</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {resData && resData.map((resData, key) => (
                        <TableRow  key={key}>
                        <TableCell align="right">{resData.username}</TableCell>
                        <TableCell align="right">{resData.password}</TableCell>
                        <TableCell align="right">{resData.Mobile}</TableCell>
                        <TableCell align="right">
                          <button
                            style={{background: 'none', border: 'none'}}
                            title='Edit Employee'
                            className="focus:outline-none" type="button"
                          ><CreateIcon /></button>
                          <button
                            style={{background: 'none', border: 'none'}}
                            onClick={() => {setOpenDeleteConfirmDialog(true)}}
                            title='Delete Employee'
                            className="focus:outline-none" type="button"
                          ><DeleteIcon /></button>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
              <Formik
              initialValues={formData}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form is validated! Submitting the form...", values);
                dispatch(Action.employeeRegister(values))
              }}
              >  
              {({ handleSubmit, handleChange, errors, values }) => (
                <form className="mt-5 shadow p-5" onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Usser Name</label>
                    <div className="col-sm-10">
                      <input 
                            type="text" 
                            name="username" 
                            value={values.username} 
                            onChange={handleChange} 
                            className="form-control" 
                            id="username" 
                            placeholder="Enter Your Name" />
                        {errors.fist}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input 
                            type="password" 
                            name="password" 
                            value={values.password} 
                            onChange={handleChange} 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter Your Password" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">mobile no</label>
                    <div className="col-sm-10">
                      <input 
                            type="number" 
                            name="Mobile" 
                            value={values.mobile} 
                            onChange={handleChange} 
                            className="form-control" 
                            id="Mobile" 
                            placeholder="1234567891" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                      <textarea 
                            type="text" 
                            rows="5"
                            name="address" 
                            value={values.address} 
                            onChange={handleChange} 
                            className="form-control" 
                            id="address" 
                            placeholder="Write here ........" />
                    </div>
                  </div>
                  {buttonShow ? 
                  <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                      <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                  </div>
                  : null }
                </form>
              )}
              </Formik>

              <DeleteConfirmDialog 
                    cofirmmessge="Delete this Employee?"
                    open={openDeleteConfirmDialog}
                    // onClickDelete={()=>{
                    //     dispatch(Actions.removeSalesPerson( deleteSalesPersonId ));
                    //     setOpenDeleteConfirmDialog(false);
                    // }}
                    onHide={() =>{ setOpenDeleteConfirmDialog(false) }} 
              />

      </React.Fragment>
  );
}

const mapStateToProps = ({user}) => ({
  employee: user.employee
})

export default connect(mapStateToProps)(MainDesh)




            {/* <p className="text-left">right aligned text on all viewport sizes.</p>
            <p className="text-sm-center">center aligned text on viewports sized SM (small) or wider.</p>
            <p className="text-md-right">right aligned text on viewports sized MD (medium) or wider.</p>
            <p className="text-lg-left">left aligned text on viewports sized LG (large) or wider.</p>
            <p className="text-xl-right">right aligned text on viewports sized XL (extra-large) or wider.</p>
            <div className="container">
              <div className="row no-gutters text-white">
                <div className="col-xl-4 col-md-3 col-sm-1 bg-primary">Flex item</div>
                <div className="col-xl-4 col-md-3 col-sm-1 bg-success">Flex item</div>
                <div className="col-xl-4 col-md-6 col-sm-1 bg-primary">Flex item</div>
              </div> */}