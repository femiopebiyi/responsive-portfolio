const toggleMenu = () => {
    const navigation = document.querySelector('.navbar');


    const burgerMenu = document.querySelector(".fa-bars");
    const src = burgerMenu.getAttribute('src');

    const isBurger = src === 'burger-menu.svg';

    const iconName = isBurger ?
        'close.svg'
        :
        'burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    if (!isBurger) {
        navigation.classList.add("navbar--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle(
                'navbar--mobile'
            );
        }, 300)
    } else {
        navigation.classList.remove("navbar--mobile--fadeout");
        navigation.classList.toggle(
            'navbar--mobile'
        );
    }
};