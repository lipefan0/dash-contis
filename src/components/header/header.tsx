import Home from "@/app/page";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="h-16 w-auto bg-indigo-800 text-neutral-50 flex items-center justify-center shadow-md mb-1">
      <div>
        <Link href="/" className="font-bold text-xl">
          Contis Dashboards
        </Link>
      </div>
    </nav>
  );
}
