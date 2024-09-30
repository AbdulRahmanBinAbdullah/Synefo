






import React, { useState } from 'react'
import { Container, Grid } from '@mui/material'
import AppBarComponent from './components/Appbarcomponent'
import PlatformButtons from './components/platformbuttons'
import InstanceTable from './components/Instancetable'
import DiscoveredAssets from './components/Discoveredasset'


const platforms = ['Amazon Web Services']



const mockData = {
  'EC2 Instances': [
    { name: '4c2dfss4', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf141', event: 'success' },
    { name: '4c2dfss4', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf141', event: 'success' },
    { name: '4c2dfss4', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf141', event: 'success' },
        { name: '4c2dfss4', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf141', event: 'success' },

  ],
  'EKS Instances': [
    { name: 'EKS-dsfd3', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf251', event: 'warning' },
    { name: 'EKS-dsfd3', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf251', event: 'warning' },
    { name: 'EKS-dsfd3', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf251', event: 'warning' },


  ],
  'Lambda Instances': [
    { name: 'Lambda-1', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf341', event: 'success' },
    { name: 'Lambda-1', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf341', event: 'success' },
    { name: 'Lambda-1', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf341', event: 'success' },



  ],
  'Batch Instances': [
    { name: 'Batch-123', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf441', event: 'success' },
    { name: 'Batch-123', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf441', event: 'success' },
    { name: 'Batch-123', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf441', event: 'success' },


  ],
  'EBS': [
    { name: 'Batch-123', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf441', event: 'success' },
    { name: 'Batch-123', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf441', event: 'success' },
    { name: 'Batch-123', landingZone: 'AWS (ID123)', productEnclave: 'VPC-dsf441', event: 'success' },


  ],
}

export default function Component() {
  const [activePlatform, setActivePlatform] = useState(platforms[0])

  const handlePlatformClick = (platform) => {
    setActivePlatform(platform)
  }

  return (
    <Container maxWidth="lg">
      <AppBarComponent />
      <DiscoveredAssets/>
      <PlatformButtons
        platforms={platforms}
        activePlatform={activePlatform}
        onPlatformClick={handlePlatformClick}
      />
      <Grid container spacing={2}>
        {Object.keys(mockData).map((instanceType, index) => (
          <Grid item xs={12} key={index}>
            <InstanceTable type={instanceType} instances={mockData[instanceType]} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}