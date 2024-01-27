import Technology from "@/app/screens/Technology";
import { useTranslations } from "next-intl";

export default function TechnologyPage() {
  const t = useTranslations("Technology");

  //TODO Refactor this because it's awful
  const title = t('title')
  const description = t('description')
  const future = t('future')

  const translations: Record<string, string> = {
     'title': title,
     'description': description,
     'future': future,
  }

  return <Technology translations={translations}/>
}
