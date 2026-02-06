import { fetchNotes } from "@/lib/api";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  const currentPage = 1;
  const searchQuery = "";
  const tag = undefined; // all notes

  await queryClient.prefetchQuery({
    queryKey: ["notes", currentPage, searchQuery, tag],
    queryFn: () => fetchNotes(currentPage, searchQuery, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}