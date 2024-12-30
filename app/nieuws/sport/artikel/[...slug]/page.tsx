export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: number; slug: string }>;
}) {
  const { id, slug } = await params;

  console.log("id, slug :", id, slug);
  return <div>ArticlePage</div>;
}
