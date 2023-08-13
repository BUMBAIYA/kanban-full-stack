import { prisma } from "@/lib/prisma";

export const GetUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const CreateUser = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  await prisma.user.create({
    data: {
      email,
      username,
    },
  });
};

export const DeleteUser = async ({ username }: { username: string }) => {
  await prisma.user.delete({
    where: {
      username,
    },
  });
};

export const CreateUserProfile = async ({
  userId,
  bio,
}: {
  userId: string;
  bio: string;
}) => {
  await prisma.profile.create({
    data: {
      bio,
      userId,
    },
  });
};

export const UpdateUserProfile = async ({
  username,
  bio,
}: {
  username: string;
  bio: string;
}) => {
  await prisma.user.update({
    where: {
      username,
    },
    data: {
      profile: {
        update: {
          bio,
        },
      },
    },
  });
};
