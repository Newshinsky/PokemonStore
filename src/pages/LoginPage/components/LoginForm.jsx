import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/Button/DefaultButton/CustomButton";
import { ROUTES_NAMES } from "../../../routes/RoutesNames";
import { SIGN_IN_REQUEST } from "../actions";
import { authSelector } from "../selectors/index";
import styles from "./LoginForm.module.css";


const LoginForm = () => {

    const dispatch = useDispatch()

    const errorMessage = useSelector(authSelector)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const handleLogin = (data, event) => {
        event.preventDefault();
        dispatch(SIGN_IN_REQUEST(data));
        reset();
    }

    return (
        <>
            <div className={`${styles.loginBox}`}>
                <h2>Log In Here</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input type="email" placeholder="Email" {...register('email', { required: true, })} autoFocus />
                    {errors.email && <p className={`${styles.error}`}>Email  is required</p>}

                    <input type="password" placeholder="Password"  {...register('password', { required: true, maxLength: 20, })} />
                    {errors.password && errors.password.type === "required" && <p className={`${styles.error}`}>Password is required</p>}
                    {errors.password && errors.password.type === "maxLength" && <p className={`${styles.error}`}>Max length exceeded</p>}
                    <CustomButton buttonName="Sign In" />
                    <NavLink to={ROUTES_NAMES.REGISTER}>
                        Or Create Account
                    </NavLink>
                </form>
                {errorMessage.errors && <Alert severity="error">User not found</Alert>}
            </div>
        </>
    )
}
export default LoginForm   