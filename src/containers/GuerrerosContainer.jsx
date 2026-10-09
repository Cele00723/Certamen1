import React, { useState } from 'react';
import GuerrerosForm from "../components/GuerrerosForm";
import GuerrerosView from "../components/GuerrerosView";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function GuerrerosContainer() {
    const [guerreros, setGuerreros] = useState([]);
    const [alertaVisible, setAlertaVisible] = useState(false);
    const [alertaEliminacion, setAlertaEliminacion] = useState(false)

    const handleCreate = (guerrero) => {
        setGuerreros([...guerreros, guerrero]);
        setAlertaVisible(true);
    };

    const handleDelete = (guerrero) => {
        const filtrada = guerreros.filter((g) => { return g?.nombre !== guerrero?.nombre });
        setGuerreros(filtrada);
        setAlertaEliminacion(true);
    };

    return (
        <>
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-lg-5 mb-4">
                        <GuerrerosForm onAddGuerrero={handleCreate} />
                    </div>
                    <div className="col-lg-7">
                        <GuerrerosView guerreros={guerreros} onQuitar={handleDelete} />
                    </div>
                </div>
            </div>

            <Snackbar 
                open={alertaVisible} 
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }} 
                autoHideDuration={1000}
                onClose={() => setAlertaVisible(false)}
            >
                <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
                    ¡Guerrero registrado en el ejército de Sauron :D!
                </Alert>
            </Snackbar>

            <Snackbar 
                open={alertaEliminacion} 
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }} 
                autoHideDuration={1000}
                onClose={() => setAlertaEliminacion(false)}>
                <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
                    ¡¡¡Asesinado por la aparición!!! 
                </Alert>
            </Snackbar>
        </>
    );
}

export default GuerrerosContainer;