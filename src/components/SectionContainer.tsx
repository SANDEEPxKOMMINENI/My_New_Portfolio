
import React from "react";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className = "",
  children,
  fullHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${fullHeight ? "min-h-screen flex flex-col justify-center" : ""} ${className}`}
    >
      <div className="container px-4 sm:px-6 mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
