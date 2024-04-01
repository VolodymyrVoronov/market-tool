import { ReactNode } from "react";

interface ISectionHeaderProps {
  children: ReactNode;
}

const SectionHeader = ({ children }: ISectionHeaderProps): JSX.Element => {
  return (
    <h2 className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-medium">
      {children}
    </h2>
  );
};

export default SectionHeader;
