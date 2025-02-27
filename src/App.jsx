import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [userModal, setModal] = useState(false)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(res => setUsers(res)
      )

  }, [])


  const openModalBtn = (user) => {
    setSelectedUser(user)
    setModal(true)
  }
  const closeModalBtn = () => {
    setSelectedUser(null)
    setModal(false)
  }

  return (
    <div>

      {userModal &&
        <div className="modalBg">
          <div className="modal">
            <h1>👨🏻 {selectedUser?.name}</h1>
            <p>📞 {selectedUser?.phone}</p>
            <a href="#">📨 {selectedUser?.email}</a>
            <span className="closeBtn" onClick={() => closeModalBtn()}>&times;</span>
          </div>
        </div>
      }
      <main>
        {users.map((user) => (
          <div key={user.id} className="preson-item" onClick={() => openModalBtn(user)}>
            <h1>👨🏻 {user.name}</h1>
            <p>📞 {user.phone} </p>
            <a href="#"> 📨 {user.email}</a>
          </div>))
        }
      </main>

    </div>
  )
}

export default App
