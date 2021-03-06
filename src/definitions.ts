declare module '@capacitor/core' {
  interface PluginRegistry {
    MyCustomPlugin: MyCustomPluginPlugin;
  }
}

export interface MyCustomPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getContacts(filter: string): Promise<{results: any[]}>;
}
