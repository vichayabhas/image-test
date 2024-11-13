import mongoose from "mongoose";
import { Id, InterTimeOffset } from "../../../interface";

export default async function getTimeOffset(): Promise<InterTimeOffset> {
  return { _id: null, day: 0, minute: 0, hour: 0, userId: null };
}
