import { NextResponse } from "next/server"
import { dbConnect } from "@/lib/DBconnect"
import QuoteRequest from "@/models/quote"

export async function POST(req: Request) {
  try {
    await dbConnect()
    const body = await req.json()
    const { name,email, mobile, workspace } = body

    if (!name || !mobile) {
      return NextResponse.json(
        { error: "Name and mobile are required" },
        { status: 400 }
      )
    }

    const newQuote = await QuoteRequest.create({
      name,
      email,
      mobile,
      workspace,
    })

    return NextResponse.json({ success: true, quote: newQuote })
  } catch (error) {
    console.error("Quote API Error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
