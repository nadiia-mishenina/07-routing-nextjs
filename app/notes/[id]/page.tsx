import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: { id: string };
};

export default function NotePage({ params }: Props) {
  return <NotePreview noteId={params.id} />;
}

