/**
 * One button component for both links and real buttons.
 *
 * - Pass `href` to render a link (<a>), otherwise a <button>.
 * - `external` opens the link in a new tab and adds a screen-reader hint.
 * - `variant`: "primary" | "secondary" | "ghost"
 */
export default function Button({
  href,
  variant = "secondary",
  size = "md",
  icon = null,
  iconAfter = null,
  external = false,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconAfter}
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </>
  );

  if (href) {
    const newTab = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a className={classes} href={href} {...newTab} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
