fetch('menu.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('menuNavbar').innerHTML = data;
    })