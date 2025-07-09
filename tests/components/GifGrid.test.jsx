import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Probando Componente <GifGrid />', () => {
    
    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        const { getByText } = render(<GifGrid category={category}/>);
        // screen.debug();
        expect(getByText('Cargando...')).toBeTruthy();
        expect(getByText(category)).toBeTruthy();
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        
        //screen.debug();

        expect(screen.getByText('Saitama')).toBeTruthy();
        expect(screen.getByText('Goku')).toBeTruthy();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});