
import React from 'react';

export interface Skill {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface SkillsetItem {
  name: string;
  icon: React.ReactNode;
}

export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
}
