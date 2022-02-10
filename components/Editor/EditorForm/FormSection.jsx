{
  /* Requirements */
}
{
  /* 
    - Draggable: to alter the order of the sections
    - isDeletable: some sections can be added or deleted, while some are permanently present sections (i.e. the Employment History section)
    - Editable Title / Revert to template default title
    - Has children of type SectionItem
    */
}
import { Box, Button } from "@mui/material";

function FormSection(props) {
  const { title, description, deletable, children } = props;

  return (
    <Box {...props}>
      {/* Draggable Button | Section Title | buttons:
      {Edit | Revert title | Delete Section} */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        // border="1px solid #b6b6b6"
      >
        <Button>
          <Box>
            * * * <br /> * * *
          </Box>
        </Button>
        <Box display="inline">{title}</Box>
        <Button>Edit</Button>
        <Button>Revert</Button>
        {deletable ? <Button>(x)</Button> : ""}
      </Box>

      {/* Description */}
      <Box>{description}</Box>

      {/* List of section items */}
      <Box>{children}</Box>
    </Box>
  );
}

export default FormSection;
