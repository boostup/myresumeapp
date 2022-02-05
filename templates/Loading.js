import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "rgba(255,0,0,.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loading = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text>......................LOADING......................</Text>
      </View>
    </Page>
  </Document>
);

export default Loading;
