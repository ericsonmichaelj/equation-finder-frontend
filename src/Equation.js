import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import { BlockMath } from 'react-katex';


export default function Equation(props) {
    return (
    <Grid item xs>
        <Card>
            <h3>{props.name}</h3>
            <BlockMath>{props.equation}</BlockMath>
            <br/>
        </Card>
    </Grid>
    )
}