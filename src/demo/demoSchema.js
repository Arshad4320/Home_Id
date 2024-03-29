import * as yup from 'yup';

export const demoSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    phoneNumber: yup.string().optional(),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(24).required("Password is required")
})