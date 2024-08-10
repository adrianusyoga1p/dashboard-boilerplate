const BaseInput = ({ label, onChange, value, type = 'text', placeholder, name }) => {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-semibold">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="w-full p-2 rounded-md border border-gray-300"
      />
    </div>
  );
};

export default BaseInput;
