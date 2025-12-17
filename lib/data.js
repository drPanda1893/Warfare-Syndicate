import { Shield, Crosshair, Anchor, Users, Globe, Youtube } from 'lucide-react';

// Hintergrund-Bilder (Hier später deine echten Pfade eintragen)
export const BACKGROUNDS = {
  home: "radial-gradient(circle at 60% 50%, #1e293b 0%, #020617 100%)",
  squads: "radial-gradient(circle at 20% 50%, #14532d 0%, #020617 100%)",
  join: "radial-gradient(circle at 80% 20%, #1e3a8a 0%, #020617 100%)",
  mortar: "radial-gradient(circle at 50% 80%, #3f6212 0%, #0f172a 100%)",
  staff: "radial-gradient(circle at 50% 50%, #4c0519 0%, #020617 100%)" // Dunkelrot für Admin/Staff
};

// Externe Links
export const SOCIALS = {
  discord: "https://discord.com",
  youtube: "https://www.youtube.com/@WarfareSyndicate",
  website: "#" // Aktuelle Seite
};

// Squad Daten
export const SQUADS = [
  {
    id: 'dagger',
    name: 'DAGGER',
    type: 'ASSAULT',
    icon: <Shield className="w-6 h-6" />,
    desc: 'Frontline Shock Troops. High Aggression.',
    stats: { strength: 39, status: 'ACTIVE' }
  },
  {
    id: 'cobra',
    name: 'COBRA',
    type: 'ASSAULT',
    icon: <Crosshair className="w-6 h-6" />,
    desc: 'Tactical Manuever & Flanking Specialists.',
    stats: { strength: 34, status: 'ACTIVE' }
  },
  {
    id: 'raven',
    name: 'RAVEN',
    type: 'SUPPORT',
    icon: <Anchor className="w-6 h-6" />,
    desc: 'Logistics, Air Support & Heavy Weapons.',
    stats: { strength: 4, status: 'ELITE' } // Capped at 5
  }
];

// Staff Liste
export const STAFF = {
  admins: [
    { name: "SvenTM", role: "ADMIN", color: "text-red-500" },
    { name: "Ultradar.", role: "ADMIN", color: "text-red-500" }
  ],
  mods: [
    { name: "Slavinkje", role: "MODERATOR", color: "text-cyan-400" }
  ],
  reps: [
    { name: "timmmmmb", role: "GM / Rep", context: "Game Master" },
    { name: "CouldBeToby", role: "GM / Rep", context: "Game Master" },
    { name: "Kohler", role: "SL / Rep", context: "Cobra Squad" },
    { name: "Colesy09", role: "SL / Rep", context: "Dagger Squad" },
    { name: "SII Issac 039 R", role: "SL / Rep", context: "Raven Squad" }
  ]
};