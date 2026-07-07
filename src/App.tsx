import UIPage from './pages/UIPage';

function App() {
  return (
    <main className="min-h-screen w-screen">
      <nav
        className="fixed z-10 flex h-12 w-screen items-center px-4 text-gray-800 shadow-md"
        style={{ background: 'linear-gradient(to top, rgba(36, 36, 36, 0.2), rgba(36, 36, 36, 1))' }}
      >
        <div className="flex h-12 flex-grow items-center">
          <span className="block py-2">Custom React UI Component.</span>
        </div>
      </nav>
      <UIPage />
    </main>
  );
}

export default App;
