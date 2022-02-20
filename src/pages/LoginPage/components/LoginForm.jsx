import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/Button/FirstButton/CustomButton";
import { ROUTES_NAMES } from "../../../routes/RoutesNames";
import { SIGN_IN_REQUEST } from "../actions";
import styles from "./LoginForm.module.css";



const LoginContainer = () => {

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
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
                    {errors.email && <p className={`${styles.error}`}>Email is required.</p>}

                    <input type="password" placeholder="Password"  {...register('password', { required: true })} />
                    {errors.password && <p className={`${styles.error}`}>Password is required.</p>}
                    <CustomButton buttonMove="Sign In" />
                    <NavLink to={ROUTES_NAMES.REGISTER}>
                        Or Register
                    </NavLink>
                </form>
            </div>
        </>
    )
}
export default LoginContainer   