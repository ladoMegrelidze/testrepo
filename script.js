document.querySelectorAll('.image-container').forEach(container => {
    const mainImage = container.querySelector('.main-image');
    const leftImage = container.querySelector('.hover-image:nth-child(2)');
    const centerImage = container.querySelector('.hover-image:nth-child(3)');
    const rightImage = container.querySelector('.hover-image:nth-child(4)');

    container.addEventListener('mousemove', function (e) {
        const containerWidth = container.offsetWidth;
        const mouseX = e.clientX - container.getBoundingClientRect().left;
        const thirdWidth = containerWidth / 3;

        leftImage.style.opacity = '0';
        centerImage.style.opacity = '0';
        rightImage.style.opacity = '0';
        mainImage.style.opacity = '1';

        if (mouseX < thirdWidth) {
            leftImage.style.opacity = '1';
            mainImage.style.opacity = '0';
        } else if (mouseX < thirdWidth * 2) {
            centerImage.style.opacity = '1';
            mainImage.style.opacity = '0';
        } else {
            rightImage.style.opacity = '1';
            mainImage.style.opacity = '0';
        }
    });

    container.addEventListener('mouseleave', function () {
        leftImage.style.opacity = '0';
        centerImage.style.opacity = '0';
        rightImage.style.opacity = '0';
        mainImage.style.opacity = '1';
    });
});
