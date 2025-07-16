import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
  const { note } = await req.json();
  //console.log(GEMINI_API_KEY)
  //console.log(note)

  const prompt = `
You are a certified medical coding assistant.

Given the following SOAP visit note:

"""${note}"""

Return a JSON object with this structure:

{
  "icd10_codes": [
    {
      "code": "string",
      "description": "string",
      "reason": "string"
    }
  ],
  "cpt_codes": [
    {
      "code": "string",
      "description": "string",
      "reason": "string"
    }
  ]
}

Do not return anything other than the JSON response.
`;

  const response = await fetch(`${process.env.GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) })

  const result = await response.json();

  console.log(result)

  const text = result?.candidates[0]?.content?.parts[0]?.text || "No Results";

  const cleanedText = text.replace(/```json/, '').replace(/```/, '')
    .trim();

  const resultJson = JSON.parse(cleanedText)


  return NextResponse.json({ result: resultJson })
}