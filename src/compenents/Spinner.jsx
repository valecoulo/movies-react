import { ImSpinner4 } from 'react-icons/im'
import styles from './Spinner.module.css'

function Spinner() {
    return (
        <div className={styles.spinner}>
            < ImSpinner4 size={60} className= {styles.spinning} />
        </div>
    )
}

export default Spinner;
