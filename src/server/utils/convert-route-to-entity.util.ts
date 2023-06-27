const mapping: Record<string, string> = {
  'digital-graphics': 'digital_graphic',
  organizations: 'organization',
  purchases: 'purchase',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
