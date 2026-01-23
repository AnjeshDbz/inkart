import Image from "next/image";

type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 px-3 text-center">
      {/* Left line */}
      <div className="h-[3px] flex-1 max-w-[50px] sm:max-w-[200px] bg-secondary" />

      {/* Left icon */}
      <Image
        src="/images/heading-img.webp"
        alt="icon"
        width={32}
        height={32}
        className="w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] object-contain animate-[spin_10s_linear_infinite]"
      />

      {/* Text */}
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black leading-tight max-w-[160px] sm:max-w-none">
        {title}
      </h2>

      {/* Right icon */}
      <Image
        src="/images/heading-img.webp"
        alt="icon"
        width={32}
        height={32}
        className="w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] object-contain animate-[spin_10s_linear_infinite]"
      />

      {/* Right line */}
      <div className="h-[3px] flex-1 max-w-[50px] sm:max-w-[200px] bg-secondary" />
    </div>
  );
}
