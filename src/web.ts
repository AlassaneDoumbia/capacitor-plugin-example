import { WebPlugin } from '@capacitor/core';
import { MyCustomPluginPlugin } from './definitions';

export class MyCustomPluginWeb extends WebPlugin implements MyCustomPluginPlugin {
  constructor() {
    super({
      name: 'MyCustomPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getContacts(filter: string): Promise<{ results: any[] }> {
    console.log('filter: ', filter);
    return {
      results: [{
        firstName: 'Dummy',
        lastName: 'Entry',
        telephone: '123456'
      }]
    };
  }
  
}

const MyCustomPlugin = new MyCustomPluginWeb();

export { MyCustomPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MyCustomPlugin);
