import { useState } from "react";
type Link={
  id: number;
  url: string;
  text: string;
}
const navLinks=[
  {
  id:1,
  url:'some url',
  text:'some text',
},
{
  id:2,
  url:'some url2',
  text:'some text2',
},
{
  id:3,
  url:'some url3',
  text:'some text3',
}
]
function Component() {
  const [text, setText] = useState('ShakeAnd Bake');
  const [number, setnumber] = useState(23);
  const [list, setLIST] = useState<string[]>([]);
  const [links, setLinks]= useState<Link[]>(navLinks);
  const [showText, setShowText] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      {showText && <p>{text}</p>}
      {showNumber && <p>{number}</p>}
      {showList && <p>{list}</p>}
      <button className="btn btn-center" onClick={()=>
        {
          setText('Hi Mom');
          setnumber(23);
          setLIST(['padre'+ " " +'madre']);
          setLinks([...links, {id:4, url:'hello', text:'hello there'}])
          setShowList(true)
          setShowText(true);
          setShowNumber(true);
        }
      }>click Me</button>
    </div>
  );
}
export default Component;
