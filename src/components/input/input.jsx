import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const DynamicInput = ({
  label,
  type = "",
  placeholder = "",
  onChange = () => {},
  value = "",
  required = false,
  multiline = false,
  rows = 1,
  classNames = "",
  icon = null,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(value.length > 0);
  };

  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth
      multiline={multiline}
      rows={multiline ? rows : 1}
      variant="outlined"
      className={classNames}
      placeholder={placeholder}
      InputLabelProps={{
        shrink: isFocused || hasValue,
      }}
      InputProps={{
        startAdornment: icon && (
          <InputAdornment position="start" className="absolute left-[16px]">
            {icon}
          </InputAdornment>
        ),
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          paddingLeft: "0",
        },
        input: {
          color: "#fff",
          backgroundColor: "#23262F",
          borderRadius: "10px",
          paddingLeft: icon ? "45px" : "16px",
        },
        label: {
          color: hasValue && !isFocused ? "#fff" : "#777E90",
          left: hasValue && !isFocused ? "0" : "35px",
          top: "2px",
        },
        "& label.Mui-focused": {
          color: "#fff",
          left: "0",
          top: "0",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: hasValue && !isFocused ? "#353945" : "none",
            borderWidth: hasValue && !isFocused ? "3px" : "0",
            borderRadius: "10px",
          },
          "&:hover fieldset": {
            borderColor: "#1A80E6",
            borderRadius: "10px",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1A80E6",
            borderRadius: "10px",
          },
        },
      }}
    />
  );
};

export default DynamicInput;
