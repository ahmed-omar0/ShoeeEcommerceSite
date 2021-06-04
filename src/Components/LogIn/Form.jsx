import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

let initialValues = {
    name: '',
    email: '',
    password: ''
}
const validate = Yup.object({
    name: Yup.string().matches(/[^0-9]\[A-z]/gi, 'Invalid Value. It Can Contain Only Characters').required('Name Is Required'),
    email: Yup.string().email('Email Is Invalid').required('Email Is Required'),
    password: Yup.string().required('Password Is Required')
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
            <form name="log_in" className="log_in_form" onSubmit={formik.handleSubmit}>
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
                <div className="btns">
                    <button type="submit">Log In</button>
                    <button type="button">
                        <Link to="/signup">
                            Sign-Up
                        </Link>
                    </button>
                </div>
            </form>
    );
}
 
export default Form;