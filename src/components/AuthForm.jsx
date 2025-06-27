import { useState } from "react";

export default function AuthForm({ onSubmit, isLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl shadow-lg w-full max-w-md text-white backdrop-blur-md">
      <h2 className="text-2xl font-cinzel text-center mb-6 tracking-wide">
        {isLogin
          ? "🔮 Welcome Back, Star Seeker"
          : "🌙 Create Your Cosmic Account"}
      </h2>
      <form
        onSubmit={(e) => onSubmit(e, email, password)}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-purple-800 bg-opacity-30 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-purple-800 bg-opacity-30 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-xl transition duration-300"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
