export const runtime = "nodejs";

import { ObjectId } from "mongodb";
import { getDB } from "./mongodb";
import bcrypt from "bcrypt";

export interface User {
  _id: ObjectId;
  username: string;
  email: string;
  phone?: string;
  password?: string;
  provider?: string;
  createdAt: Date;
  updatedAt: Date;
  userRole: string;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const db = await getDB();
  return db.collection("users").findOne({ email: email });
}

export async function createUser(data: {
  username: string;
  email: string;
  phone: string;
  password: string;
  userRole: string;
}): Promise<User> {
  const db = await getDB();
  const existingEmail = await findUserByEmail(data.email);

  if (existingEmail) {
    throw new Error("Username Already taken");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const result = await db.collection("users").insertOne({
    username: data.username,
    email: data.email,
    phone: data.phone,
    password: hashedPassword,
    createdAt: new Date(),
    updateAt: new Date(),
    userRole: data.userRole,
  });

  return {
    _id: result.insertedId,
    username: data.username,
    email: data.email,
    phone: data.phone,
    createdAt: new Date(),
    updatedAt: new Date(),
    userRole: data.userRole,
  };
}

export async function createduserFromAuth(data: {
  email: string;
  username: string;
  provider: string;
  userRole: string;
}): Promise<User> {
  const db = await getDB();

  const result = await db.collection("users").insertOne({
    username: data.username,
    email: data.email,
    provider: data.provider,
    createdAt: new Date(),
    updatedAt: new Date(),
    userRole: data.userRole,
  });

  return {
    _id: result.insertedId,
    username: data.username,
    email: data.email,
    createdAt: new Date(),
    updatedAt: new Date(),
    userRole: data.userRole,
  };
}
