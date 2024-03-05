import { NavLink } from 'react-router-dom';
import { ReactElement } from 'react';

function Header(): ReactElement {
  return (
        <>
            <div className='flex justify-center font-semibold text-green-300'>KANASTRA - SISTEMA DE COBRANÇA EM LOTE</div>
            <ul className='flex justify-center items-center gap-8'>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/upload'}>Upload</NavLink></li>
                <li><NavLink to={'/list'}>Histórico</NavLink></li>
            </ul>
        </>
                

            
    );
}

export { Header }
