import type { Note } from "@/types/note";
import css from "./NoteDetails.module.css";

type Props = {
  note: Note;
};

export default function NoteDetails({ note }: Props) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{note.title}</h2>

      <p className={css.content}>{note.content}</p>

      <div className={css.meta}>
        <span className={css.tag}>{note.tag}</span>
        <span className={css.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
