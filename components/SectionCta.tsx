import Link from "next/link";

type SectionCtaProps = {
  href: string;
  label: string;
  className?: string;
};

const SectionCta = ({ href, label, className = "" }: SectionCtaProps) => (
  <Link
    href={href}
    className={`items-center text-[18px] font-twentienty ${className}`}
  >
    {label}
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 5.75H12.75M12.75 5.75V13.25M12.75 5.75L5.25 13.25"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
);

export default SectionCta;
