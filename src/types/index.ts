export interface Print {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export interface PrintFrontmatter {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  featured?: boolean;
}
