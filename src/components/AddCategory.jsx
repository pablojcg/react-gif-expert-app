
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = ({ target }) => {
    //     setInputValue(target.value);
    // };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
};