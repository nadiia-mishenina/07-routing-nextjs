import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: { id: string };
};

export default function NoteModalPage({ params }: Props) {
  return (
    <Modal>
      <NotePreview noteId={params.id} />
    </Modal>
  );
}
