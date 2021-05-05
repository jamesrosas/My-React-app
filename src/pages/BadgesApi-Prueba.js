import React, { useEffect, useMemo, useState } from 'react';
import './page-estilos/Badges.css';
import Badge from '../components/Badge';
import confLogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';

//+++++++++++++++++++++++++++++++++++++++++++
//EFECTIVAMENTE ESTA PRUEBA FUNCIONO (estar atentos a los comentarios)
//++++++++++++++++++++++++++++++++++++++

// Este archivo es una copia de prueba del archivo BadgesApi y aqui voy a replicar al pie de la letra lo visto en la clase de manera que pueda probar si funciona, y sino funciona entonces compararlo con el archivo que si funciona(BadgesApi.js), entonces para este archivo tendre el codigo que esciribire al pie de la letra de lo que se muestra en la clase.
function useSearchBadges(badgesList){
    const [inputQuery, setInputQuery] = useState('');
    const [badgesFilter, setBadgesFilter] = useState(badgesList);
    
    useMemo(() => {
      const result = badgesList.filter( badges => {
            return `${badges.firstName} ${badges.lastName}`.toLowerCase()
            .includes(inputQuery.toLowerCase());
        })

        setBadgesFilter(result)
    }, [badgesList, inputQuery]);//aqui si estamos haciendo uso de array, ya que este array hace las veces de segundo parametro de useMemo, aparentemente los corchetes de array para invocar estados solo pueden ser usados por hooks use propios de react, lo cual explicaria porque no se pueden usar arrays para lo mismo en los customHooks sino que hay que usar llaves para usar los estados de este mismo customHook.
    
    return {
        inputQuery, setInputQuery, badgesFilter
    }; //aqui retornamos los estados del customHook entre llaves y no arrays.
}

function BadgesApiPrueba (props){
    const badgesList = props.badgesList;

    const {inputQuery, setInputQuery, badgesFilter} = useSearchBadges(badgesList) //como vemos para un customHook sus estados internos no los traemos entre corchetes de array sino entre llaves


        return(
        <div className="badges-copia_container">
            <div className="hero">
                <img className="image-hero" src={confLogo} alt="hero paltzi Conf" />
            </div>
            <div className="badges-container">
                <div className="btn-container">
                    <Link className="btn-badge" to="/badge-page" >New Badge</Link>
                </div>
                <div className="badges-list">
                    <div className="search-container">
                        <label>Buscar Badge</label>
                        <input type="text" className="search-input" value={inputQuery} onChange={e=>{
                            setInputQuery(e.target.value);
                        }}></input>
                    </div>
                    <ul>
                        {badgesFilter.reverse().map((badge)=> {
                            return (
                            <li key={badge.id}>
                                <Link to={`/badge/${badge.id}`} className="link-style">
                                    <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter} avatar={badge.avatarUrl}/>
                                </Link>
                            </li>
                            )
                        })} 
                    </ul>
                    {badgesFilter.length === 0 && (
                        <div>
                            <h3 className="no-badges">No encontramos ningun Badge , crea uno nuevo dando click en New Badge</h3>
                        </div>
                    )}
                   
                </div>

            </div>
        </div>
        );
}
        
export default BadgesApiPrueba;