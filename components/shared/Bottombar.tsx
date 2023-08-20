"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function Bottombar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const activeLink =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <div key={link.label}>
              <Link
                href={link.route}
                key={link.label}
                className={`bottombar_link ${activeLink && "bg-primary-500"}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-subtitle-medium text-light-1 max-sm:hidden">
                  {link.label.split("/s+./")[0]}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
