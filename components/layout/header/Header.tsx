import { getTranslations } from 'next-intl/server';
import { HeaderClient } from './HeaderClient';
import { NAVIGATION_ITEMS } from '@/constants/navigations';

export async function Header() {
  const t = await getTranslations();

  const navigationWithLabels = NAVIGATION_ITEMS.map(item => ({
    ...item,
    label: t(item.labelKey),
  }));

  return <HeaderClient navigation={navigationWithLabels} />;
}
