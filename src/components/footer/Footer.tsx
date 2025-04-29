import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Stack, StackDirection } from "@/components/ui/stack";
import { Spacing } from "@/components/ui/spacing";
import { H6, LargeText, MediumText } from "@/components/ui/typography";
import { Color } from "@/components/ui/color";

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: "/icons/footer/mail-icon.svg",
    text: "example@email.com",
    href: "mailto:example@email.com",
    isLink: true,
  },
  {
    icon: "/icons/footer/phone-icon.svg",
    text: "+0000 9876 5432",
    href: "tel:+00009876543",
    isLink: true,
  },
  {
    icon: "/icons/footer/location-pin-icon.svg",
    text: "San Francisco, California",
    isLink: false,
  },
];

const socialLinks = [
  { name: "Instagram", icon: "/icons/footer/instagram-icon.svg", href: "#" },
  { name: "Facebook", icon: "/icons/footer/facebook-icon.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/footer/linkedin-icon.svg", href: "#" },
  { name: "TikTok", icon: "/icons/footer/tiktok-icon.svg", href: "#" },
];

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link href={href}>
    <LargeText
      color={Color.NEUTRAL_GRAY_300}
      className="hover:text-white transition-colors"
    >
      {children}
    </LargeText>
  </Link>
);

interface ContactItemProps {
  icon: string;
  text: string;
  href?: string;
  isLink?: boolean;
}

const ContactItem = ({
  icon,
  text,
  href,
  isLink = false,
}: ContactItemProps) => (
  <Stack direction={StackDirection.ROW} gap={Spacing.MD} alignment="center">
    <Image src={icon} alt={text} width={24} height={24} />
    {isLink ? (
      <a href={href}>
        <MediumText
          color={Color.NEUTRAL_GRAY_300}
          className="hover:text-white transition-colors"
        >
          {text}
        </MediumText>
      </a>
    ) : (
      <MediumText color={Color.NEUTRAL_GRAY_300}>{text}</MediumText>
    )}
  </Stack>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className="bg-neutral-gray-800 rounded-[30px] px-[84px] pt-20">
        <Stack direction={StackDirection.ROW}>
          {/* Logo */}
          <Link href="/" className="mr-[185px]">
            <Image
              src="/logo-white.svg"
              alt="Fast Onward"
              width={218}
              height={80}
            />
          </Link>

          {/* Navigation menu */}
          <Stack
            direction={StackDirection.COLUMN}
            gap={Spacing.LG}
            className="w-[213px] mr-[95px]"
          >
            <H6 color={Color.WHITE}>Menu</H6>
            <Stack direction={StackDirection.COLUMN} gap={Spacing.XS}>
              {menuLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </Stack>
          </Stack>

          {/* Contact info */}
          <Stack
            direction={StackDirection.COLUMN}
            gap={Spacing.LG}
            className="w-[278px] mr-[91px]"
          >
            <H6 color={Color.WHITE}>Contact & Address</H6>
            <Stack direction={StackDirection.COLUMN} gap={Spacing.SM}>
              {contactInfo.map((item, index) => (
                <ContactItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  href={item.href}
                  isLink={item.isLink}
                />
              ))}
            </Stack>
          </Stack>

          {/* Social media links */}
          <Stack direction={StackDirection.COLUMN} gap={Spacing.LG}>
            <H6 color={Color.WHITE}>Follow Us</H6>
            <Stack direction={StackDirection.ROW} gap={Spacing.XS}>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={36}
                    height={36}
                  />
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>

        {/* Divider */}
        <div className="h-px bg-neutral-gray-600 mt-20 mb-9"></div>

        {/* Bottom copyright and links */}
        <Stack
          direction={StackDirection.ROW}
          justification="between"
          alignment="center"
          className="pb-9"
        >
          <LargeText color={Color.NEUTRAL_GRAY_300}>
            © {currentYear} Fast Onward. All rights reserved.
          </LargeText>

          <Stack
            direction={StackDirection.ROW}
            gap={Spacing.SM}
            alignment="center"
          >
            <FooterLink href="/privacy">Privacy Policy</FooterLink>

            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#0085FF" />
            </svg>

            <FooterLink href="/terms">Terms & Conditions</FooterLink>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
