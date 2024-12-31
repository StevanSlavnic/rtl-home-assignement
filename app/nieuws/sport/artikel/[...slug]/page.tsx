export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: number; slug: string }>;
}) {
  const { slug } = await params;

  return <div>Page for article: {slug[1]}</div>;
}
