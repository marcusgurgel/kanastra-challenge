
import React, { useState, useEffect } from "react";

import Axios from "axios";
import { ReactElement } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from ".";

function List(): ReactElement {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const { data } = await Axios.get(
      import.meta.env.VITE_API_URL +  "/list/"
    ).catch(err => {
      alert(err.message);
    });
    const files = data.file_name_list;
    setFiles(files);
    console.log(files);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const list = files.map(element => <TableRow><TableCell>{element}</TableCell></TableRow>);



  return (
        <>
          <Table>
            <TableHeader>
              <TableRow><TableCell>HISTÓRICO DOS ARQUIVOS DE COBRANÇA ENVIADOS</TableCell></TableRow>
            </TableHeader>
            <TableBody>
            {list}
            </TableBody>
            </Table>
        </>
        
  );
  }

export { List }
