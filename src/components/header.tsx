import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-29 flex items-center">
      <Image
        src="/logo.webp"
        alt="teste"
        width={229}
        height={50}
        className="w-44 sm:w-[229px]"
      />
    </header>
  );
}
