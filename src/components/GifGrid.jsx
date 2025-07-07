import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>  
            <h3>{category}</h3>
            
            { !isLoading ?
                <>
                    <div className="card-grid">
                        {gifs.map((image) => (
                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        ))}
                    </div>
                </>
                : <h2>Cargando...</h2>}
        </>
    );
}