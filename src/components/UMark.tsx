type Props = { className?: string; size?: string };

export function UMark({ className = "", size = "0.78em" }: Props) {
  return (
    <span
      role="img"
      aria-label="Ü"
      className={`inline-block align-[-0.05em] ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/logo/u-icon.png)",
        maskImage: "url(/logo/u-icon.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}
