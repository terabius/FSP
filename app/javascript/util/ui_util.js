export const loggedInUi = () => {
    const generalContainer = document.getElementById('general-container');
    generalContainer.style.background = 'white';
    const ele = document.querySelectorAll('.white');
    Array.prototype.map.call(ele,(el) => {
        el.classList.remove('white');
        el.classList.add('black');
    });
};


export const loggedOutUi = () => {
    const generalContainer = document.getElementById('general-container');
    generalContainer.style.background = 'rgb(22, 82, 240)';
    const ele = document.querySelectorAll('.black');
    Array.prototype.map.call(ele, (el) => {
        el.classList.remove('black');
        el.classList.add('white');
    });
};
