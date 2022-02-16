import styles from "./Loaders.module.css"


const Loaders = () => {
    return (
        <div>
            <h1 className={`${styles.title}`}>Loading</h1>
            <div className={`${styles.rainbowMarkerLoader}`}></div>
        </div>
    )
}

export default Loaders