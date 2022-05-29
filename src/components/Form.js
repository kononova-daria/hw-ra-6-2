import React, {useState} from 'react';

function Form({addNote}) {
  const [form, setForm] = useState({text: ''});

  const handleForm = (event) => {
    setForm((prev) => ({...prev, text: event.target.value}));
  }

  const handleClickBtnForm = () => {
    if (!form.text) return;
    addNote(form);
    setForm((prev) => ({...prev, text: ''}));
  }

  return (
    <form className="form-container">
      <div className="new-note-container">
        <label htmlFor="note">New Note:</label>
        <textarea className="input-note" name="note" value={form.text} onChange={handleForm}></textarea>
      </div>
      <div className="btn-container">
        <button className='form-btn' type='button' onClick={handleClickBtnForm}>Добавить</button>
      </div>
    </form>
  );
}

export default Form;