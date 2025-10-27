'use client';

import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiCheck,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import { Card } from '@/components/ui/Card';
import { ContactInfo as ContactInfoType, SocialLink } from '@/types';

interface ContactInfoProps {
  contactInfo: ContactInfoType;
  socialLinks: SocialLink[];
  labels: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    status: string;
  };
  socialTitle: string;
}

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGithub':
      return FiGithub;
    case 'FaLinkedin':
      return FiLinkedin;
    case 'FaEnvelope':
      return FiMail;
    default:
      return FiMail;
  }
};

export function ContactInfo({
  contactInfo,
  socialLinks,
  labels,
  socialTitle,
}: ContactInfoProps) {
  return (
    <div className="space-y-6">
      {/* Email */}
      <Card className="p-6 group hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <FiMail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{labels.email}</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
      </Card>

      {/* Phone */}
      <Card className="p-6 group hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
            <FiPhone className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{labels.phone}</h3>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </Card>

      {/* Location */}
      <Card className="p-6 group hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
            <FiMapPin className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{labels.location}</h3>
            <p className="text-muted-foreground">{contactInfo.location}</p>
          </div>
        </div>
      </Card>

      {/* Availability */}
      <Card className="p-6 group hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
            <FiCheck className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{labels.availability}</h3>
            <p className="text-muted-foreground">{labels.status}</p>
          </div>
        </div>
      </Card>

      {/* Social Links */}
      <div>
        <h3 className="font-semibold mb-4">{socialTitle}</h3>
        <div className="flex gap-4">
          {socialLinks.map(link => {
            const IconComponent = getSocialIcon(link.icon);
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                aria-label={link.name}
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
