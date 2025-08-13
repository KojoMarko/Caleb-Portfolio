type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
        {title}
      </h2>
      <div className="w-full h-px bg-border"></div>
    </div>
  );
}
