import { clerkClient } from "@clerk/express";

//MIDDLEWARE TO CHECK WHETHER THE USER HAS PRO PLAN OR NOT

export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();
    const hasProPlan = has({ plan: "pro" });

    const user = await clerkClient.users.getUser(userId);

    if (!hasProPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }
    req.plan = hasProPlan ? "pro" : "free";
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
