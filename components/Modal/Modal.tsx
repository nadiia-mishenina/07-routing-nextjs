"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import css from "./Modal.module.css";

type Props = { children: ReactNode };

export default function Modal({ children }: Props) {
  const router = useRouter();

  return (
    <div className={css.backdrop} onClick={() => router.back()}>
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        <button className={css.close} onClick={() => router.back()}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
