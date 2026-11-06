
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Nur POST-Anfragen erlaubt"
    });
  }

  try {
    const { prompt } = req.body || {};

    if (!prompt) {
      return res.status(400).json({
        error: "Bitte gib eine Nachricht ein."
      });
    }

    return res.status(200).json({
      success: true,
      message: "BloxDCode AI ist bereit!",
      response: `Du hast gefragt: ${prompt}`
    });

  } catch (error) {
    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
