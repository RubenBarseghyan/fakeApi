import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  contextPromise: Promise<{ params: { id: string } }>
) {
  const { params } = await contextPromise;
  const { id } = await params;

  try {
    const res = await fetch(`${process.env.NEXT_BASE_API_URL}/products/${id}`);
    if (!res.ok) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    // Handle the error appropriately
    if (error instanceof Error) {
      console.error("Error fetching product:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
