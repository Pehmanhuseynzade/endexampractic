import * as yup from 'yup'

export const sportSchema = yup.object().shape({
     name: yup.string().min(3).max(20).required("name is required"),
     price: yup.number().positive().required("name is required"),
     desc: yup.string().required("description is required"),
     image: yup.string().url().required("description is required")
   });