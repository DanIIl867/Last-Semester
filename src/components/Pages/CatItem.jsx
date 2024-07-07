import { Link } from "react-router-dom"


export const CatItem = ({ cat }) => {
return (
<li key={cat}>
<Link to={`${cat}`}>{ cat }</Link>
</li>
)
}

export default CatItem