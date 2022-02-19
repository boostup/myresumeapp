import FilledTextField from "./FilledTextField";

const EditInPlaceTextField = ({ sx, onChange, ...other }) => {
  const onKeyPress = (e) => {
    if (e.keyCode == 13) {
      e.target.blur();
    }
  };

  const modifyModelValue = (e) =>
    onChange((fullFormModel) => {
      const model = {
        ...fullFormModel,
      };
      model.meta.title = e.target.value;
      return model;
    });

  return (
    <FilledTextField
      onKeyDown={onKeyPress}
      onChange={modifyModelValue}
      sx={{
        background: "white",
        ...sx,
      }}
      {...other}
    />
  );
};

export default EditInPlaceTextField;
