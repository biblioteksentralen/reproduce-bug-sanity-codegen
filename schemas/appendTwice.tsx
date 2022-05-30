import * as React from "react";
import { withDocument } from "part:@sanity/form-builder";
import { Button } from "@sanity/ui";
import client from "part:@sanity/base/client";

export default {
  type: "document",
  name: "schemaWithDoubleAppendAction",
  fields: [
    {
      type: "array",
      name: "myArray1",
      of: [{ type: "string" }],
    },
    {
      type: "array",
      name: "myArray2",
      of: [{ type: "string" }],
    },
    {
      type: "string",
      name: "myCustomButton",
      inputComponent: withDocument((props) => (
        <Button
          onClick={() => client
            .withConfig({ apiVersion: "2022-05-30" })
            .patch(props.document._id)
            .append("myArray1", ["Hello array one"])
            .append("myArray2", ["Hello array two"])
            .commit()}
        >
          Append to both arrays
        </Button>
      )),
    },
  ],
};
