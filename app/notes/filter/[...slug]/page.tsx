import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";

export const dynamic = "force-dynamic";

type Props = {
  params: { tag: string[] };
};

export default async function FilteredNotesPage({ params }: Props) {
  const tag = params.tag?.[0] ?? "all";
  const normalizedTag = decodeURIComponent(tag);

  const notes = await fetchNotes(
    normalizedTag === "all" ? undefined : normalizedTag
  );

  return <NoteList notes={notes} />;
}
