import { MyCustomInputComponent } from "./MyCustomInputComponent";
import { orderRankField } from "@sanity/orderable-document-list";

export default {
  type: "document",
  name: "schemaWithOrderableField",
  fields: [
    orderRankField({ type: "schemaWithOrderableField" }),
    {
      type: "string",
      name: "title",
    },
  ],
};
