


const enviarDatosAPI = async (datos, setSms) => {


    const respuesta = await fetch('https://api.fitlife.com/registro', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

        },

        body: JSON.stringify(datos),

    });


    if (respuesta.ok) {

        // Mostrar mensaje de éxito

        setSms('Usuario registrado correctamente');

    } else {

        // Mostrar mensaje de error

        setSms('Error al registrar usuario');

    }


};
export default enviarDatosAPI;