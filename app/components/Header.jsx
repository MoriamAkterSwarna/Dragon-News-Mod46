import Image from "next/image";
import logoImg from "../assets/logo.png";

export default function Header() {
  return (
    <div className="text-center py-8 border-b">
      <Image
      loading="eager"
        src={logoImg}
        alt="Logo"
        width={350}
        height={200}
        className="mx-auto w-auto max-w-87.5 h-auto"
      />
      <p className="mt-2">Journalism Without Fear or Favour</p>
    </div>
  );
}
