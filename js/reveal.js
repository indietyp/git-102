document.addEventListener('DOMContentLoaded', function () {
    const reveal = document.getElementsByClassName('reveal');

    let hideCode = localStorage.getItem('hideCode');

    if (hideCode === 'false') {
        for (let i = 0; i < reveal.length; i++) {
            reveal[i].classList.add('active');
        }

        return;
    }

    for (let i = 0; i < reveal.length; i++) {
        reveal[i].addEventListener('click', function () {
            reveal[i].classList.toggle('active');
        });

        const revealButton = document.createElement('button');
        revealButton.classList.add('fa', 'fa-eye', 'reveal-button');
        revealButton.setAttribute('title', 'Reveal');
        revealButton.addEventListener('click', function () {
            reveal[i].classList.toggle('active');
        });

        const buttons = reveal[i].previousSibling;
        buttons.insertBefore(revealButton, buttons.firstChild);
    }

    if (reveal.length === 0) {
        return;
    }

    const revealAllButton = document.createElement('button');
    revealAllButton.classList.add('fa', 'fa-eye', 'reveal-all-button', 'icon-button');
    revealAllButton.setAttribute('title', 'Reveal All');
    revealAllButton.addEventListener('click', function () {
        let revealed = [...reveal].filter(function (element) {
            return element.classList.contains('active');
        }).length;

        if (revealed === reveal.length) {
            for (let i = 0; i < reveal.length; i++) {
                reveal[i].classList.remove('active');
            }

            return;
        }

        for (let i = 0; i < reveal.length; i++) {
            reveal[i].classList.add('active');
        }
    });

    const buttons = document.querySelector('.menu-bar .left-buttons');
    buttons.appendChild(revealAllButton);
});

document.addEventListener('keyup', function (event) {
    // Ctrl + Shift + U; toggle hideReveal
    if ((event.altKey || event.ctrlKey) && event.shiftKey && event.key === 'R') {
        const current = localStorage.getItem('hideCode');

        if (current === 'false') {
            localStorage.setItem('hideCode', 'true');
        } else {
            localStorage.setItem('hideCode', 'false');
        }

        location.reload();
    }
});
