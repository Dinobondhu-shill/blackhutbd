import { useState, useEffect } from 'react'

export default function VerifyCode() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [resendTimer, setResendTimer] = useState(0)

  useEffect(() => {
    let timer
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [resendTimer])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation for 6-digit code
    if (!/^\d{6}$/.test(code)) {
      setError('Please enter a valid 6-digit code')
      return
    }
    
    // Handle successful verification
    console.log('Code submitted:', code)
  }

  const handleResend = () => {
    if (resendTimer === 0) {
      // Handle resend logic here
      console.log('Resending code...')
      setResendTimer(30) // Start 30 second countdown
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold">Verify Number</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the code sent to +880018546900013
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              maxLength="6"
              value={code}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, '')
                setCode(value)
                setError('')
              }}
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter verification code"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleResend}
              disabled={resendTimer > 0}
              className="text-pink-600 hover:text-pink-500 text-sm font-medium disabled:opacity-50"
            >
              {resendTimer > 0 ? `Resend Code (${resendTimer}s)` : 'Resend Code'}
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

