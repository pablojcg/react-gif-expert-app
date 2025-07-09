import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
