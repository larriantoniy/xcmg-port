import Link from "next/link";
import { contactHref, type ContactIntent } from "@/data/company";

const labels: Record<ContactIntent, string> = {
  consultation: "Получить консультацию",
  selection: "Подобрать модель",
  quote: "Получить коммерческое предложение",
};

export function CtaLink({ intent = "consultation", secondary = false }: { intent?: ContactIntent; secondary?: boolean }) {
  return <Link className={`button${secondary ? " button-secondary" : ""}`} href={contactHref(intent)}>{labels[intent]}</Link>;
}
