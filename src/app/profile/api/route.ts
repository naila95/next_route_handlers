import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   // 1ci yol:
//   // const requestHeaders = new Headers(request.headers);
//   // console.log(requestHeaders.get("Authorization"))

//   // 2ci yol:
//   const headerList = headers();
//   console.log(headerList.get("Authorization"));

//   // content-type: text
//   // return new Response("profile data");

//   return new Response("<h1>hello</h1>", {
//     headers: {
//       "Content-type": "text/html",
//     },
//   });
// }

// 2 yolla cookies set elemek:

export async function GET(request: NextRequest) {
  const headerList = headers();
  // 1ci yol:
  const theme = request.cookies.get("theme");
  console.log(theme);

  // 2ci yol:
  cookies().set("resultsPerPage", "20");
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>hello</h1>", {
    headers: {
      "Content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
