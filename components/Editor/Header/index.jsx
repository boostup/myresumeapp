import { Box } from "@mui/material";
import EditInPlaceTextField from "../EditorForm/FormTextField/EditInPlaceTextField";
import FormCloseButton from "./FormCloseButton";
import LanguageSelector from "./LanguageSelector";
import CompletionToolbar from "./CompletionToolbar";

function Header({ model, onChange, ...other }) {
  const { name, language } = model;

  return (
    <Box sx={rootStyles}>
      <EditInPlaceTextField
        sx={titleStyles}
        value={name}
        onChange={onChange}
        placeholder="Resume name"
        {...other}
      />
      <LanguageSelector lang={language} onChange={onChange} />
      <CompletionToolbar />
      <FormCloseButton href="/app/" />
    </Box>
  );
}

export default Header;

const rootStyles = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyles = {
  // @Todo: on "lg" screen factor, the maximum size is too big (Thinking of long Resume titles)
  // Idea: see if I can combine clamp by minmax for the lg value => https://youtu.be/3elGSZSWTbM?t=323
  fontSize: "clamp(1.3rem, 5.3vw, 5.9rem)",
  fontWeight: "clamp(200,300,400)",
  ["--padding-xs"]: "2%",
  ["--padding-md"]: "5%",
  ["--padding-lg"]: "10%",
  paddingTop: "clamp(var(--padding-xs), var(--padding-md), var(--padding-lg))",
  paddingBottom:
    "clamp(var(--padding-xs), var(--padding-md), var(--padding-lg))",
  textAlign: "center",
  transition: "font-size .4s",
};
