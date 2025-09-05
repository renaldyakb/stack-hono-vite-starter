import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../../backend/src/routes";

export const trpc = createTRPCReact<AppRouter>();
