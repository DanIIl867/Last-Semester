import { Link } from "react-router-dom";

export const GymPage = ()=>{
    return(
        <>
            <h2>Gym</h2>
            <ul>
                {['gold-gym1', 'gold-gym2', 'gold-gym3', 'gold-gym4'].map(gym => {
                    return (
                        <li key={gym}><Link to={`${gym}`}>{gym}</Link></li>
                    )
                })}
            </ul>
        </>
    )
}

export default GymPage;