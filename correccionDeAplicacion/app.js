// referencias al DOM
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// para saber si estamos editando
let editandoIndex = null;

mostrarUsuarios();

// evento del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();

    if (!nombre || !email) {
        alert("Por favor llena todos los campos");
        return;
    }

    // validar duplicados
    const existe = usuarios.some((user, index) => 
        user.email === email && index !== editandoIndex
    );

    if (existe) {
        alert("Este correo ya está registrado");
        return;
    }

    if (editandoIndex !== null) {
        // editar
        usuarios[editandoIndex] = { nombre, email };
        editandoIndex = null;
    } else {
        // agregar
        usuarios.push({ nombre, email });
    }

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarUsuarios();
    form.reset();
});

// mostrar usuarios con botones
function mostrarUsuarios() {
    if (usuarios.length === 0) {
        salida.innerHTML = "No hay usuarios registrados";
        return;
    }

    let html = "";

    usuarios.forEach((user, index) => {
        html += `
            <div style="margin-bottom:10px;">
                <strong>${index + 1}.</strong> ${user.nombre} - ${user.email}
                <button onclick="editarUsuario(${index})"> Editar</button>
                <button onclick="eliminarUsuario(${index})"> Eliminar</button>
            </div>
        `;
    });

    salida.innerHTML = html;
}

// eliminar usuario
function eliminarUsuario(index) {
    const confirmar = confirm("¿Seguro que quieres eliminar este usuario?");
    if (!confirmar) return;

    usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarUsuarios();
}

// editar usuario
function editarUsuario(index) {
    const user = usuarios[index];

    document.getElementById('nombre').value = user.nombre;
    document.getElementById('correo').value = user.email;

    editandoIndex = index;
}

// descargar JSON
descargarBtn.addEventListener('click', function () {
    const contenidoJSON = JSON.stringify(usuarios, null, 2);

    const blob = new Blob([contenidoJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.json';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
});