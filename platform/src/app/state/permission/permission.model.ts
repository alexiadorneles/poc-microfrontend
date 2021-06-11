export interface Permission {
  id: number;
  name: string;
}

export function createPermission(params: Partial<Permission>) {
  return params as Permission;
}
