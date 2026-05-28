import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addEmail = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      throw new Error("Invalid email");
    }
    const existing = await ctx.db
      .query("rsvps")
      .withIndex("by_email", (q) => q.eq("email", normalized))
      .unique();
    if (existing) return { ok: true, duplicate: true as const };
    await ctx.db.insert("rsvps", { email: normalized, createdAt: Date.now() });
    return { ok: true, duplicate: false as const };
  },
});
