import generateSlug from "../lib/create-slug";
import prisma from "../lib/prisma";

type dataToCreateType = {
  originalUrl: string;
  slug: string;
};

type OriginalUrlType = {
  originalUrl: string;
};

export const urlService = {
  createSlug: async (data: OriginalUrlType) => {
    try {
      const slug = await generateSlug();

      console.log(data);

      const res = await prisma.url.create({
        data: {
          slug,
          originalUrl: data.originalUrl as string,
        },
      });

      return res.slug;
    } catch (error) {
      console.error("Falha ao criar URL.", error);
      throw new Error();
    }
  },
  getSlug: async (slug: string) => {
    try {
      const url = await prisma.url.findUnique({
        where: {
          slug,
        },
      });

      if (!url) return { message: "Nenhum registro encontrado." };

      await prisma.url.update({
        where: {
          id: url.id,
        },
        data: {
          clicks: { increment: 1 },
        },
      });

      const today = new Date();

      if (url.isActive === false || today >= url.expiresAt) {
        await prisma.url.update({
          where: {
            id: url.id,
          },
          data: {
            isActive: false,
          },
        });

        return { message: "URL expirada." };
      }

      return {
        originalUrl: url.originalUrl as string,
      };
    } catch (error) {
      console.error("Falha ao encontrar URL.", error);
      throw new Error();
    }
  },
};
