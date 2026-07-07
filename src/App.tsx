import UIPage from './pages/UIPage';

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <nav
        className="flex h-12 items-center text-gray-800 px-4 shadow-md fixed left-0 right-0 w-full z-10"
        style={{ background: 'linear-gradient(to top, rgba(36, 36, 36, 0.2), rgba(36, 36, 36, 1))' }}
      >
        <ul
          id="navigation"
          className="flex flex-grow items-center h-12 text-gray-800 space-x-4 md:space-x-8"
        >
          <li className="flex-shrink-0">
            <a href={import.meta.env.BASE_URL} className="block py-2 hover:text-blue-500">
              Custom React UI Component.
            </a>
          </li>
        </ul>
      </nav>
      <UIPage />
    </main>
  );
}

export default App;
