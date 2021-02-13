const sidebar = document.querySelector('.sidebar');
const sidebarTexts = document.querySelectorAll('.sidebar__item--text');
const sidebarOptions = document.querySelectorAll('.sidebar__option');

document.querySelector('#sidebar-hamburger').addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active');
    if (sidebar.classList.contains('sidebar--active')) {
        sidebarTexts.forEach(sidebarText => {
            sidebarText.style.marginLeft = '10px';
            sidebarText.style.maxWidth = sidebarText.scrollWidth + 'px';
        });
    } else {
        sidebarOptions.forEach(option => {
            option.classList.remove('active');
        })
        sidebarTexts.forEach(sidebarText => {
            sidebarText.style.maxWidth = '0px';
            sidebarText.style.marginLeft = '0px';
        });
    }
});

sidebarOptions.forEach(sidebarOption => {
    sidebarOption.addEventListener('click', () => {
        sidebarOption.classList.toggle('active');
        if (sidebarOption.classList.contains('active')) {
            sidebarOptions.forEach(option => {
                if (option !== sidebarOption) {
                    option.classList.remove('active');
                }
            });
            sidebarTexts.forEach(sidebarText => {
                sidebarText.style.marginLeft = '10px';
                sidebarText.style.maxWidth = sidebarText.scrollWidth + 'px';
            }); 
        } else {
            sidebarTexts.forEach(sidebarText => {
                sidebarText.style.maxWidth = '0px';
                sidebarText.style.marginLeft = '0px';
            });
        }
    })
})