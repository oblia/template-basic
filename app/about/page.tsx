import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";

// ✅ Make it async and export a React component
export default async function AboutPage() {
  const filePath = path.join(process.cwd(), "content/about.md");
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <article className="prose">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
