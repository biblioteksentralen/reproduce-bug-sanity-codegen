import { MyCustomInputComponent } from "./components/MyCustomInputComponent";

export default {
  type: "document",
  name: 'mySchema',
  fields: [
    {
      type: "string",
      name: "field1",
      inputComponent: MyCustomInputComponent
    },
  ],
};
