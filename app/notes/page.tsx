import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";
import css from "./NotesPage.module.css";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const notes = await fetchNotes();

  return (
    <main className={css.container}>
      <h1 className={css.title}>Notes</h1>
      <NoteList notes={notes} />
    </main>
  );
}
