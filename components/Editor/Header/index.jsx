import { Box } from "@mui/material";
import EditInPlaceTextField from "../EditorForm/FormTextField/EditInPlaceTextField";
import FormCloseButton from "./FormCloseButton";
import LanguageSelector from "./LanguageSelector";

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
  height: "20vh",
};

const titleStyles = {
  fontSize: "3rem",
  fontWeight: 200,
  textAlign: "center",
};
