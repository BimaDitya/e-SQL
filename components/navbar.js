import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="sticky h-16 top-0 left-0 right-0 z-50">
      <nav className="bg-transparent backdrop-blur-sm px-16 py-4 shadow-md">
        <div className="flex items-center justify-between font-head">
          <div>
            <Image
              src="/web-logo.svg"
              width={64}
              height={64}
              alt="Website Logo"
            />
          </div>
          <ul className="flex flex-row justify-center">
            <li className="mx-8 transition ease-in-out duration-300">
              <Link
                href="/"
                className={
                  router.pathname == "/"
                    ? "actives"
                    : "text-gray-400 hover:text-secondary-200"
                }
              >
                Beranda
              </Link>
            </li>
            <li className="mx-8 transition ease-in-out duration-300">
              <Link
                href="/material"
                className={
                  router.pathname == "/material"
                    ? "actives"
                    : "text-gray-400 hover:text-secondary-200"
                }
              >
                Materi
              </Link>
            </li>
            <li className="mx-8 transition ease-in-out duration-300">
              <Link
                href="/about"
                className={
                  router.pathname == "/about"
                    ? "actives"
                    : "text-gray-400 hover:text-secondary-200"
                }
              >
                Tentang
              </Link>
            </li>
          </ul>
          <div
            className={
              router.pathname == "/login"
                ? "actives-login"
                : "px-6 py-3 rounded-xl bg-secondary-400 text-white transition hover:bg-primary-200 hover:shadow-lg ease-in-out duration-300"
            }
          >
            <Link href="/login" className="">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
