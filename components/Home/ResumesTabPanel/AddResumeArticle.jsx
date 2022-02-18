import Button from "./Button";
import Article from "./Article";

const AddResumeArticle = ({ onClick }) => (
  <Button onClick={onClick} padding={0}>
    <Article
      title="New Resume"
      caption="Create a tailored resume for each job application. Double your chances of getting hired!"
      sx={{
        display: {
          xs: "none",
          lg: "inherit",
        },
      }}
    />
  </Button>
);

export default AddResumeArticle;
