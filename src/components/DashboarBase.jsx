import {  Tab, Col } from "@tremor/react";
import { Title, Text, TabList } from "@tremor/react";
import React, { useState } from "react"
import GripMap from "./GripMap";
import Grafico from "./Grafico";




const DashboarBase = () => {

    const [selectedView, setSelectedView] = useState(1)

    return (
         
        <main className='bg-slate-200 P-6 sm:p-10' >
             <Title>Dashboard</Title>
             <Text>ejemplo</Text>

             <TabList defaultValue={selectedView} handleselect={value=> setSelectedView(value)  } marginTop="mt-6" > 
                 <Tab value={1} text="Principal" />
                <Tab value={2} text="Detalles" />
             </TabList>
             {
                selectedView === 1 ? (
                    <>
                    <GripMap/>
                    
                    <Col marginTop='mt-6' >
                        
                        <Grafico/>
                    
                    </Col>
                    </>
                ): (
                    <>
                    <Col marginTop="mt-6" >

                 
                   

                    </Col>
                    </>
                )
                
             }
        </main>
    );
}

export default DashboarBase;