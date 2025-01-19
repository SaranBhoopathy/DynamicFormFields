import React from "react";
import "./DynamicFormFields.css";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactSelect from "./ReactSelect";
const widgetData = {
  id: "673deb08bd85075c50bb369e",
  title: "Bar Chart",
  widget_type: "BarChart",
  widgetMasterData: [
    {
      label: "Title",
      name: "title",
      mandatory: true,
      localized: true,
      fieldType: "input",
      description: "Provide a menaingful name to the widget",
    },
    {
      label: "End Point for Get Data",
      name: "getDataEndPoint",
      mandatory: false,
      fieldType: "input",
      description: "Provide a right  point to fetch the data for the widget",
    },
    {
      label: "Label for Total",
      name: "labelForTotal",
      mandatory: false,
      localized: true,
      fieldType: "input",
      description: "Provide a menaingful label to show the Total Count",
    },
    {
      label: "Widget depends on which date picker?",
      name: "datePickerScope",
      mandatory: false,
      fieldType: "radio",
      description: "Provide your choice",
      options: [
        {
          value: "global_level",
          label: "Global Level",
        },
        {
          value: "widget_level",
          label: "Widget Level",
        },
      ],
    },
    {
      label: "Name of Query Parameter For Start Date",
      name: "queryParamForStartDate",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate query parameter to send in endpoint",
      options: [],
    },
    {
      label: "Name of Query Parameter For End Date",
      name: "queryParamForEndDate",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate query parameter to send in endpoint",
      options: [],
    },
    {
      label: "Name of Query Parameter Duration Type",
      name: "queryParamForDurationGlobal",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate query parameter to send in endpoint",
      options: [],
    },
    {
      label: "Is Widget Depends on Select District?",
      name: "dependsOnSelectDistrict",
      mandatory: false,
      fieldType: "checkbox",
      description: "Provide your choice",
      options: [
        {
          label: "Yes",
          value: "Yes",
        },
        {
          label: "No",
          value: "No",
        },
      ],
    },
    {
      label: "Name of Search Query Select District",
      name: "queryParamForSelectDistrict",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate query parameter to send in endpoint",
      options: [],
    },
    {
      label: "Does Widget has tabs",
      name: "hasTabs",
      mandatory: false,
      fieldType: "checkbox",
      description: "Provide your choice",
      options: [
        {
          value: "Yes",
          label: "Yes",
        },
        {
          value: "No",
          label: "No",
        },
      ],
    },
    {
      label: "Does Widget has filter?",
      name: "hasWidgetSelectFilter",
      mandatory: false,
      fieldType: "checkbox",
      description: "Provide your choice",
      options: [
        {
          value: "Yes",
          label: "Yes",
        },
        {
          value: "No",
          label: "No",
        },
      ],
    },
    {
      label: "End Point for getting the tabs configuration",
      name: "getTabsEndpoint",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate end point to get the tabs config",
      options: [],
    },
    {
      label: "Name of Query Paramter for Widget Level Filter",
      name: "queryParamForWidgetFilter",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate query parameter to send in endpoint",
      options: [],
    },
    {
      label: "Options End Point for Widget Filter",
      name: "getOptionsForSelectFilter",
      mandatory: false,
      fieldType: "input",
      description: "Provide an appropriate end point to get the filter options",
      options: [],
    },
    {
      label: "Tab Names and attributes",
      name: "tabConfig",
      mandatory: false,
      fieldType: "dynamicFields",
      dynamicFieldsConfig: [
        {
          label: "Label",
          // name: "label",
          name: "field1",
          mandatory: false,
          fieldType: "input",
          description: "Provide a menaingful name to the widget",
          localized: true,
        },
        {
          label: "Value",
          // name: "value",
          name: "field2",
          mandatory: false,
          fieldType: "input",
          description: "Provide a menaingful name to the widget",
        },
        {
          label: "Value",
          // name: "value",
          name: "field2",
          mandatory: false,
          fieldType: "input",
          description: "Provide a menaingful name to the widget",
        },
        {
          label: "Does Widget has filter?",
          name: "hasWidgetSelectFilter",
          mandatory: false,
          fieldType: "checkbox",
          description: "Provide your choice",
          options: [
            {
              value: "Yes",
              label: "Yes",
            },
            {
              value: "No",
              label: "No",
            },
          ],
        },
        {
          label: "Does Widget has Date filter?",
          name: "hasWidgetDateFilter",
          mandatory: false,
          fieldType: "checkbox",
          description: "Provide your choice",
          options: [
            {
              value: "Yes",
              label: "Yes",
            },
            {
              value: "No",
              label: "No",
            },
          ],
        },
        {
          name: "Select_option",
          label: "Example Select Field",
          fieldType: "select",
          options: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ],
          placeholder: "Choose an option",
        },
        {
          label: "Widget depends on which date picker?",
          name: "datePickerScope",
          mandatory: false,
          fieldType: "radio",
          description: "Provide your choice",
          options: [
            {
              value: "global_level",
              label: "Global Level",
            },
            {
              value: "widget_level",
              label: "Widget Level",
            },
          ],
        },
        {
          label: "Widget depends on which search picker?",
          name: "searchScope",
          mandatory: false,
          fieldType: "radio",
          description: "Provide your choice",
          options: [
            {
              value: "global_level",
              label: "Global Level",
            },
            {
              value: "widget_level",
              label: "Widget Level",
            },
          ],
        },
      ],
      description:
        "Provide an appropriate tab name and corresponding attributes",
    },
  ],
  is_deleted: false,
};
const DynamicFormFields = () => {
  const { widgetMasterData } = widgetData;

  // Move dynamicField definition above
  const dynamicField = widgetMasterData.find(
    (item) => item.fieldType === "dynamicFields"
  );
  const dynamicFieldsConfig = dynamicField?.dynamicFieldsConfig || [];

  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      dynamicEntries: [
        dynamicFieldsConfig.reduce((acc, config) => {
          acc[config.name] = "";
          return acc;
        }, {}),
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dynamicEntries",
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form
      className="dynamic__generating--form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>{dynamicField?.label || "Dynamic Fields Form"}</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="dynamic__generating--row">
          {/* {dynamicFieldsConfig.map((config) => {
            console.log(config);
            return (
              <div key={config.name} className="dynamic__generate--container">
                <label>{config.label}</label>
                <input
                  className="input__generateform"
                  {...register(`dynamicEntries.${index}.${config.name}`)}
                  placeholder={config.description}
                />
              </div>
            );
          })} */}

          {dynamicFieldsConfig.map((config) => {
            return (
              <div key={config.name} className="dynamic__generate--container">
                <label>{config.label}</label>
                {/* Render based on fieldType */}
                {config.fieldType === "input" && (
                  <input
                    type="text"
                    className="input__generateform"
                    {...register(`dynamicEntries.${index}.${config.name}`)}
                    placeholder={config.description}
                  />
                )}
                {config.fieldType === "checkbox" && (
                  <div className="d-flex">
                    {config.options.map((option) => (
                      <label key={option.value}>
                        <input
                          type="checkbox"
                          {...register(
                            `dynamicEntries.${index}.${config.name}.${option.value}`
                          )}
                          value={option.value}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
                {config.fieldType === "radio" && (
                  <div className="radio__container--generatefield">
                    {config.options.map((option) => (
                      <div
                        key={option.value}
                        className="radio__btn--generatefield"
                      >
                        <input
                          type="radio"
                          id={`dynamicEntries.${index}.${config.name}.${option.value}`}
                          {...register(
                            `dynamicEntries.${index}.${config.name}`
                          )}
                          value={option.value}
                        />
                        <label
                          htmlFor={`dynamicEntries.${index}.${config.name}.${option.value}`}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                {config.fieldType === "select" && (
                  <Controller
                    name={`dynamicEntries.${index}.${config.name}`}
                    control={control}
                    defaultValue=""
                    errors
                    render={({ field }) => (
                      <ReactSelect
                        {...field}
                        options={config.options}
                        placeholder={config.description}
                      />
                    )}
                  />
                )}
              </div>
            );
          })}

          {/* {index > 0 && ( */}
          <button
            type="button"
            className="icon__button"
            onClick={() => remove(index)}
            disabled={index == 0 ? true : false}
          >
            🆑
          </button>
          {/* )} */}
        </div>
      ))}
      <button
        type="button"
        // className="icon__button"
        onClick={() =>
          append(
            dynamicFieldsConfig.reduce((acc, config) => {
              acc[config.name] = "";
              return acc;
            }, {})
          )
        }
      >
        ➕
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFormFields;
