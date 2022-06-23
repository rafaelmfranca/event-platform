interface IAnchorButtonProps {
  url: string;
  variant: 'primary' | 'secondary';
  text: string;
  icon: React.ReactNode;
}

function AnchorButton({ url, variant, text, icon }: IAnchorButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        href={url}
        className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors bg-teal-500 rounded hover:bg-teal-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        {text}
      </a>
    );
  }

  return (
    <a
      href={url}
      className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors border rounded border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {text}
    </a>
  );
}

export default AnchorButton;
