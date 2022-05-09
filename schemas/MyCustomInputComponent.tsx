import * as React from "react";
import useSWR from "swr";
import { SanityClient } from "@sanity/client";
import client from "part:@sanity/base/client";
import { Stack, TextInput, Label } from "@sanity/ui";

export const studioClient: SanityClient = client.withConfig({
  apiVersion: "2021-08-18",
});

export const MyCustomInputComponent = React.forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    const { data } = useSWR(`*[]`, studioClient.fetch);
    console.log(data);
    return (
      <Stack space={2}>
        <Label>{props.type.title}</Label>
        <TextInput ref={ref} value={props.value} />
      </Stack>
    );
  }
);
