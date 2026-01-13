
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudyData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  challenge: string;
  challengePoints: string[];
  solutionTitle: string;
  solutions: { title: string; desc: string }[];
  results: { value: string; label: string }[];
  insight: string;
  clientTitle: string;
  clientQuote: string;
}
