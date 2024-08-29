import { json } from "stream/consumers";
import { Task } from "../models/task";

async function add(params: {title: string, description: string, completed: boolean}) {
    const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(params)
    })
    const content = await res.json()
    console.log(content)
}

async function update(params: {id: number, title: string, description: string, completed: boolean}) {
    const res = await fetch(`http://localhost:3000/tasks/${params.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(params)
    })
    const content = await res.json()
    console.log(content)
}

update({
    id: 2, 
    title: 'Soon',
    description: '$1',
    completed: true
})
