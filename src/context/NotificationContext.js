import { createContext, useState } from "react";

export const NotificationContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const value = { isNotiOpen, setIsNotiOpen };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
