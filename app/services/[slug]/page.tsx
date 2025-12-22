import { notFound } from 'next/navigation';
import ServicePage from '@/components/services/ServicePage';

const services = [
  'cardiac-pre-screening',
  'respiratory-triage',
  'hematology-blood-panel',
  'urinalysis-infection',
  'sleep-fatigue-screening',
  'imaging-gateway',
  'acute-deterioration-sepsis',
  'metabolic-chronic-risk',
  'neurological-triage',
  'test-ordering-optimization',
];

export async function generateStaticParams() {
  return services.map((slug) => ({ slug }));
}

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  if (!services.includes(params.slug)) {
    notFound();
  }

  return <ServicePage slug={params.slug} />;
}

