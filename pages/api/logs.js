// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const postData = req.body;
  res.status(200).json({ data: postData });
}
