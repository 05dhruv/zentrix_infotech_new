'use client';
import { notFound, useParams } from 'next/navigation';
import { projectsData } from '@/lib/projectsData';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const aliasMap = {
  balprada: 'balprada-ashram',
  'balprada-furnishing': 'balprada-ashram',
  'balprada-ashram': 'balprada-ashram',
  kairvi: 'kairvi-fort-resort',
  'kairvi-fort': 'kairvi-fort-resort',
  'kairvi-fort-resort': 'kairvi-fort-resort',
  oracle: 'oracle-hospital',
  'oracle-hospital': 'oracle-hospital',
  'oracle-eye-hospital': 'oracle-hospital',
  psdecor: 'ps-decor',
  'ps-decor': 'ps-decor',
  pratha: 'pratha-healthcare',
  'pratha-healthcare': 'pratha-healthcare',
  jigyasa: 'jigyasa-hospital',
  'jigyasa-hospital': 'jigyasa-hospital',
  mtboss: 'mt-boss',
  'mt-boss': 'mt-boss',
  'kd-goi': 'kdgoi',
  kdgoi: 'kdgoi',
  buyzaar: 'buyzaar',
  vasterior: 'vasterior',
  herbsfox: 'herbsfox',
  'alluring-glimpses': 'alluring-glimpses',
};

export default function ProjectDetail({ params }) {
  const routeParams = useParams();
  const slug = routeParams?.slug || params?.slug;
  const canonicalSlug = aliasMap[slug] || slug;
  const project = projectsData[canonicalSlug] || projectsData[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailTemplate project={project} />;
}

