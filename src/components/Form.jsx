import { useFormik } from 'formik';
import * as Yup from 'yup';
import Subtitulos from './Subtitulos';
import Input from './Input';
import Select from './Select';
import enviarDatosAPI from './PeticionPOST'
import { useState } from 'react';

const MyForm = () => {


    const [sms, setSms] = useState("")
    const formik = useFormik({

        initialValues: {

            nombre: '',

            email: '',

            telefono: '',

            direccion: '',

            ciudad: '',

            codigopostal: '',

            entrenamiento: '',

            objetivo: '',

            horario: '',


        },

        validationSchema: Yup.object({

            nombre: Yup.string().required('El nombre es obligatorio').max(20, 'Must be 20 characters or less'),

            email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),

            telefono: Yup.string().required('El teléfono es obligatorio').matches(/^\d+$/, 'El número de teléfono debe contener solo dígitos').min(9, 'El número de teléfono debe tener al menos 9 dígitos'),

            direccion: Yup.string().required('La dirección obligatoria').max(30, 'Must be 30 characters or less'),

            ciudad: Yup.string().required('La ciudad es obligatoria'),

            codigopostal: Yup.string().required('El código postal es obligatorio').matches(/^\d+$/, 'El código postal debe tener solo dígitos').min(5, 'El código postal debe tener 5 dígitos'),
            entrenamiento: Yup.string().required('Debes seleccionar un elemento').oneOf(['pesas', 'cardio', 'pilates', 'spinning', 'yoga'], "Error: Debes de eligir una opción"),

            objetivo: Yup.string().required('Debes seleccionar un elemento').oneOf(['perderPeso', 'tonificar', 'ganarMusculo'], "Error: Debes de eligir una opción"),

            horario: Yup.string().required('Debes seleccionar un elemento').oneOf(['mañana', 'tarde', 'noche'], "Error: Debes de eligir una opción")
        }),

        onSubmit: (values) => {

            // Enviar datos a la API
            enviarDatosAPI(values, setSms);


        },

    });


    const opciones = [
        { value: 'pesas', label: 'Pesas' },
        { value: 'cardio', label: 'Cardio' },
        { value: 'pilates', label: 'Pilates' },
        { value: 'spinning', label: 'Spinning' },
        { value: 'yoga', label: 'Yoga' },
    ];
    const opciones1 = [
        { value: 'perderPeso', label: 'Perder Peso' },
        { value: 'tonificar', label: 'Tonificar' },
        { value: 'ganarMusculo', label: 'Ganar Músculo' },
    ];
    const opciones2 = [
        { value: 'mañana', label: 'Mañana' },
        { value: 'tarde', label: 'Tarde' },
        { value: 'noche', label: 'Noche' },
    ];



    return (

        <>


            <form onSubmit={formik.handleSubmit}>
                <div className="formGroup">
                    <Subtitulos text={'Datos Personales'} />

                    <Input label={"Nombre"} name={"nombre"} value={formik.values.nombre} onchange={formik.handleChange} err={formik.errors.nombre} />
                    <Input label={"Email"} name={"email"} value={formik.values.email} onchange={formik.handleChange} err={formik.errors.email} />
                    <Input label={"Teléfono"} name={"telefono"} value={formik.values.telefono} onchange={formik.handleChange} err={formik.errors.telefono} />





                </div>
                <div className="formGroup">

                    <Subtitulos text={'Contacto'} />
                    <label>Dirección</label>

                    <input type="text" name="direccion" value={formik.values.direccion} onChange={formik.handleChange} />

                    {formik.errors.direccion && <p className="error">{formik.errors.direccion}</p>}

                    <label>Ciudad</label>
                    <input type="text" name="ciudad" value={formik.values.ciudad} onChange={formik.handleChange} />

                    {formik.errors.ciudad && <p className="error">{formik.errors.ciudad}</p>}

                    <label>Código Postal</label>
                    <input type="text" name="codigopostal" value={formik.values.codigopostal} onChange={formik.handleChange} />

                    {formik.errors.codigopostal && <p className="error">{formik.errors.codigopostal}</p>}

                </div>

                <div className="formGroup">
                    <Subtitulos text={'Escoge el Tipo de Entrenamiento Preferido'} />


                    <Select label={"Tipo de Entrenamiento:"} value={formik.values.entrenamiento} name={"entrenamiento"} onchange={formik.handleChange} opciones={opciones} err={formik.errors.entrenamiento} />



                    <Subtitulos text={'Escoge tu objetivo'} />

                    <label>Objetivo:</label>
                    <select value={formik.values.objetivo} name='objetivo' onChange={formik.handleChange}>
                        <option value="">Seleccionar...</option>
                        {opciones1.map((opcion) => (
                            <option key={opcion.value} value={opcion.value}>
                                {opcion.label}
                            </option>
                        ))}
                    </select>
                    {formik.errors.objetivo && <p className="error">{formik.errors.objetivo}</p>}
                    <Subtitulos text={'Escoge tu horario'} />

                    <label>Horario:</label>
                    <select value={formik.values.horario} name='horario' onChange={formik.handleChange}>
                        <option value="">Seleccionar...</option>
                        {opciones2.map((opcion) => (
                            <option key={opcion.value} value={opcion.value}>
                                {opcion.label}
                            </option>
                        ))}
                    </select>
                    {formik.errors.horario && <p className="error">{formik.errors.horario}</p>}
                </div>
                <button type="submit">Enviar</button>

            </form>


            <p>{sms}</p>

        </>

    );

};
export default MyForm;