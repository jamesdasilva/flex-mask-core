import useMask from './hooks/useMask'
import './App.css';

let count = 0
function App() {

  count += 1
  console.log('count ', count)
  const { inputRef: credCardRef, getValue: getCredCard } = useMask("''R$ ;9999 9999 9999 9999", value => !!value)
  const { inputRef: cpfRef } = useMask("999.999.999-99")
  const { inputRef: phoneRef } = useMask("(99) 99999 9999")
  const { inputRef: dateRef } = useMask("99/99/9999")
  const { inputRef: moneyRef } = useMask("''R$ ;<<9.999.999,99")

  return (
    <form className='demo-form' onSubmit={e => console.log('submit form')}>
      <h3>Live Demo Flex Mask</h3><div onClick={e => {
        console.log('Cread Card: ', getCredCard()) 

      }}>Ver</div>

      <div className='input-box'>
        <label>Cartão de crédito:</label>
        <input 
          ref={credCardRef}
          type="text" 
          name="nomask" ></input>
      </div>
      
       <div className='input-box'>
        <label>Valor monetário:</label>
        <input 
          ref={moneyRef}
          type="text" 
          name="money"></input>
      </div>

      <div className='input-box'>
        <label>CPF:</label>
        <input 
          ref={cpfRef}
          type="text" 
          name="cpf"></input>
      </div>

      <div className='input-box'>
        <label>Telefone:</label>
        <input 
          ref={phoneRef}
          type="text" 
          name="phone"></input>
      </div>

      <div className='input-box'>
        <label>Data:</label>
        <input 
          ref={dateRef}
          type="text" 
          name="date"></input>
      </div>
    </form>
  );
}

export default App;
