import { render, fireEvent, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Probando Componente <AddCategory />', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
        const { getByRole } = render(<AddCategory onNewCategory={() => {}} />);
        const input = getByRole('textbox');
        const inputS = screen.getByRole('textbox');
        fireEvent.input(inputS, { target: { value: 'Saitama' } });
        expect(inputS.value).toBe('Saitama');
        //screen.debug();
    });

    test('Debe llamar onAddCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar onAddCategory si el input está vacío', () => {
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onAddCategory).not.toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(0);
    });

});