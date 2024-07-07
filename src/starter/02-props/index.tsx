import type { PropsWithChildren } from "react";
// type CompenentProps = {
//   name: string; 
//   id: number;
//   children?: React.ReactNode;
// }
type CompenentProps = PropsWithChildren<{
  name: string; 
  id: number;
}>;
function Component({name, id, children}:CompenentProps) {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>Id:{id}</h2>
      {children}
    </div>
  );
}
export default Component;
