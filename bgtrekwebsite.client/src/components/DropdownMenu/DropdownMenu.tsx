import React, { useState, useRef, useEffect } from "react";

export default function AddDropdownFunctionality({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownIsOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownIsOpen
        ? (dropdownRef.current.style.display = "flex")
        : (dropdownRef.current.style.display = "none");
    }
  }, [dropdownIsOpen]);

  useEffect(() => {
    console.log(children);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} onClick={handleButtonClick}>
      {children}
    </div>
  );
}
