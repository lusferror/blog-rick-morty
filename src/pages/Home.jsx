import React, { useContext } from "react";
import Card from "../components/Card";
import { Context } from "../flux/appContext";

export default function Home(){
    const { store: { characters} } = useContext(Context)

    console.log(characters)
    return(
        <div className="container py-5">
            {
                characters?.map(char=>(
                    <Card name={char.name} image={char.image} status={char.status} />
                ))
            }
        </div>
    )
}