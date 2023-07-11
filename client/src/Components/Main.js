import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DisplayStudent } from './DisplayStudent'
import { AddStudent } from './AddStudent'
import { EditStudent } from './EditStudent'

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DisplayStudent />} />
                <Route path='/addStudent' element={<AddStudent />} />
                <Route path='/editStudent' element={<EditStudent />} />
            </Routes>
        </div>
    )
}

