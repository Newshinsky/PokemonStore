
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CustomButton from '../../../components/Button/DefaultButton/CustomButton';
import { ROUTES_NAMES } from '../../../routes/RoutesNames';
import { SIGN_UP_REQUEST } from '../actions';
import { registerPageSelector } from '../selectors';
import styles from "./../../LoginPage/components/LoginForm.module.css";



const RegisterForm = (props) => {

    const { isSuccess, message } = useSelector(registerPageSelector)

    const dispatch = useDispatch()

    const handleRegister = (data, event) => {
        event.preventDefault();
        dispatch(SIGN_UP_REQUEST(data));
        reset()
    }



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    return (
        <>
            <div className={`${styles.loginBox}`}>
                <h2>Register Here</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div>
                        <input type="email" placeholder="Email" {...register('email', { required: true, })} autoFocus />
                        {errors.email && <p className={`${styles.error}`}>Email  is required</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="FirstName" {...register('firstName', { required: true, maxLength: 10 })} />
                        {errors.firstName && errors.firstName.type === "required" && <p className={`${styles.error}`}>First name is required</p>}
                        {errors.firstName && errors.firstName.type === "maxLength" && <p className={`${styles.error}`}>Max length exceeded</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="LastName" {...register('lastName', { required: true, maxLength: 10 })} />
                        {errors.lastName && errors.lastName.type === "required" && <p className={`${styles.error}`}>Last name is required</p>}
                        {errors.lastName && errors.lastName.type === "maxLength" && <p className={`${styles.error}`}>Max length exceeded</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Country" {...register('address.country')} />
                    </div>
                    <div>
                        <input type="text" placeholder="City" {...register('address.city')} />
                    </div>
                    <div>
                        <input type="text" placeholder="Address Line 1" {...register('address.addressLine1')} />
                    </div>
                    <div>
                        <input type="text" placeholder="Address Line 2" {...register('address.addressLine2')} />
                    </div>
                    <select {...register("gender", { required: true })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div>
                        <input type="password" placeholder="Password"  {...register('password', { required: true, maxLength: 20, })} />
                        {errors.password && errors.password.type === "required" && <p className={`${styles.error}`}>Password is required</p>}
                        {errors.password && errors.password.type === "maxLength" && <p className={`${styles.error}`}>Max length exceeded</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Phone" {...register("phone", { required: true, minLength: 7, maxLength: 12 })} />
                        {errors.phone && errors.phone.type === "required" && <p className={`${styles.error}`}>Phone is required</p>}
                        {errors.phone && errors.phone.type === "minLength" && <p className={`${styles.error}`}>Min length is 7</p>}
                        {errors.phone && errors.phone.type === "maxLength" && <p className={`${styles.error}`}>Max length exceeded</p>}
                    </div>
                    <CustomButton buttonName="Sign up" />
                    <NavLink to={ROUTES_NAMES.LOGIN}>
                        Login
                    </NavLink>
                </form>
                {isSuccess && <p>{message}, please login</p>}
            </div>
        </>
    )
}

export default RegisterForm