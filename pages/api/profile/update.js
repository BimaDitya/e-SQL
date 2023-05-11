import prisma from "@/lib/prisma";
import authorization from "@/middleware/authorization";
export default async function HadnleMaterial(req, res) {
	if (req.method !== "POST") return res.status(405).end();

	const auth = await authorization(req, res);

	const { firstName, lastName, school } = req.body;
	const updateProfile = await prisma.profile.upsert({
		where: {
			Id: auth.id,
		},
		update: {
			FirstName: firstName,
			LastName: lastName,
			School: school,
		},
		create: {
			FirstName: firstName,
			LastName: lastName,
			School: school,
			AccountId: auth.id,
		},
	});
	res.status(200);
	res.json({
		Message: "Profile Berhasil Dimuat",
		Data: updateProfile,
		Verify: auth.id,
	});
}
