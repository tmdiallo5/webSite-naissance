import { redirect } from "react-router-dom";

export async function action({ params }: any) {
  return redirect("/");
}
