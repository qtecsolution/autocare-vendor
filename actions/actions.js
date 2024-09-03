"use server";

import { cookies } from "next/headers";

export const getAccessTokenFromCookies = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  return accessToken?.value;
};

// this is used in sign-in page
export const setAccessTokenToCookies = async (accessToken) => {
  const cookieStore = cookies();

  const getAccessToken = cookieStore.get("accessToken");

  if (!getAccessToken) {
    const thirtyDays = 60 * 60 * 24 * 7;
    // set cookie
    cookieStore.set("accessToken", accessToken, {
      maxAge: thirtyDays,
      httpOnly: true,
      path: "/",
    });
  }
};
export const setRefreshTokenToCookies = async (refreshToken) => {
  const cookieStore = cookies();
  const getRefreshToken = cookieStore.get("refreshToken");
  if (!getRefreshToken) {
    const thirtyDays = 60 * 60 * 24 * 7;
    cookieStore.set("refreshToken", refreshToken, {
      maxAge: thirtyDays,
      httpOnly: true,
      path: "/",
    });
  }
};

export const deleteAccessToken = async () => {
  const cookieStore = cookies();
  cookieStore.delete("accessToken");
  // redirect("/");
};
export const deleteRefreshToken = async () => {
  const cookieStore = cookies();
  cookieStore.delete("refreshToken");
  // redirect("/");
};
