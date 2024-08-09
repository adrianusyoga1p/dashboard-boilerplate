const BaseTable = ({ columns, source, page, perPage, slot }) => {
  const getDataByKey = (data, path) =>
    path.split(".").reduce((acc, part) => acc && acc[part], data);
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 text-sm">
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                className={`font-medium text-gray-500 p-2.5 ${
                  column.type !== "increment" ? "min-w-44" : ""
                }`}
              >
                {column?.title}
              </th>
            ))}
          </tr>
        </thead>
        {source && (
          <tbody className="text-sm">
            {source &&
              source.map((data, index) => (
                <tr key={index} className="hover:bg-gray-100/40">
                  {columns.map((column, i) => (
                    <td
                      key={i}
                      className="text-center p-2.5 border-b border-gray-100 text-gray-700"
                    >
                      {column.type == "default" || !column.type ? (
                        <span>
                          {Array.isArray(getDataByKey(data, column.key))
                            ? getDataByKey(data, column.key).join(", ")
                            : getDataByKey(data, column.key) || "-"}
                        </span>
                      ) : column.type == "increment" ? (
                        <span>{(page - 1) * perPage + index + 1}.</span>
                      ) : column.type === "slot" && slot[column.key] ? (
                        slot[column.key](data, index)
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        )}
      </table>
      {!source.length && (
        <div className="p-4 text-center text-sm text-gray-500">No Data</div>
      )}
    </div>
  );
};

export default BaseTable;
