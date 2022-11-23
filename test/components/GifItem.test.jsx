import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem.jsx />", () => {

    const title = "Saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test('Debe de hacer match con el snapshot', () => {
      
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });


    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByAltText(title)).toBeTruthy();

     })

});