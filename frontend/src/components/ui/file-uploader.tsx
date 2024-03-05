import React, { useState } from "react";
import axios from "axios";

type FileUploaderProps = {
  file: File;
}

const FileUploader = ({ file }: FileUploaderProps) => {

  const [fileTmp, setFileTmp] = useState(file);
  const [message, setMessage] = useState("");
  
  function handleChange(event) {
    setFileTmp( event.target.files[0])
  }

const UPLOAD_ENDPOINT = import.meta.env.VITE_API_URL + "/upload/";

const handleSubmit = async (event) => {

  

  event.preventDefault();
  const formData = new FormData();
  formData.append("file", fileTmp);

  axios.post(UPLOAD_ENDPOINT, formData, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
      .then(res => {
        console.log(res.data);
        setMessage(<div>Arquivo {res.data.file_url} salvo com sucesso!</div>);
      })
      .catch(err => {
        console.log(err);
        setMessage(<div>Erro {err.message}</div>);
        
      })
};

  return (
    <form onSubmit={handleSubmit}>
    <div className = "flex flex-col gap-6">
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input onChange={handleChange} id="file" type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv" />
      </div>
      {fileTmp && (
        <section>
          <p className="pb-6">File details:</p>
          <ul>
            <li>Name: {fileTmp.name}</li>
            <li>Type: {fileTmp.type}</li>
            <li>Size: {fileTmp.size} bytes</li>
          </ul>
        </section>
      )}

      {fileTmp && <button className="rounded-lg bg-green-800 text-white px-4 py-2 border-none font-semibold" type="submit" >Upload the file</button>}
    </div>
    <div>{message}</div>
    </form>
  );
};

export { FileUploader };
