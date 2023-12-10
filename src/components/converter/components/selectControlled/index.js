export const SelectControlled = ({ options, value, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
