import PianoKeyboard from "@/components/piano-keyboard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Piano Template</h1>
      <PianoKeyboard />
    </main>
  )
}
