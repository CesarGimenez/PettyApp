import React from 'react'
import petData from './petData.json'

import Profile from './Profile'

const PetProfile = (props) => {


  return <Profile {...petData} {...props}/>
}

export default PetProfile