import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Probando Componente <GifExpertApp />', () => {
    
    const title = 'GifExpertApp PC';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el titulo "GifExpertApp PC"', () => {
        const { getByText } = render(<GifExpertApp />);
        expect(getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el titulo "GifExpertApp PC" en un h1', () => {
        const { getByRole } = render(<GifExpertApp />);
        expect(getByRole('heading', { level: 1 }).innerHTML).toBe(title);
    });
});