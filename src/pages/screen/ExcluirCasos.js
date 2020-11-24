import React, { useState } from 'react'
import { Button, Grid, TextField, } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'


export default function ExcluirCasos(props) {
    let key = "eb78911a-32c9-4b2e-ba9b-aac38f02543e"
    const [ocorrencia, setOcorrencia] = useState("")

    const limpar = () => {
        setOcorrencia("")
    }

    const excluirRegistro = () => {

        let objeto = {
            ocorrencia: ocorrencia
        }


        Firebase
            .database()
            .ref(`ocorrencias/${key}`)
            .remove()
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })
        }

        return (
            <Grid container spacing={1} >
                <Grid item sm={12} xs={12}>
                    <div style={{ marginTop: '10px', marginBottom: '20px', fontSize: '30px', fontFamily: 'DejaVu Sans Mono, monospace', 'color': '#3f51b5', textShadow: '0 0 1px #242c58' }}>
                        Excluir Casos
                </div>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <TextField value={ocorrencia} onChange={(e) => setOcorrencia(e.target.value)} label="Nome da Ocorrencia" variant="outlined" size="small" type="email" style={{ width: "100%", marginBottom: 10, marginRight: '10px' }} />
                    <br />
                    <Button variant="outlined" color="primary" onClick={() => props.setScreen(0)}> Cancelar </Button>
                    <Button variant="outlined" color="primary" onClick={excluirRegistro} style={{ marginLeft: '5px', backgroundColor: 'red', color: 'white' }}> Excluir </Button>

                </Grid>
            </Grid>
        )
    }
