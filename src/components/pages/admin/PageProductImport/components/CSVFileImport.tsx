import axios, { AxiosError } from "axios";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    console.log("uploadFile to", url);

    // Get the presigned URL
    if (!file) {
      console.log("Error: file was not uploaded");
    }
    // @ts-ignore
    const fileName = file.name;

    try {
      const response = await axios({
        method: "GET",
        url,
        params: {
          name: encodeURIComponent(fileName),
        },
        headers: {
          Authorization: `Basic ${localStorage.getItem("authorization_token")}`,
        },
      });

      const result = await fetch(response.data, {
        method: "PUT",
        body: file,
      });
      toast.success(`[Success] file ${fileName} uploaded successfully`);
      setFile(undefined);
    } catch (error: any | AxiosError) {
      if (!error.isAxiosError) {
        return toast.error(error.message);
      }

      if (error.response.status === 401) {
        return toast.error(
          `[Unauthorised]: Sorry, but you are not allowed to request ${url}`
        );
      }
      if (error.response.status === 403) {
        return toast.error(
          `[InvalidCredentials]: Sorry, but your credentials "{localStorage.authorization_token: ${localStorage.authorization_token}}" are not valid`
        );
      }
      toast.error(`[UnhandledException]: ${error.message}`);
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
