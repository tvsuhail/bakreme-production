const text = data?.content?.[0]?.text;

if (!text) {
  console.log("Full response:", data);
  throw new Error(data?.error?.message || "No AI output");
}

var raw = text.trim().replace(/```json|```/g, '').trim();
