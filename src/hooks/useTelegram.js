const tg = window.Telegram.WebApp;

import React from "react";

export default function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
  };
}
