import { Event, Subscribe } from '@pages';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/event" element={<Event />} />
      <Route path="/" element={<Subscribe />} />
    </Routes>
  );
}
