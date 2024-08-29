import express, {NextFunction, Request, Response} from 'express'
import taskRoutes from './routes/tasks'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', taskRoutes)// Add this line to mount the Task API routes

app.get('/', (req: Request, res: Response) => {
    const usage = {
        'All': 'GET /tasks',
        'Task': 'GET /tasks/id',
        'Delete': 'DELETE /tasks/id',
        'Update': 'PUT /tasks/id {id,title,description,completed}',
        'Add': 'POST /tasks {id,title,description,completed}'
    }
    res.json(usage)
})

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong')
})

app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
})