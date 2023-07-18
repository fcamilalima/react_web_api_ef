import { useEffect, useState } from 'react';

const  atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual);

  useEffect(() => {
    if (props.ativSelecionada !== 0) setAtividade(props.ativSelecionada);
  }, [props.ativSelecionada]);

  const inputTextHandler = (e) => {
    const {name, value} = e.target;
    setAtividade({...atividade, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.ativSelecionada.id !== 0) 
        props.atualizarAtividade(atividade);
    else 
        props.addAtividade(atividade);

    setAtividade(atividadeInicial);
  }

  const handleCancelar = (e) => {
    e.preventDefault();

    props.cancelarAtividade();
    setAtividade(atividadeInicial);
  }

  function atividadeAtual(){
    if(props.ativSelecionada.id !== 0) {
        return props.ativSelecionada;
    } else {
        return atividadeInicial;
    } 
  }

  return (
    <>
        <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
        <form className="row g-3" onSubmit={handleSubmit}>

            <div className='col-md-6'>
                <label className='form-label'>
                    Título
                </label>
                <input 
                    id='titulo' 
                    name='titulo' 
                    onChange={inputTextHandler}
                    type='text' 
                    className='form-control'
                    value={atividade.titulo} 
                />
            </div>    

            <div className='col-md-6'>
                <label className='form-label'>Prioridade</label>
                <select 
                    id="prioridade" 
                    name="prioridade" 
                    className="form-select" 
                    onChange={inputTextHandler}
                    value={atividade.prioridade}
                >
                    <option defaultValue="0">Selecione..</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>
    
            <div className='col-md-12'>
                <label className='form-label'>
                    Descrição
                </label>
                <textarea 
                    id='descricao' 
                    name='descricao' 
                    onChange={inputTextHandler}
                    type='text' 
                    className='form-control' 
                    value={atividade.descricao}
                />
                <hr />
            </div>
            <div className='col-md-12 mt-0'>
            {
                atividade.id === 0 ? (
                <button 
                    className='btn btn-outline-secondary' 
                    type="submit"
                >
                    <i className='fas fa-plus me-2'></i>
                    Atividade
                </button>
                ):(
                <>
                    <button 
                        className='btn btn-outline-success me-2'
                        type="submit"
                    >
                        <i class="fas fa-save me-2"></i>
                        Salvar
                    </button>
                    <button 
                        className='btn btn-outline-danger'
                        onclick={handleCancelar}
                    >
                        <i class="fa fa-window-close me-2" aria-hidden="true"></i>
                        Cancelar
                    </button>
                </>
                )
            }
            </div>
        </form>
    </>
  )
}
