import {useState} from "react";

const Modal = ({
    closeCreateModal,
  createNewTask
}: {
    closeCreateModal: () => void
    createNewTask : (title: string) => void
}) => {
    const [title, setTitle] = useState('')

  return (
    <div>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="w-96 rounded bg-white p-4">
          <div className="flex items-center justify-between">
            <h2 className='text-center'>Create Task</h2>
            <button onClick={closeCreateModal}>×</button>
          </div>
          <input type="text" className="my-3 w-full bg-white border border-black" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <div className="flex justify-between">
            <button onClick={closeCreateModal}>Cancel</button>
            <button onClick={()=>createNewTask(title)}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
