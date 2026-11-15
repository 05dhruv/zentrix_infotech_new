'use client';
import { notFound, useParams } from 'next/navigation';
import BlogDetailTemplate from '@/components/blog/BlogDetailTemplate';
import { blogsData } from '@/lib/blogsData';

export default function BlogPostPage({ params }) {
  const routeParams = useParams();
  const slug = routeParams?.slug || params?.slug;
  const post = blogsData[slug];
  if (!post) {
    notFound();
  }
  return <BlogDetailTemplate post={post} />;
}
