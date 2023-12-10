import { forwardRef } from "react";

export const Select = forwardRef(({ options }, ref) => {
  return (
    <select ref={ref} onChange={(e) => e.target.value}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
