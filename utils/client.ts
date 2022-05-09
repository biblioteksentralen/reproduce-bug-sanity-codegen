import { SanityClient } from "@sanity/client";
import client from "part:@sanity/base/client";

export const studioClient: SanityClient = client.withConfig({ apiVersion: "2021-08-18" });
