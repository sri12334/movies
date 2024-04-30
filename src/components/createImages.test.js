/**
 * @jest-environment jsdom
 */

import createImage from './createImages.js';

describe('createImage function', () => {
  it('should create an image container with the correct properties', () => {
    // Arrange
    const image = {
        id: 1,
        dataName: 'Spiderman',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        src: './assets/spiderman.jpg',
        title: 'Spiderman',
    };

    // Act
    const container = createImage(image);

    // Assert
    expect(container.classList.contains('image-box')).toBe(true);
    expect(container.id).toBe('1');

    const img = container.querySelector('img');
    expect(img.src).toBe('http://localhost/assets/spiderman.jpg');
    expect(img.alt).toBe('Spiderman');

    const title = container.querySelector('h6');
    expect(title.innerText).toBe('Spiderman');
  });
});
