import { NextRequest, NextResponse } from "next/server"

interface GenerateMessageRequest {
  visitorName: string
  contactReason: string
  userName: string
  userOccupation: string
}

async function fetchWithRetry(
  apiUrl: string,
  payload: object,
  retries = 3,
  delay = 1000
): Promise<any> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      return fetchWithRetry(apiUrl, payload, retries - 1, delay * 2)
    } else {
      throw error
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      )
    }

    const body: GenerateMessageRequest = await request.json()
    const { visitorName, contactReason, userName, userOccupation } = body

    if (!visitorName || !contactReason || !userName || !userOccupation) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`

    const systemPrompt = `You are a professional assistant. A visitor wants to contact ${userName} (${userOccupation}).
The visitor's name is ${visitorName}.
Their reason for contacting is: "${contactReason}".
Write a polite, professional, and concise message draft (1-3 sentences) for the visitor to send.
Do not include a subject line. Start the message directly, e.g., "Hello ${userName.split(" ")[0]},".`

    const userQuery = "Please generate the message draft now."

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
    }

    const result = await fetchWithRetry(apiUrl, payload)
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      throw new Error("No content received from API")
    }

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("Error generating message:", error)
    return NextResponse.json(
      { error: "Failed to generate message" },
      { status: 500 }
    )
  }
}
