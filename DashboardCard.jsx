// Wiederverwendbare UI-Karte (Platzhalter)
export default function DashboardCard({ title, amount }) { return <div className='bg-white rounded-xl p-4 shadow'>{title}: {amount} €</div>; }