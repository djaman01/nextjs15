'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2 className="text-3xl text-red-500">Something went wrong!</h2>
        <button className="text-3xl text-green-500" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}