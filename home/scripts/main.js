
const rsek1 = document.querySelector('.rsek1');
const rsek2 = document.querySelector('.rsek2');
const rsek3 = document.querySelector('.rsek3');
const deti = document.querySelector('.childs');
const teens = document.querySelector('.teens');
const abults = document.querySelector('.adult');
const all = document.querySelector('.all')


rsek1.addEventListener('click', () => {
    rsek1.style.borderBottom = '5px solid #f7951d93'
    rsek2.style.border = 'none'
    rsek3.style.border = 'none'
    all.style.display = 'none'
    deti.style.display = 'block'
    teens.style.display = 'none'
    abults.style.display = 'none'
})
rsek2.addEventListener('click', () => {
    rsek2.style.borderBottom = '5px solid #f7951d93'
    rsek1.style.border = 'none'
    rsek3.style.border = 'none'
    all.style.display = 'none'
    deti.style.display = 'none'
    teens.style.display = 'block'
    abults.style.display = 'none'
})
rsek3.addEventListener('click', () => {
    rsek3.style.borderBottom = '5px solid #f7951d93'
    rsek2.style.border = 'none'
    rsek1.style.border = 'none'
    all.style.display = 'none'
    deti.style.display = 'none'
    teens.style.display = 'none'
    abults.style.display = 'block'
})


















const arrow = document.querySelector('.dropbtn')
const dropdown = document.querySelector('.dropdown-content')

arrow.addEventListener('click', () => {
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrow.style.transform = 'rotate(0deg)'
    } else {
        dropdown.classList.add('show')
        arrow.style.transform = 'rotate(180deg)'
    }
})