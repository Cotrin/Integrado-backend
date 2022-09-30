import { Router } from "express";

import { addUniversity, deleteUniversity, getAllUniversities, getUniversityById, updateUniversity } from './controllers/UniversityController'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({
    message: 'Teste Integrado Backend',
    routes: {
      "GET": "http://localhost:3333/universities",
      "GETSINGLE": "http://localhost:3333/universities/:id",
      "POST": "http://localhost:3333/universities",
      "PUT": "http://localhost:3333/universities/:id",
      "DELETE": "http://localhost:3333/universities/:id",
    }
  })
})

routes.get('/universities', getAllUniversities)

routes.get('/universities/:id', getUniversityById)

routes.post('/universities', addUniversity)

routes.put('/universities/:id', updateUniversity)

routes.delete('/universities/:id', deleteUniversity)


export default routes
