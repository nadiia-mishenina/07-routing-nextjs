"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchNoteById } from "@/lib/api/notes";
import NoteDetails from "@/components/NoteDetails/NoteDetails";
import type { Note } from "@/types/note";

import css from "./NotePreview.module.css";

type Props = {
  noteId: string;
};

export default function NotePreview({ noteId }: Props) {
  const { data, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) {
    return <p className={css.status}>Loading...</p>;
  }

  if (isError || !data) {
    return <p className={css.status}>Failed to load note.</p>;
  }

  return (
    <div className={css.preview}>
      <NoteDetails note={data} />
    </div>
  );
}
