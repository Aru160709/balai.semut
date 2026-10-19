import type { FilterOption } from '../types';

interface FilterBarProps {
  options: FilterOption[];
  active: string;
  onChange: (value: string) => void;
  label: string;
}

export default function FilterBar({ options, active, onChange, label }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`filter-btn${option.value === active ? ' is-active' : ''}`}
          aria-pressed={option.value === active}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
