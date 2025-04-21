import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `${process.env.NEXT_BASE_API_URL}/products/${params.id}`
  );

  if (!res.ok) {
    return new Response("Failed to fetch product", { status: 500 });
  }

  const product = await res.json();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "40px",
          backgroundColor: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={product.image}
          width={300}
          height={300}
          style={{ objectFit: "contain", borderRadius: "12px" }}
        />
        <div style={{ marginLeft: "40px", maxWidth: "600px" }}>
          <h1 style={{ fontSize: 48, marginBottom: 20 }}>{product.title}</h1>
          <p style={{ fontSize: 24, color: "#4caf50" }}>${product.price}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
