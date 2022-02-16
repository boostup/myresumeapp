import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 50,
  },
  section: {
    paddingBottom: 10,
    flexGrow: 1,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  footer: {
    height: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "red",
    bottom: -30,
  },
});

// Create Document Component
const CaligrafiaTemplate = ({ templateName, model }) => {
  const { firstName, checked } = model;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View fixed style={styles.header}>
          <Text style={{ fontStyle: "italic" }}>
            template name:
            {templateName}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>{/* {firstName} */}</Text>
          <Text>{/* {checked.toString()} */}</Text>
          <Text>{JSON.stringify(model, null, 2)}</Text>
        </View>
        <View fixed style={styles.footer}>
          <Text
            style={styles.pagination}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} of ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};
export default CaligrafiaTemplate;
