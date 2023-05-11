import prisma from "@/lib/prisma";
import authorization from "@/middleware/authorization";
export default async function HadnleMaterial(req, res) {
	if (req.method !== "GET") return res.status(405).end();

	const auth = await authorization(req, res);

	const getMaterial = await prisma.account.findMany();
	res.status(200);
	res.json({
		Message: "Data Materi",
		Data: getMaterial,
		Verify: auth,
	});
}
