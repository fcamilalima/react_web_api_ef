import React from 'react'

export default function Atividade(props) {

  function prioridadeCorMargem(param) {
    switch (param) {
      case '1':
        return 'border-primary'        
      case '2':
        return 'border-success'        
      case '3':
        return 'border-danger'        
        default:
          return 'Não definido'        
    }  
  }

  
  function prioridadeStyle(param) {
    switch (param) {
      case '1':
        return 'smile';    
      case '2':
        return 'meh';    
      case '3':
        return 'frown';    
      default:
        return 'Não definido';
    }
  }

  function prioridadeCorTexto(param) {
    switch (param) {
      case '1':
        return 'text-primary';        
      case '2':
        return 'text-success';        
      case '3':
        return 'text-danger';            
        default:
        return 'Não definido';            
    }  
  }

  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";      
      case "3":
        return "Alta";      
      default:
        return "Não definido";
    }    
  }

  return (
    
    <div key={props.ativ.id} className={'card mb-2 ' + prioridadeCorMargem(props.ativ.prioridade) + ' shadow-sm'}>
    <div className='card-body'>
      <div className='d-flex justify-content-between'>
        <h5 className='card-title'>
          <span className='bagde rounded-pill bg-secondary me-1'>
          &nbsp; {props.ativ.id} &nbsp; 
          </span> - {props.ativ.titulo}
        </h5>
        <h6>
          Prioridade: 
          <span className={'ms-1 ' + prioridadeCorTexto(props.ativ.prioridade)}>
            <i className={'me-1 far fa-' + prioridadeStyle(props.ativ.prioridade)}></i>
            {prioridadeLabel(props.ativ.prioridade)}
          </span>
        </h6>
      </div>
      <p className='card-text'>{props.ativ.descricao}</p>
      <div className='d-flex justify-content-end pt-2 m-0 border-top'>
        <button className='btn btn-sm btn-outline-primary me-2'
          onClick={() => props.pegarAtividade(props.ativ.id)}>
          <i className='fas fa-pen me-2'></i>
          Editar
        </button>
        <button className='btn btn-sm btn-outline-danger me-2' 
          onClick={() => props.deletarAtividade(props.ativ.id)}>
          <i className='fas fa-trash me-2'></i>
          Cancelar
        </button>
      </div>
    </div>
  </div>

  )
}
