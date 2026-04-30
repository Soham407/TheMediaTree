export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ success: false, message: "Missing form configuration" });
  }

  try {
    const payload = await readJsonBody(req);
    const { name, email, message, botcheck } = payload || {};

    if (botcheck) {
      return res.status(200).json({ success: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required" });
    }

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", "New website enquiry from The Media Tree");
    formData.append("from_name", "The Media Tree Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : { success: false, message: "Form service unavailable" };

    return res.status(response.ok ? 200 : response.status).json(data);
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ success: false, message: "Unable to send message right now" });
  }
}

async function readJsonBody(req) {
  if (req.body) {
    return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString("utf8");
  return body ? JSON.parse(body) : {};
}
