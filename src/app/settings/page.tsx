export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">⚙ Settings</h1>

      <div className="bg-slate-900 p-6 rounded-xl">
        <p className="text-xl">👤 Profile Settings</p>
        <p className="text-xl mt-4">🌙 Dark Mode Enabled</p>
        <p className="text-xl mt-4">🔔 Notifications Enabled</p>
      </div>
    </div>
  );
}