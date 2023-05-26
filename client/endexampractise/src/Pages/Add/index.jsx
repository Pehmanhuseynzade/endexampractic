import { Button, TextField } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import {formik, useFormik} from "formik"
import { postDatas } from "../../api/httpsrequests";
import { sportSchema } from "../../validation/sportValidation";
import { useNavigate } from "react-router-dom";
function Add() {
 const navigate=useNavigate()
  function handleSubmit(values,action){
      postDatas(values)
      if(values){
        navigate("/")
      }
      console.log(values)
      // console.log(action)
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      price:'',
      desc:'',
      image:'',
    },
    onSubmit:handleSubmit,
    validationSchema:sportSchema
  });


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="add-h1">Add Pages</h1>
      <form onSubmit={formik.handleSubmit} className="add">
      <TextField error = {formik.errors.name && formik.touched.name ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "text" name="name" id="outlined-basic" label="Name" variant="outlined" />
      {formik.errors.name && formik.touched.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
      <TextField error = {formik.errors.price && formik.touched.price ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "number" name="price" id="outlined-basic" label="Price" variant="outlined" />
      {formik.errors.price && formik.touched.price && <p style={{color:"red"}}>{formik.errors.price}</p>}
      <TextField error = {formik.errors.desc && formik.touched.desc ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "text" name="desc" id="outlined-basic" label="Description" variant="outlined" />
      {formik.errors.desc && formik.touched.desc && <p style={{color:"red"}}>{formik.errors.desc}</p>}
      <TextField error = {formik.errors.image && formik.touched.image ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "text" name="image" id="outlined-basic" label="Image" variant="outlined" />
      {formik.errors.image && formik.touched.image && <p style={{color:"red"}}>{formik.errors.image}</p>}
      <Button type="submit" variant="contained"> Add</Button>
      </form>
    </>
  );
}

export default Add;
