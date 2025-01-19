import React from "react";
import Select from "react-select";

const ReactSelect = ({
  options,
  value,
  onChange,
  defaultValue,
  placeholder,
  isDisabled = false,
  isLoading = false,
  isClearable = true,
  isMulti = false,
  errors = false,
  ...props
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: isMulti ? "" : "32px",
      minHeight: isMulti ? "" : "32px",
      width: "100%",
      borderWidth: "1px",
      boxShadow: "none",

      backgroundColor: errors
        ? "var(--color-C)"
        : state.isFocused
        ? "var(--color-B)"
        : "var(--color-B)",
      borderColor:
        props.hideBorderWhenNotFocused && !state.isFocused
          ? "transparent"
          : isMulti && errors
          ? "var(--color-D)"
          : errors
          ? "var(--color-D)"
          : state.isFocused
          ? "var(--color-A)"
          : "var(--color-L)",
      "&:hover": {
        borderColor:
          props.hideBorderWhenNotFocused && !state.isFocused
            ? "transparent"
            : isMulti && errors
            ? "var(--color-D)"
            : errors
            ? "var(--color-D)"
            : state.isFocused
            ? "var(--color-A)"
            : "var(--color-L)",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "var(--color-K)" : "var(--color-K)",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0 6px",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "32px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "var(--color-A)" : "var(--color-A)",
      "&:hover": {
        color: "var(--color-A)",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--color-L)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "var(--color-A)"
        : state.isFocused
        ? "var(--color-B)"
        : "var(--color-C)",
      color: state.isSelected ? "var(--white-color)" : "var(--color-K)",
      "&:active": {
        backgroundColor: "var(--color-A)",
        color: "var(--color-C)",
      },
      "&:hover": {
        backgroundColor: "var(--color-A)",
        color: "var(--white-color)",
      },
    }),
    multiValue: (styles, { data }) => ({
      ...styles,
      backgroundColor: "var(--color-C)",
      color: "var(--color-K)",
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
      fontSize: "0.6rem",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "block",
      backgroundColor: state.isFocused
        ? "var(--color-A)"
        : provided.backgroundColor,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-C)",
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      className="filter-select"
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isMulti={isMulti}
      {...props}
    />
  );
};

export default ReactSelect;
