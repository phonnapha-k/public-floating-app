import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [note, setNote] = useState('');
  const [isEditable, setIsEditable] = useState(true);
  const [showIntro, setShowIntro] = useState(false);


  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }

    const saved = localStorage.getItem("note");
    if (saved) {setNote(saved);}

  }, []);

  const handleCloseIntro = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  const handleSave = () => {
    localStorage.setItem("note",note)
    setIsEditable(false);
    
  };

  const handleEdit = () => {
    setIsEditable(true);
  }; 

  const openFeedbackForm = () => {
    window.open('https://forms.gle/AgqcHrcB3mwDS6AF8', '_blank');
  };

  return (
    <div className = "app-panel">

      {showIntro && (
        <div className="popup">
          <h3>👋 Welcome to Quick Note</h3>
          <p>This app helps you quickly write, save, and edit your notes.</p>
          <ul style={{ textAlign: 'left', marginTop: '10px' }}>
            <li>Type your note</li>
            <li>Click Save to lock editing</li>
            <li>Click Edit to update again</li>
          </ul>
          <button onClick={handleCloseIntro}>Got it!</button>
        </div>
      )}


      <div className='header'>
        <h3>Quick Note</h3>
      </div>

      <div className='feedback'>
        <button onClick={openFeedbackForm}>
          🗨️ Feedback
        </button> 
      </div>

      <label className='note-area'>
        <textarea name='textArea'
        value={note}
        onChange={(e) => setNote(e.target.value)}
        readOnly={!isEditable}
        placeholder='Write your note ... '></textarea>
      </label>


      <div className='actions'>
        <button onClick={handleSave}> Save </button>  
        <button onClick={handleEdit}> Edit </button>
      </div>
    </div>
  )
}

export default App
