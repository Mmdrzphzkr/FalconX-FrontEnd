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
  classNames = "", // Optional custom class
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
        shrink: isFocused || value.length > 0, // Shrink if focused or has a value
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className="absolute left-[5px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "#777E90",
                paddingRight: isFocused ? "5px" : "0",
                borderRight: isFocused ? "2px solid #777E90" : "none", // Change color to match label color on focus
              }}
            >
              <g id="envelope">
                <path
                  id="vector"
                  d="M18 5H6C4 5 3 6 3 8V17C3 19 4 20 6 20H18C20 20 21 19 21 17V8C21 6 20 5 18 5ZM17.9409 9.606L13.0291 13.178C12.7211 13.402 12.36 13.514 12 13.514C11.64 13.514 11.2779 13.402 10.9709 13.179L6.05908 9.606C5.72408 9.363 5.65004 8.893 5.89404 8.558C6.13704 8.224 6.60389 8.14801 6.94189 8.39301L11.854 11.965C11.942 12.028 12.059 12.029 12.147 11.965L17.0591 8.39301C17.3961 8.14801 17.8639 8.224 18.1069 8.558C18.3509 8.894 18.2759 9.363 17.9409 9.606Z"
                />
              </g>
            </svg>
          </InputAdornment>
        ),
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          paddingLeft: "0px", // Set padding-left to 0
        },
        input: {
          color: "white",
          backgroundColor: "#23262F", // Background color for the input
          borderRadius: "10px", // Rounded corners
        },
        label: { color: "#777E90", left: "20px", top: "2px" }, // Initial label color
        "& label.Mui-focused": {
          color: "white", // Label color on focus
          left: "0",
          top: "0",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#1A80E6", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1A80E6", // Border color on focus
          },
        },
      }}
    />
  );
};

export default DynamicInput;
