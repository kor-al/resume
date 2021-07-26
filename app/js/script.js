const body = document.body;
const tooltip = document.createElement('div')
tooltip.classList.add('tooltip');
tooltip.classList.add('hidden');
body.appendChild(tooltip)

const icons = document.querySelectorAll('.main .icon');
icons.forEach((icon) => {
    icon.addEventListener('mouseover', function(e){
        const x = e.pageX;
        const y = e.pageY;
        if (tooltip.classList.contains('hidden')) {
            tooltip.classList.remove('hidden')
        }
        tooltip.style.transform = `translate(${x}px, ${y}px)`;
        tooltip.innerHTML = this.dataset.skill
    })

    icon.addEventListener('mouseout', (e) => {
        if (!tooltip.classList.contains('hidden')) {
            tooltip.classList.add('hidden')
        }
    })
})