import React, { useContext, useEffect } from 'react';
import Domain from './Domain';
import domainContext from '../../context/domains/domainContext';
import AlertContext from '../../context/alerts/alertContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const DomainList = () => {

    const domainsContext = useContext(domainContext);
    const { mensaje, domains, obtenerDomains } = domainsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    useEffect(() => {
        if(mensaje) {
            showAlert(mensaje.msg, mensaje.categoria);
        }

        obtenerDomains();
        
    }, [mensaje]);

    if(domains.length === 0 ) return <p>NO DOMAINS</p>;

    console.log(domains)
    return ( 

        <ul className="listado-domains">
            
        
            { alert   ? ( <div className={`alert ${alert.categoria} `}>{alert.msg}</div>  ) : null  }


            <TransitionGroup>
                {domains.map(domain => (
                    <CSSTransition
                        key={domain._id}
                        timeout={200}
                        classNames="domain"
                    >
                        <Domain 
                            domain={domain}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default DomainList;