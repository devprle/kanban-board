export type Status = 'todo' | 'in-progress' | 'done'
export interface Task  {
  id: number
  title: string
  status: Status
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Review request for proposal',
    status: 'todo'
  },
  {
    id: 2,
    title: 'Develop BIM model of wind shear impact',
    status: 'todo'
  },
  {
    id: 3,
    title: 'Prepare for client meeting with Addisons',
    status: 'in-progress'
  },
  {
    id: 4,
    title: 'Addison client meeting Thursday 11 a.m',
    status: 'in-progress'
  },
  {
    id: 5,
    title: 'Write speech on housing trends',
    status: 'in-progress'
  },
  {
    id: 6,
    title: 'Speak to realtors dinner Wed 7 p.m.',
    status: 'in-progress'
  },
  {
    id: 7,
    title: 'Write meeting minutes from client meeting',
    status: 'done'
  }
]
