import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  // Next requst yazmaq queryleri idare etmeye komek edir search ucun
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComment = query
    ? comments.filter((comment) => comment.comment.includes(query))
    : comments;
  return Response.json(filteredComment);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    comment: comment.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}
