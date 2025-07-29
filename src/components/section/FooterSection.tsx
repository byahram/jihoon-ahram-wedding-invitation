interface FooterProps {
  msg: string;
}

export default function FooterSection({ msg }: FooterProps) {
  return (
    <footer className="w-full max-w-md mx-auto px-4 py-8 text-center text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-background">
      {msg}
      <p className="mt-5 text-[13px]">made by Ahram</p>
    </footer>
  );
}
