import prisma from "../lib/prisma";

export default async function generateSlug() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let slug = "";
  let exists = true;

  while (exists) {
    slug = "";
    for (let i = 0; i < 8; i++) {
      slug += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const verify = await prisma.url.findFirst({
      where: {
        slug,
        isActive: true,
      },
    });

    exists = !!verify;
  }

  return slug;
}
