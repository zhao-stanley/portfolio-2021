export const Tag = ({
  background,
  children,
}: {
  background: string;
  children: any;
}) => {
  return (
    <p
      className={`text-xs xl:text-sm font-bold px-2 py-1 rounded-full text-gray-50 ${background}`}
    >
      {children}
    </p>
  );
};
