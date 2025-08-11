import createClient from "openapi-fetch";
import { paths } from "./v1";
import { BASE_URL } from "@/config.server";
const client = createClient<paths>({ baseUrl: BASE_URL });
export default client;
