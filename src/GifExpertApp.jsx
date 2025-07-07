
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Real Madrid', 'New York Yankees', 'Apple']);

    const onAddCategory = (newCategory) => {
        // Validar si la categoria ya existe
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp PC</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
}