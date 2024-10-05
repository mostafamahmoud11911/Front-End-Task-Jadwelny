import { aboutMe } from "./data";

export function GET() {
    return Response.json(aboutMe);
}