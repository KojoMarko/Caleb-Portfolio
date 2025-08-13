import React from 'react';

type SectionTitleProps = {
  title: string;
  description: string | React.ReactNode;
};

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2 className="text-3xl font-bold uppercase tracking-wider mb-2">{title}</h2>
      <div className="w-16 h-1 bg-primary mb-4 mx-auto"></div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
