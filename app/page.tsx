"use client"

import { useState } from "react"
import { ArrowDown } from "./arrowDown";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Option 1");

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <h1>This is a Title.</h1>
      <h2>This is a Subtitle.</h2>
      <p>This is a paragraph.</p>
      <a href='https://freecodecamp.org'>This is a anchor.</a>
      <div className='my-4'>
        <button className='btn btn-primary'>This is a primary Button</button>
      </div>
      <div className='my-4'>
        <button className='btn btn-secondary'>This is a secondary Button</button>
      </div>
      <div className='my-4'>
        <button disabled className='btn btn-primary'>This is a disabled Button</button>
      </div>
      <div>
        <input type="text" placeholder='E-mail' />
      </div>
      <div>
        <input disabled type="text" placeholder='E-mail' />
      </div>
      <div>
        <input type="date" />
      </div>
      <div className='flex items-start my-4'>
        <input type="checkbox" id='checkbox' />
        <label form="checkbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque odio sed enim congue iaculis. Phasellus aliquam augue quis quam lacinia, in dapibus tortor posuere. Nam facilisis turpis enim, eu lacinia tellus pretium ac.</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="Select">
        <div className="child flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
          <span>{selectValue}</span>
          <div className={isOpen ? 'rotate-180 transition' : 'rotate-0 transition'}>
          <ArrowDown />
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className='flex flex-col divide-y'>
              <li className="child" onClick={() => updateValue("Option 1")}>Option 1</li>
              <li className="child" onClick={() => updateValue("Option 2")}>Option 2</li>
              <li className="child" onClick={() => updateValue("Option 3")}>Option 3</li>
            </ul>
          </div>
        )}
      </div>



      {/* <h1 className='mt-2'>This is another Title.</h1>
      <h2 className='mt-1'>This is another Subtitle.</h2> */}
    </div>
  )
}
