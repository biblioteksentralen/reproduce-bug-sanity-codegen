import { MyCustomInputComponent } from "./MyCustomInputComponent";

export default {
  type: "document",
  name: 'schemaWithCustomInputcomponent',
  fields: [
    {
      type: "string",
      name: "fieldWithCustomInput",
      inputComponent: MyCustomInputComponent
    },    
    {
      type: "string",
      name: "normalField",
    },
  ],
};
