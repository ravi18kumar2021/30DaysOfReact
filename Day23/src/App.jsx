import './App.css'
import CardLayout from './components/CardLayout'

function App() {

  return (
    <>
      <div className='bg-gray-800 p-4 rounded-md border-4 border-gray-300'>
        <h1 className='text-yellow-500 border-2 border-gold-200 inline-block p-2'>Day 23 : Layout Wrapper Pattern</h1>
        <div className='grid grid-cols-3 gap-3'>
          <CardLayout title="Profile Information">
            <p><strong>Name : </strong>Ravi Kumar</p>
            <p><strong>Email : </strong>programmer.ravi.2022@gmail.com</p>
            <p><strong>Designation : </strong>Web Developer</p>
          </CardLayout>
          <CardLayout title="About the Project">
            <p>This project is built using the <em>Card Component</em> within the <strong>Layout Wrapper Pattern.</strong></p>
          </CardLayout>
          <CardLayout title="Features">
            <ul className='list-disc ml-5'>
              <li>Reusable Layout</li>
              <li>Pass dynamic content</li>
              <li>Clear and modular  UI</li>
            </ul>
          </CardLayout>
        </div>
      </div>
    </>
  )
}

export default App
