export default async function handler(req, res) {
  const pathToRevalidate = "/projects";

  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(pathToRevalidate);
    return res.status(200).json({ revalidated: true });
  } catch (error) {
    console.error(`Error revalidating paths: ${error.message}`);
    return res.status(500).json({ message: "Error revalidating paths" });
  }
}
