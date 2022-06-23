/* eslint-disable jsx-a11y/anchor-is-valid */
import { CaretRight } from 'phosphor-react';

interface IAnchorCardProps {
  url: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}

export default function AnchorCard({ url, icon, title, text }: IAnchorCardProps) {
  return (
    <a
      href={url}
      className="flex items-stretch gap-6 overflow-x-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center h-full p-6 bg-teal-500">{icon}</div>
      <div className="py-6">
        <strong className="block text-lg">{title}</strong>
        <span className="block text-sm text-gray-200">{text}</span>
      </div>
      <div className="flex items-center h-full p-6 text-cyan-500">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
