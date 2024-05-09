import { Layout } from 'lucide-react';
import * as React from 'react';

interface ILayoutProps {}

Const Layout: React.FunctionComponent<ILayoutProps> = () => {
 return (
      <div className='"flex bg-white">
            <aside className= "flex gap-x-4 bg-gray-800 fixed" top-0 left-0 z-40 lg:w-60 h-screen">
            <Sidebar />
            
            
            </aside>
          <div></div>
          <aside></aside>
       </div>
    );
  }
}

export default Layout;
