export const loggedInUi = () => {
    const logo = document.getElementById('logo');
    logo.classList.add('special-blue');
    const generalContainer = document.getElementById('general-container');
    generalContainer.style.background = 'white';
    const ele = document.querySelectorAll('.white');
    Array.prototype.map.call(ele,(el) => {
        el.classList.remove('white');
        el.classList.add('black');
    });
};


export const loggedOutUi = () => {
    const logo = document.getElementById('logo');
    logo.classList.remove('special-blue');
    const generalContainer = document.getElementById('general-container');
    generalContainer.style.background = 'rgb(22, 82, 240)';
    const ele = document.querySelectorAll('.black');
    Array.prototype.map.call(ele, (el) => {
        el.classList.remove('black');
        el.classList.add('white');
    });
};
