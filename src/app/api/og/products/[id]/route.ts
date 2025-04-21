import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
    console.log('sssss')
  const res = await fetch(
    `${process.env.NEXT_BASE_API_URL}/products/${params.id}`
  );
  const product = await res.json();

  const html = `
    <div style="background: #fff; width: 100%; height: 100%; display: flex; flex-direction: row; padding: 40px; align-items: center; justify-content: space-between; font-family: Arial;">
      <img src="${product.image}" width="50" height="50" style="object-fit: contain; border-radius: 12px;" />
      <div style="margin-left: 40px; max-width: 600px;">
        <h1 style="font-size: 48px; margin-bottom: 20px;">${product.title}</h1>
        <p style="font-size: 24px; color: #555;">$${product.price}</p>
      </div>
    </div>
  `;

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
}
