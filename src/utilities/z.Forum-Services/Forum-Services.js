import sendRequest from "../z.send-request";

const BASE_URL = "/api/forum"

export function addPostToList(query) {
  console.log("---Forum--Service---", query)
  return sendRequest(`${BASE_URL}/add`, "POST", query);
}
