import { useState, useCallback } from 'react';

const useOpen = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const toggleOpen = useCallback(() => setOpen(!open), [open]);

  return { open, handleOpen, handleClose, toggleOpen, setOpen };
};

export default useOpen;