import Link from 'next/link';

export default function Home() {
  // Generate links for all Day folders
  const days = Array.from({ length: 69 }, (_, i) => `Day_${String(i + 1).padStart(2, '0')}`);

  return (
      <div>
        <h1>Welcome to My Next.js Project</h1>
        <ul>
          {days.map(day => (
              <li key={day}>
                <Link href={`/${day}`}>
                  <div>{day}</div>
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
}
