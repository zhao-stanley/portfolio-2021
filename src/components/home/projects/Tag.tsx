export const Tag = ({
  background,
  children,
}: {
  background: string;
  children: any;
}) => {
  return (
    <p
      className={`text-xs xl:text-sm font-semibold px-2 py-1 rounded-full text-gray-50 tracking-tight ${background}`}
    >
      {children}
    </p>
  );
};
