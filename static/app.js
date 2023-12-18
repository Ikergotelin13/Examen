console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...


document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-desplegable');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.cerrar-desplegable');

    menuBtn.addEventListener('click', function () {
        sidebar.style.width = '250px';
    });

    closeBtn.addEventListener('click', function () {
        sidebar.style.width = '0';
    });
});


// app.js

document.addEventListener('DOMContentLoaded', function () {
    const btnNuevaEntrada = document.querySelector('.btn-nueva-entrada');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const cerrarPopup = document.getElementById('cerrar-popup');

    btnNuevaEntrada.addEventListener('click', function () {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    cerrarPopup.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});

