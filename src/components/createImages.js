const createImage = (image) => {
    const container = document.createElement('div');
    container.classList.add('image-box');
    container.id = image.id;

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.dataName;

    const title = document.createElement('h6');
    title.innerText = image.title;

    container.append(img, title);

    return container;
};

export default createImage;
