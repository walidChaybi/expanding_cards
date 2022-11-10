let panels = document.querySelectorAll('.panel')

for (let each of panels)
{
    each.addEventListener('click', function (e) {
        removeActive();
        each.classList.add('active')
    })
}

removeActive = () => {
    for (let each of panels) {
        each.classList.remove('active');
    }
}