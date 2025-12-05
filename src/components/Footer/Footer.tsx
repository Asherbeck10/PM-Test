import type { ReactNode } from "react";
import Logo from "../../assets/Logo/Logo";

export default function Footer() {
  return (
    <footer
      className="relative mx-auto min-h-[891px] w-full max-w-[1441px] bg-[#000000] pt-10 text-white opacity-100"
      style={{ transform: "rotate(0deg)" }}
    >
      {/* TOP PAYMENT PROVIDERS BAR */}
      <div className="flex items-center justify-center gap-16 border-b border-white/10 py-10">
        <img src="/icons/footer/payPal.png" className="h-10 opacity-80" />
        <img src="/icons/footer/masterCard.png" className="h-10 opacity-80" />
        <img src="/icons/footer/Skrill.png" className="h-10 opacity-80" />
        <img src="/icons/footer/ Pay.png" className="h-10 opacity-80" />
        <img src="/icons/footer/Visa.png" className="h-10 opacity-80" />
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-[1441px] grid-cols-1 gap-16 px-10 py-16 md:grid-cols-4">
        {/* LEFT COLUMN */}
        <div className="max-w-[350px] space-y-6">
          <Logo variant="dark" />

          <p className="text-[14px] leading-[1.6] text-white/70">
            CFDs are complex instruments and come with a high risk of losing money rapidly due to
            leverage. 21.38% of retail investor accounts generate profits when trading CFDs with
            this provider. You should consider whether you understand how CFDs work and whether you
            can afford to take the high risk of losing your money.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 pt-4">
            <Social
              icon={
                <img src="/icons/footer/Social_icon01.png" className="h-10 w-10" alt="FaceBook" />
              }
            />
            <Social
              icon={
                <img src="/icons/footer/Social_icon02.png" className="h-10 w-10" alt="Linkedin" />
              }
            />
            <Social
              icon={
                <img src="/icons/footer/Social_icon03.png" className="h-10 w-10" alt="Instagram" />
              }
            />
            <Social
              icon={
                <img src="/icons/footer/Social_icon04.png" className="h-10 w-10" alt="Youtube" />
              }
            />
            <Social
              icon={<img src="/icons/footer/Social_icon05.png" className="h-10 w-10" alt="X" />}
            />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <FooterTitle title="Quick links" />
          <FooterLink>About Us</FooterLink>
          <FooterLink>Our Markets</FooterLink>
          <FooterLink>Platforms</FooterLink>
          <FooterLink>Pricing</FooterLink>
        </div>

        {/* SUPPORT */}
        <div>
          <FooterTitle title="Support" />
          <FooterLink>Help Center</FooterLink>
          <FooterLink>FAQs</FooterLink>
          <FooterLink>Terms & Conditions</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </div>

        {/* COMPANY */}
        <div>
          <FooterTitle title="Company" />
          <FooterLink>Careers</FooterLink>
          <FooterLink>News & Updates</FooterLink>
          <FooterLink>Partnerships</FooterLink>
          <FooterLink>Legal Documents</FooterLink>
        </div>
      </div>

      {/* DISCLAIMER BLOCK */}
      <div className="border-t border-white/10 px-6 py-10 text-center">
        <p className="mx-auto max-w-[780px] text-[14px] leading-[1.6] text-white/60">
          CFDs are complex instruments and come with a high risk of losing money rapidly due to
          leverage. 21.38% of retail investor accounts generate profits when trading CFDs with this
          provider. You should consider whether you understand how CFDs work and whether you can
          afford to take the high risk of losing your money.
        </p>

        <p className="mx-auto mt-6 max-w-[900px] text-[13px] leading-[1.6] text-white/50">
          Premier Markets Ltd, trading as Premier Markets is a company incorporated under company
          number: A000003075 in Anguilla. Our registered office is located at Anguilla, The Valley,
          Kismet House, Sandy Hill, PO Box P.O.Box 174. The information on this site is not directed
          at residents of Russia, Afghanistan, Belgium, Canada, India, United States or any country
          or jurisdiction where such distribution or use would be contrary to local law, sanctions
          or regulation.
        </p>

        <p className="mt-8 text-[13px] text-white/40">
          Copyright © 2025 Premier Markets – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------------------- */
/* SUB COMPONENTS                           */
/* ---------------------------------------- */

function FooterTitle({ title }: { title: string }) {
  return <h4 className="mb-4 text-[18px] font-semibold">{title}</h4>;
}

function FooterLink({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 cursor-pointer text-[14px] text-white/70 transition hover:text-white">
      {children}
    </p>
  );
}

function Social({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
      {typeof icon === "string" ? <img src={`/social/${icon}.svg`} className="h-5 w-5" /> : icon}
    </div>
  );
}
