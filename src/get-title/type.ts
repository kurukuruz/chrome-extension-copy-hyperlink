export interface GetTitlePlugin {
  match: (url: string) => boolean;
  getTitle: () => string;
}
