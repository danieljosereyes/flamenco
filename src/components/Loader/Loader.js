import { LinearProgress } from "@mui/material"
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <LinearProgress color="success" />
        </div>
    )
}
export default Loader