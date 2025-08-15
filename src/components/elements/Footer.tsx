import { Container } from "../shared/Container";
import logoLight from "/assets/logoasd.png";
import logoDark from "/assets/logos/dark/logoasd-dark.png";
import { useThemeStore } from "../../store/ThemeStore";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer
      className={`relative pt-15 rounded-t-3xl ${
        theme === "light"
          ? "bg-violet-100/60 border-t border-violet-200 shadow-sm"
          : "bg-box-bg"
      }`}
    >
      <Container className="pb-1">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8">
          {/* Logo & Nama */}
          <div className="flex flex-col gap-0 items-center md:items-start mb-4 md:mb-0 max-w-xs">
            <div className="flex items-center gap-3">
              <img
                src={theme === "dark" ? logoDark : logoLight}
                className="w-20 h-6"
                alt="ASD Logo"
              />
              <span className="text-lg font-semibold text-heading-1">
                Axioo Sentra Digital
              </span>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center md:text-left">
              Solusi digital terdepan untuk pengembangan bisnis, edukasi, dan
              teknologi di Indonesia.
            </div>
          </div>

          {/* Alamat */}
          <div className="flex flex-col items-start mt-6 md:mt-0 min-w-[120px] text-left">
            <span className="flex gap-6 text-heading-1 justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0 font-semibold">
              Alamat
            </span>
            <span className="flex flex-col gap-1 pt-3 text-xs text-gray-400 md:text-left text-center min-w-[180px]">
              Jl. Mastrip No.357, Jrebeng Wetan, Kec. Kedopok
            </span>
            <span className="flex flex-col gap-1 text-xs text-gray-400 md:text-left text-center min-w-[180px]">
              Kota Probolinggo, Jawa Timur 67239, Indonesia
            </span>
          </div>
          <div className="flex flex-col items-start mt-6 md:mt-0 min-w-[120px] text-left">
            <span className="flex gap-6 text-heading-1 justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0 font-semibold">
              Media Sosial
            </span>
            <ul className="flex flex-col gap-1 pt-2 text-sm text-violet-600 items-start text-left">
              <li>
                <a
                  href="https://www.instagram.com/axioosentradigital.smexa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=100093836730569"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@axioosentradigital.smexa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi */}
          <ul className="flex gap-6 text-heading-1 justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
      <Container>
        <div className="border-t border-box-border mt-6 pt-4 text-center text-xs text-gray-400 pb-4">
          &copy; {new Date().getFullYear()} Axioo Sentra Digital. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};
