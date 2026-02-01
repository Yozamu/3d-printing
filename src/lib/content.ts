import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Print, PrintFrontmatter } from '@/types';

const printsDirectory = path.join(process.cwd(), 'content/prints');

export function getAllPrints(): Print[] {
  if (!fs.existsSync(printsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(printsDirectory);
  const prints = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(printsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const frontmatter = data as PrintFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        image: frontmatter.image,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
        featured: frontmatter.featured || false,
        content,
      };
    });

  return prints.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPrints(): Print[] {
  return getAllPrints().filter((print) => print.featured);
}

export function getPrintBySlug(slug: string): Print | undefined {
  const prints = getAllPrints();
  return prints.find((print) => print.slug === slug);
}
