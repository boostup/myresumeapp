import flags from "../../../data/flags";

import { Box, MenuItem, Select } from "@mui/material";

function LanguageSelector({ lang, onChange }) {
  const handleChange = (e) =>
    onChange((fullFormModel) => {
      const model = {
        ...fullFormModel,
      };
      model.resume.language = e.target.value;
      return model;
    });

  return (
    <Box sx={rootStyles}>
      <Box
        sx={{
          ...flagStyles,
          backgroundPosition: flags[lang]?.backgroundPosition,
        }}
      />
      <Select
        variant="standard"
        value={flags[lang]?.value || "default-value"}
        onChange={handleChange}
        sx={langStyles}
      >
        <MenuItem key="default-option" value="default-value">
          language
        </MenuItem>
        {Object.keys(flags).map((lang, i) => {
          const { label, value } = flags[lang];
          return (
            <MenuItem key={value} value={value}>
              <Box
                className="flag"
                sx={{
                  ...flagStyles,
                  backgroundPosition: flags[lang]?.backgroundPosition,
                }}
              />

              {label}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}

export default LanguageSelector;

const rootStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // The following CSS selector ensures we can only see the flags that are inside the <option> items of the select, not the select itself
  "& [aria-expanded=false] .flag, & [aria-expanded=true] .flag": {
    display: "none",
  },
};

const flagStyles = {
  width: "19px",
  height: "12px",
  backgroundSize: "auto 12px",
  backgroundImage: "url(/flags.png)",
  marginRight: "8px",
  opacity: 1,
};

const langStyles = {
  fontSize: {
    xs: "1rem",
  },
  fontWeight: 100,
  "&::before, &:hover:not(.Mui-disabled):before": {
    borderBottom: "0",
  },
};
