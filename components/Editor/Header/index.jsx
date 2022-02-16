import { Box } from "@mui/material";
import EditInPlaceTextField from "../EditorForm/FormTextField/EditInPlaceTextField";
import FormCloseButton from "./FormCloseButton";
import LanguageSelector from "./LanguageSelector";
import CompletionToolbar from "./CompletionToolbar";

function Header({ model, onLangChange, ...other }) {
  const { name, language } = model;

  return (
    <Box sx={rootStyles}>
      <EditInPlaceTextField
        sx={titleStyles}
        value={name}
        onChange={onLangChange}
        placeholder="Resume name"
        {...other}
      />
      <LanguageSelector lang={language} onChange={onLangChange} />
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
  fontSize: { xs: "1.5rem", sm: "2.3rem", md: "3rem" },
  fontWeight: { xs: "400", md: "200" },
  padding: 0,
  textAlign: "center",
  transition: "font-size .4s",
};
