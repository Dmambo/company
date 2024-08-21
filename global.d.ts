export {};

declare global {
  interface Window {
    Weglot: {
      initialize: (config: { api_key: string }) => void;
    };
  }
}
