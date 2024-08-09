const BaseInput = ({ label, onChange, value, type = 'text', placeholder }) => {
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
        className="w-full p-2.5 rounded-md border border-gray-300"
      />
    </div>
  );
};

export default BaseInput;
