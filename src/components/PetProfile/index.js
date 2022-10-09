import React from 'react'
import petData from '../../../pettyData.json'
import Profile from './Profile'

const PetProfile = (props) => {
  const id = props.route.params.id
  const petFilter = petData.filter(pet => pet.id == id)
  const pet = petFilter[0]
  return <Profile {...pet} {...props}/>
}

export default PetProfile