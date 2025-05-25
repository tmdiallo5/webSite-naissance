import { redirect } from "react-router-dom";

export async function action({}: any) {
  return redirect("/");
}
