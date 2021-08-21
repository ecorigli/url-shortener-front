import React from 'react';
import DomainList from '../domains/DomainList';

const Sidebar = () => {
    return ( 
        <aside>
            <h1><span>Shortener</span></h1>

            <div className="domains">
                <h2>Your Domains</h2>
                <DomainList />
            </div>
        </aside>
     );
}
 
export default Sidebar;