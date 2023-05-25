
import React from "react"
import {Card, DonutChart} from '@tremor/react'
import { Title } from "@tremor/react";

const Grafico = () => {

    const ventas = [
        {
            name: 'Torta Frutilla',
            price: 2500,
        },
        {
            name: 'Torta palvola',
            price: 3500,
        },
        {
            name: 'Torta Manzanila',
            price: 1500,
        },
    ]

    return (
         
        <Card>
            <Title>Record venta de tortas</Title>
            <DonutChart
                data={ventas}
                category="price"
                dataKey= 'name'
                marginTop='mt-6'
                color={["slate", "violet", "indigo", "rose", "cyan", "amber" ]}
            />

        </Card>
    );
}

export default Grafico;