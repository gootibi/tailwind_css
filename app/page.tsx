import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>This is a Title.</h1>
      <h2>This is a Subtitle.</h2>
      <p>This is a paragraph.</p>
      <a href='https://freecodecamp.org'>This is a anchor.</a>
      <div className='my-4'>
        <button className='btn'>This is a Button</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" id='checkbox' />
        <label form="checkbox">CheckBox</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <h1 className='mt-2'>This is another Title.</h1>
      <h2 className='mt-1'>This is another Subtitle.</h2>
    </div>
  )
}
