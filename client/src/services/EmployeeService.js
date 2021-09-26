export async function getAllEmployees() {
  try {
    const response = await fetch("/api/employees");
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createEmployee(data) {
  const response = await fetch("/api/employees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ employee: data }),
  });
  return await response.json();
}

export async function findCommon(id1, id2) {
  const response = await fetch("/api/lca/" + id1 + "/" + id2);
  return await response.json();
}
