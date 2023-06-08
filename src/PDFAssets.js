import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Montserrat-SemiBold",
  src: "/fonts/Montserrat-SemiBold.ttf",
});
Font.register({
  family: "Montserrat-Regular",
  src: "/fonts/Montserrat-Regular.ttf",
});

const MyDocument = () => {
  const styles = StyleSheet.create({
    header: { backgroundColor: "gray", height: "60px" },
    footer: { backgroundColor: "gray", height: "60px" },
    image: { height: "300px", width: "300px", margin: "auto" },
    content: { height: "721px" },
    text: { color: "yellow", fontFamily: "Montserrat-Regular" },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {" "}
          <Text style={styles.text}>PDF Example</Text>
        </View>
        <View style={styles.content}>
          <Link src="https://en.wikipedia.org/wiki/PDF">
            <Text>link</Text>
          </Link>

          <Image src="/logo512.png" style={styles.image}></Image>
        </View>
        <View style={styles.footer}>
          {" "}
          <Text>Page 1</Text>
        </View>
      </Page>
      {/*------------------------------------------------------------------------------*/}
      <Page size="A4" style={styles.page}>
        {" "}
        <View style={styles.header}>
          {" "}
          <Text style={styles.text}>PDF Example</Text>
        </View>
        <View style={styles.content}>
          <Link src="https://en.wikipedia.org/wiki/PDF">
            <Text>link</Text>
          </Link>
        </View>
        <View style={styles.footer}>
          {" "}
          <Text>Page 2</Text>
        </View>
      </Page>
    </Document>
  );
};

export { MyDocument };
