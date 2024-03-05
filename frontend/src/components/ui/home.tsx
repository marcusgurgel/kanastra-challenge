import { ReactElement } from "react";


function Home(): ReactElement {
    return (
        <>  
            <div>
                <div className="font-semibold text-green-300">INFORMAÇÕES:</div>
                <p>
                    <span className="text-green-300">Para enviar um arquivo de cobrança, acesse o menu</span> Upload
                </p>
                <p>
                    <span className="text-green-300">Para visualizar todos os arquivos enviados e salvos, acesse o menu</span> Histórico
                </p>
            </div>
        </>
    );
}

export { Home }
