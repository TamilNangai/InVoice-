export function filterTableData<T>(
  data: T[],
  searchText: string,
  fields: (keyof T)[]
): T[] {
  if (!searchText) return data;

  const lowerSearch = searchText.toLowerCase();

  return data.filter((item) =>
    fields.some((field) =>
      String(item[field] ?? "")
        .toLowerCase()
        .includes(lowerSearch)
    )
  );
}