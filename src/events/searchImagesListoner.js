import dom from '../dom.js';
import filterImageHandler from '../handlers/filterImageHandler.js';

const searchImageListoner = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        filterImageHandler(value);
    });
};

export default searchImageListoner;
