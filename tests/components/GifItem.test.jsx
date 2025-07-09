import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Probando Componente <GifItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const id = '123';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} id={id} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        const { getByRole } = render(<GifItem title={title} url={url} id={id} />);
        const { src, alt } = getByRole('img');
        const { src: srcS, alt: altS } = screen.getByRole('img');
        //screen.debug();
        expect(srcS).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url} id={id} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});  