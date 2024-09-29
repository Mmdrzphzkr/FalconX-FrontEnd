import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const DynamicInput = ({
  label,
  type = "text",
  placeholder = "",
  onChange = () => {},
  value = "",
  required = false,
  multiline = false,
  rows = 1,
  classNames = "",
  icon = null, // New prop to accept custom SVG icons
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value.length > 0);

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
        shrink: isFocused || value.length > 0,
      }}
      InputProps={{
        startAdornment: icon && (
          <InputAdornment position="start" className="absolute left-[5px]">
            <span
              style={{
                paddingRight: isFocused ? "1px" : "0",
                borderRight: isFocused ? "2px solid #777E90" : "none",
              }}
            >
              {icon} {/* Render the passed SVG icon here */}
            </span>
          </InputAdornment>
        ),
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          paddingLeft: icon ? "0px" : "16px", // Adjust padding based on the presence of the icon
        },
        input: {
          color: "white",
          backgroundColor: "#23262F",
          borderRadius: "10px",
          paddingLeft: icon ? "35px" : "16px",
        },
        label: { color: "#777E90", left: "20px", top: "2px" },
        "& label.Mui-focused": {
          color: "white",
          left: "0",
          top: "0",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#1A80E6",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1A80E6",
          },
        },
      }}
    />
  );
};

export default DynamicInput;
