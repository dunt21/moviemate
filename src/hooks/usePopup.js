"use client";

import { useState } from "react";

export default function usePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [cardId, setCardID] = useState(null);

  const open = () => setShowPopup(true);
  const close = () => setShowPopup(false);

  return {
    showPopup,
    open,
    close,
    cardId,
    setCardID,
    setShowPopup,
  };
}
