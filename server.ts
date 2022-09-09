import express, {Request, Response, NextFunction} from 'express'

const PORT = 3000
const app = express()

app.use ((req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now())
    next()
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message)
    res.status(401).send(err.message)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

