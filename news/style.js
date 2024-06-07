const arrow = document.querySelector('.dropbtn')
const dropdown = document.querySelector('.dropdown-content')

arrow.addEventListener('click', () => {
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrow.style.transform = 'rotate(0deg)'
    } else {
        dropdown.classList.add('show')//показываем панель
        arrow.style.transform = 'rotate(180deg)'
    }
})
