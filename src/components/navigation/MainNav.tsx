import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonText } from "@/components/ui/typography";
import Image from "next/image";
import { Stack, StackDirection } from "@/components/ui/stack";
import { Spacing } from "@/components/ui/spacing";
import { TicketButton } from "@/components/ui/TicketButton";
import { Color } from "../ui/color";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function MainNav() {
  return (
    <header className="h-[108px] bg-transparent">
      <Container className="items-center md:px-0 relative w-[1240px] flex">
        <Stack
          direction={StackDirection.ROW}
          justification="between"
          alignment="center"
          className="w-full z-50"
        >
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="logo" width={190} height={70} />
          </Link>

          <Stack
            direction={StackDirection.ROW}
            gap={Spacing.XXL}
            alignment="center"
            className="hidden md:flex h-[60px] bg-white rounded-[100px] px-[50px] py-[25px]"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name === "Home" ? (
                  <ButtonText color={Color.PRIMARY} className="font-bold">
                    {link.name}
                  </ButtonText>
                ) : (
                  <ButtonText color={Color.NEUTRAL_GRAY_500}>
                    {link.name}
                  </ButtonText>
                )}
              </Link>
            ))}
          </Stack>

          <TicketButton href="/tickets" />
        </Stack>
      </Container>
    </header>
  );
}
