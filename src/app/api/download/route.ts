import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import archiver from "archiver";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user || user.email !== "legend159980@gmail.com") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Create zip stream
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = new Readable().wrap(archive);

  // Set response headers
  const responseHeaders = new Headers();
  responseHeaders.set("Content-Type", "application/zip");
  responseHeaders.set("Content-Disposition", 'attachment; filename="source-code.zip"');

  // Archive files
  const projectRoot = process.cwd();
  
  // Exclude node_modules, .next, etc.
  const ignore = [
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    "bun.lock",
    "package-lock.json",
    ".env",
  ];

  archive.glob("**/*", {
    cwd: projectRoot,
    ignore: ignore.map((dir) => `${dir}/**`),
    dot: true,
  });

  archive.finalize();

  return new NextResponse(stream as any, {
    headers: responseHeaders,
  });
}
