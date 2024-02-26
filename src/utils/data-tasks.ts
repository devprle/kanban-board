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
    title: 'Market research',
    status: 'todo'
  },
  {
    id: 2,
    title: 'Competitor analysis',
    status: 'todo'
  },
  {
    id: 3,
    title: 'Develop business strategy',
    status: 'in-progress'
  },
  {
    id: 4,
    title: 'Identify potential partners',
    status: 'in-progress'
  },
  {
    id: 5,
    title: 'Negotiate partnerships',
    status: 'in-progress'
  },
  {
    id: 6,
    title: 'Develop marketing plan',
    status: 'in-progress'
  },
  {
    id: 7,
    title: 'Implement marketing plan',
    status: 'done'
  }
]
