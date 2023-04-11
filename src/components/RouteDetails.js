import { useParams } from "react-router-dom"

export default function RouteDetails(){
    const {id} = useParams();
    return (
        <h1>Details for Trip Number {id}</h1>
    )
}
