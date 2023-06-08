import { StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./PDFAssets";

const PDFView = () => {
  const styles = StyleSheet.create({
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });

  return (
    <PDFViewer style={styles.viewer}>
      <MyDocument display="svg" />
    </PDFViewer>
  );
};

export default PDFView;
