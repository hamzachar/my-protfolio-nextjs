'use client';

import { useActiveSection } from '@/lib/hooks/useActiveSection';

interface NavigationProps {
  items: Array<{
    href: string;
    label: string;
  }>;
}

export function Navigation({ items }: NavigationProps) {
  const activeSection = useActiveSection();

  return (
    <nav className="flex items-center gap-1">
      {items.map(item => {
        const sectionId = item.href.replace('#', '');
        const isActive = activeSection === sectionId;

        return (
          <a
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isActive
                ? 'bg-primary text-white'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
