import { Router } from "express";

import { addUniversity, deleteUniversity, getAllUniversities, getUniversityById, updateUniversity } from './controllers/UniversityController'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Teste Integrado Backend' })
})

routes.get('/universities', getAllUniversities)

routes.get('/universities/:id', getUniversityById)

routes.post('/universities', addUniversity)

routes.put('/universities/:id', updateUniversity)

routes.delete('/universities/:id', deleteUniversity) 


export default routes
