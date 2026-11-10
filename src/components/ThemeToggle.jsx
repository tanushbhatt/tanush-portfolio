import { MonitorIcon, MoonIcon, SunIcon } from "./Icons.jsx";

const OPTIONS = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
];

/** Light | Dark | System selector. "System" follows the device setting. */
export default function ThemeToggle({ preference, onChange }) {
  return (
    <div className="theme-toggle" role="group" aria-label="Colour theme">
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          className="theme-toggle__btn"
          aria-pressed={preference === value}
          aria-label={`${label} theme`}
          title={`${label} theme`}
          onClick={() => onChange(value)}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}
