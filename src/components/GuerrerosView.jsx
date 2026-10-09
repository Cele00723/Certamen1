import React from 'react'
import { Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, Button, Chip, generateUtilityClass } from '@mui/material';

function GuerrerosView({guerreros=[], onQuitar = null}) {

    if(!guerreros?.length){
        return  <Alert severity="info">Debes ingresar al menos un guerrero!!!.</Alert>
    }

const handleQuitar = (guerrero)=>{
    onQuitar(guerrero);
} 
  return (
    <Card>
        <CardHeader title="Lista de juegos"></CardHeader>
        <CardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Tipo Guerreo</TableCell>
                            <TableCell>Nivel Guerrero</TableCell>
                            <TableCell>Clasificación</TableCell>
                            <TableCell>Acción</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guerreros.map((g)=>
                            <TableRow key={g.nombre}>
                                <TableCell>{g.nombre}</TableCell>
                                <TableCell>{g.tipo}</TableCell>
                                <TableCell>{g.nivel}</TableCell>
                                <TableCell>{g.categoria}</TableCell>
                                <TableCell>{g.amenaza }</TableCell>
                                <TableCell>
                                    <Chip 
                                        label={g.tipo} 
                                        color={g.tipo === "Orco" ? "warning" : "error"} 
                                    />
                                </TableCell>

                                <TableCell>
                                    <Button variant='outlined' color="error" onClick={()=>handleQuitar(g)} >Quitar Guerrero</Button>
                                </TableCell>
                        </TableRow>
                        
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  )
}

export default GuerrerosView