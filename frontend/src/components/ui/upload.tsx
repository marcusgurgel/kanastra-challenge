import { ReactElement } from "react";
import { FileUploader } from ".";



function Upload(): ReactElement{

  return (
    <FileUploader file={document.getElementById('file')} />
    );
  }
export { Upload }