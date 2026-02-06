import axios from "axios";
import type { Note, NoteTag } from "@/types/note";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// =====================
// GET ALL / FILTERED
// =====================
export async function fetchNotes(tag?: string): Promise<Note[]> {
  const { data } = await api.get<Note[]>("/notes", {
    params: tag ? { tag } : undefined,
  });
  return data;
}

// =====================
// GET BY ID
// =====================
export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
}

// =====================
// CREATE
// =====================
export type CreateNotePayload = {
  title: string;
  content: string;
  tag: NoteTag;
};

export async function createNote(
  payload: CreateNotePayload
): Promise<Note> {
  const { data } = await api.post<Note>("/notes", payload);
  return data;
}

// =====================
// DELETE
// =====================
export async function deleteNote(id: string): Promise<void> {
  await api.delete(`/notes/${id}`);
}
