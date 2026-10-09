import { Card, CardHeader, CardContent, CardActions, TextField, Button, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Slider, Select, MenuItem, Rating, Typography, InputLabel } from '@mui/material';
import React, { useState } from 'react'



function GuerrerosForm({ onAddGuerrero = null }) {

    const categorias = [{label: "Capitan", value: "capitan"}, 
        {label: "Berserker", value: "berserker"},
        {label: "Explorador", value: "explorador"},
        {label: "Asediador", value: "asediador"}
    ]

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [nivel, setNivel] = useState(1);
    const [categoria, setCategoria] = useState(categorias[0].value);
    const [amenaza, setAmenaza] = useState(0);


    const limpiarFormulario =()=>{
        setNombre("");
        setTipo("");
        setNivel(1);
        setCategoria(categorias[0].value);
        setAmenaza(0)
    } 
    


    const handleClick = ()=>{
        const guerrero = {};
        guerrero.nombre = nombre;
        guerrero.tipo = tipo;
        guerrero.nivel = nivel;
        guerrero.categoria = categoria;
        guerrero.amenaza = amenaza;

        onAddGuerrero(guerrero);
        limpiarFormulario();
    }


  return (
    <Card raised>
        <CardHeader title="Registrar al Guerrero" ></CardHeader>

        <CardContent>

        <div className="mt-3">
            <TextField label="Nombre" value={nombre}
            onChange={e=>setNombre(e.target.value)}
            fullWidth id='nombre-guerrero' ></TextField>
        </div>

        <div className="mt-3">
            <FormLabel component="legend">Tipo de Guerrero</FormLabel>
            <RadioGroup
                row
                value={tipo}
                onChange={e => setTipo(e.target.value)}
                id="tipo-guerrero"
                    >
            <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
            <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
            </RadioGroup>
        </div>


        <div className="mt-3">
            <Typography gutterBottom>Nivel de Combate ({nivel})</Typography>
            <Slider
                value={nivel}
                onChange={(e, newValue) => setNivel(newValue)}
                min={1}
                max={100}
                valueLabelDisplay="auto"
                id="nivel-combate"
            />
        </div>

               
        <div className="mt-3">
            <FormControl fullWidth>
            <InputLabel id="label-categoria">Categoría / Rango</InputLabel>
                <Select
                labelId="label-categoria"
                id="categoria-guerrero"
                value={categoria}
                label="Categoría / Rango"
                onChange={e => setCategoria(e.target.value)}
                >
            {categorias.map((c) => (
                <MenuItem key={c.value} value={c.value}> {c.label} </MenuItem>))}
                </Select>
            </FormControl>
        </div>

          
        <div className="mt-3">
            <Typography component="legend">Nivel de Amenaza / Furia</Typography>
            <Rating
                name="amenaza-rating"
                value={amenaza}
                onChange={(e, newValue) => setAmenaza(newValue)}
                max={5}
                id="amenaza-guerrero"
            />
        </div>

    
        </CardContent>
        <CardActions>
            <Button onClick={handleClick} fullWidth variant='contained' color="primary">
                    Registrar Guerrero
            </Button>
        </CardActions>



    </Card>
    

  )
}

export default GuerrerosForm