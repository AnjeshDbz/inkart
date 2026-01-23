import Image from "next/image";

type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-4 my-10 overflow-hidden">
      {/* Left line */}
      <div className="h-[3px] w-16 sm:w-32 bg-secondary" />

      {/* Left icon */}
      <Image
        src="/images/heading-img.webp"
        alt="icon"
        width={45}
        height={45}
        className="object-contain animate-[spin_8s_linear_infinite]"
      />

      {/* Dynamic Text */}
      <h2 className="text-xl sm:text-4xl font-bold text-black text-center whitespace-nowrap">
        {title}
      </h2>

      {/* Right icon */}
      <Image
        src="/images/heading-img.webp"
        alt="icon"
        width={45}
        height={45}
        className="object-contain animate-[spin_8s_linear_infinite]"
      />

      {/* Right line */}
      <div className="h-[3px] w-16 sm:w-32 bg-secondary" />
    </div>
  );
}
