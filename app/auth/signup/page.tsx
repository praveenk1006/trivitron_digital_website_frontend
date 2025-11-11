import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Trivitron Digital</h1>
            <p className="text-gray-600">
              Create an account to access detailed pricing and start your digital transformation
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </main>
  )
}
