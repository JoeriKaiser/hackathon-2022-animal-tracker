import './form.css';

const Form = () => {
  return (
    <form className='form'>
      <label className='label'>
        <span className='span'>Nom :</span>
        <input type='text' className='input' />
      </label>
      <label className='label'>
        <span className='span'>Age :</span>
        <input type='text' className='input' />
      </label>
      <label className='label'>
        <span className='span'>Poids :</span>
        <input type='text' className='input' />
      </label>
      <label className='label'>
        <span className='span'>Animal :</span>
        <select id='select'>
          <option value=''>Chat</option>
          <option value=''>Chien</option>
          <option value=''>Hamster</option>
          <option value=''>Lapin</option>
          <option value=''>Souris</option>
          <option value=''>Poisson Rouge</option>
          <option value=''>Tortue</option>
        </select>
      </label>
      <button type='submit' className='button'>Ajouter votre Chou'Pets</button>
    </form>
  );
};

export default Form;
