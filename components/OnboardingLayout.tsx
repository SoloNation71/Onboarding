// ✅ /app/onboarding/index.tsx - Welcome Screen
export default function OnboardingWelcome() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Solo Nation</h1>
      <p className="mb-6">Start your journey by setting up your citizen account.</p>
      <a href="/onboarding/signup" className="bg-blue-600 text-white px-4 py-2 rounded-xl">Begin Onboarding</a>
    </div>
  );
}

// ✅ /app/onboarding/signup.tsx - Email & Password Signup
"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/onboarding/verify");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="block mb-2 p-2 border" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="block mb-4 p-2 border" />
      <button onClick={handleSignup} className="bg-green-600 text-white px-4 py-2 rounded-xl">Continue</button>
    </div>
  );
}

// ✅ /app/onboarding/verify.tsx - ID Verification Placeholder
export default function VerifyID() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Verify Your Identity</h2>
      <p>This step will require uploading a valid ID and doing a liveness check.</p>
      <a href="/onboarding/security" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</a>
    </div>
  );
}

// ✅ /app/onboarding/security.tsx - MFA Placeholder
export default function SecuritySetup() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Secure Your Account</h2>
      <p>Setup multi-factor authentication (MFA) to protect your Solo Nation ID.</p>
      <a href="/onboarding/wallet" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</a>
    </div>
  );
}

// ✅ /app/onboarding/wallet.tsx - Wallet Connection
export default function WalletConnect() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Solo Wallet Setup</h2>
      <p>Your Solo wallet is created automatically. You can also link a wallet (MetaMask, Trust, Solflare).</p>
      <a href="/onboarding/orientation" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</a>
    </div>
  );
}

// ✅ /app/onboarding/orientation.tsx - Welcome & Intro
export default function Orientation() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Orientation</h2>
      <p>Learn how to use your SoloID, access portals, and earn citizen rewards.</p>
      <a href="/onboarding/complete" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</a>
    </div>
  );
}

// ✅ /app/onboarding/complete.tsx - Completion Screen
export default function OnboardingComplete() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">You're Officially a Solo Citizen</h1>
      <p className="mb-6">Your onboarding is complete. You now have access to your portal and benefits.</p>
      <a href="/portal" className="bg-green-600 text-white px-4 py-2 rounded-xl">Go to Citizen Portal</a>
    </div>
  );
}
