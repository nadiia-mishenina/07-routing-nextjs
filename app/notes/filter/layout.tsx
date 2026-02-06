import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";


type Props = {
  children: ReactNode;
  sidebar: ReactNode; 
};

export default function LayoutNotes({ children, sidebar }: Props) {
  return (
    <div className={css.wrapper}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <main className={css.content}>{children}</main>
    </div>
  );
}
