document.querySelectorAll('.accordian__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordianContent = button.nextElementSibling;
        button.classList.toggle('accordian__button--active');
        if (button.classList.contains('accordian__button--active')) {
            accordianContent.style.maxHeight = accordianContent.scrollHeight + 'px';
        } else {
            accordianContent.style.maxHeight = 0;
        }
    });
});

window.addEventListener('resize', () => {
    document.querySelectorAll('.accordian__button').forEach(button => {
        if (button.classList.contains('accordian__button--active')) {
            const accordianContent = button.nextElementSibling;
            accordianContent.style.maxHeight = accordianContent.scrollHeight + 'px';
        }
    });
});