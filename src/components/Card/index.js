import {useState} from 'react';
import Button from '../button';

const Card = () =>{

    const [valor, setValor] = useState(0)

    function Adiconar () {
        setValor(valor + 1)
    }

    function Remover () {
        setValor(valor -1)
    }


    return(
        <div className="card">
            <h5 className="card-header">
                Meu primeiro Card
            </h5>
            <div className="card-body">
               <Button
                    type="button"   
                    className="btn btn-success"
                    onClick={Adiconar}
                >
                    Adiconar
               </Button>
               <Button 
                    type="button"   
                    className="btn btn-danger"
                    onClick={Remover}
                    >
                    Remover
               </Button>
                <p>{valor}</p>
            </div>
        </div>
    )
        
    
}

export default Card;