import { Link } from "react-router-dom";
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./PDFAssets";
import { pdf } from "@react-pdf/renderer";

const handleGeneratePDF = async (doc) => {
  const blob = await pdf(doc).toBlob();
  return blob;
};

function Main() {
  return (
    <div>
      <Link to="/pdf">
        <button style={{ margin: "10px" }}>Show PDF</button>
      </Link>
      <PDFDownloadLink document={<MyDocument />} fileName={"FileName"}>
        <button style={{ margin: "10px" }}> Download PDF</button>
      </PDFDownloadLink>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          handleGeneratePDF(MyDocument()).then((blob) => {
            alert(blob);
            console.log(blob);

            // const formData = new FormData();
            // formData.append("pdf", blob, "name.pdf");
          });
        }}
      >
        Send PDF on server
      </button>
    </div>
  );
}

export default Main;
