const mapping: Record<string, string> = {
  organizations: 'organization',
  tours: 'tour',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
