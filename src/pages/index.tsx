import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../lib/sanity.client";
import Movies from "../components/Movies";
import { PreviewSuspense } from "next-sanity/preview";

// lazy loading means it shouldnt be bundled into every visiting users bundle. 
// Only bundled on demand for users who are put into preview mode
const PreviewMovies = lazy(() => import("../components/PreviewMovies"));
// this will query the sanity dataset for all documents of the type movie that have a slug currently defined
const query = groq`*[_type == "movie" && defined(slug.current)]{
  _id,
  title, 
  slug
}`;

// We run the fetch and pass data down to the renderer
export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  // data is the list of all of our movies
  return { props: { preview, data } };
};

export default function Home({
  preview,
  data,
}: {
  preview: Boolean;
  data: SanityDocument[];
}) {

  // PreviewSuspense shows while data is being fetched
  // The fetch happens inside PreviewMovies
  return preview ? (
    // Suspense mode stops rendering until the preview movies have rendered
    <PreviewSuspense fallback="Loading...">
      <PreviewMovies query={query} />
    </PreviewSuspense>
  ) : (
    <Movies movies={data} />
  );
}