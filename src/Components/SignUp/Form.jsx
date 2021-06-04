import { useFormik } from 'formik';
import * as Yup from 'yup';

let initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const validate = Yup.object({
    name: Yup.string().matches(/[^0-9]\[A-z]/gi, 'Invalid Value. It Can Contain Only Characters').required('Name Is Required'),
    email: Yup.string().email('Email Is Invalid').required('Email Is Required'),
    password: Yup.string().required('Password Is Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password doesn't match").required()
})
const Form = () => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log('Your  ' + values)
        },
        validationSchema: validate
    })
    return (
            <form name="sign_up" className="sign_up_form" onSubmit={formik.handleSubmit}>
                <div className="form_control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        id="name"
                        name="name"
                        {...formik.getFieldProps('name')}
                        />
                    {
                        formik.touched.name && formik.errors.name ? 
                        (
                            <div className="error">{formik.errors.name}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="email">email</label>
                    <input
                        type="email" 
                        id="email"
                        name="email"
                        {...formik.getFieldProps('email')}
                        />
                    {
                        formik.touched.email && formik.errors.email ? 
                        (
                            <div className="error">{formik.errors.email}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="password">password</label>
                    <input
                        type="text" 
                        id="password"
                        name="password"
                        {...formik.getFieldProps('password')}
                        placeholder="Your Password"
                        />
                    {
                        formik.touched.password && formik.errors.password ? 
                        (
                            <div className="error">{formik.errors.password}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="confirmPassword">confirm Password</label>
                    <input
                        type="text" 
                        id="confirmPassword"
                        name="confirmPassword"
                        {...formik.getFieldProps('confirmPassword')}
                        placeholder="Your Password"
                        />
                    {
                        formik.touched.confirmPassword && formik.errors.confirmPassword ? 
                        (
                            <div className="error">{formik.errors.confirmPassword}</div>
                        ) : null
                    }
                </div>
                <button type="submit">Sign Up</button>
            </form>
    );
}
 
export default Form;