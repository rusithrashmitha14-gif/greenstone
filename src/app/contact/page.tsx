import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { QuoteForm } from '@/components/contact/QuoteForm';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/MotionWrapper';

export const metadata: Metadata = {
  title: 'Request a Free Quote | Contact Greenstone Landscaping',
  description:
    'Request a free consultation and project estimate for your Tampa home. Master landscape planning, stone patios, and Florida-friendly gardens.',
};

export default function ContactPage() {
  const serviceAreas = [
    'South Tampa',
    'Davis Islands',
    'Hyde Park',
    'Palma Ceia',
    'Beach Park',
    'Carrollwood',
    'Culbreath Isles',
    'Westchase',
    'Tampa Palms',
  ];

  const expectations = [
    {
      title: 'Prompt Initial Response',
      desc: 'We review your property details and contact you within 1 business day.',
    },
    {
      title: 'Complimentary On-Site Visit',
      desc: 'We walk your property to evaluate drainage, sun exposure, and elevations.',
    },
    {
      title: 'Itemized Transparent Scope',
      desc: 'You receive a complete 3D plan and fixed-price line item breakdown with zero surprises.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <Badge variant="accent" className="mb-4">
              Complimentary Consultation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
              Request a Free Project Quote
            </h1>
            <p className="mt-4 text-base sm:text-xl text-text-secondary leading-relaxed">
              Ready to reimagine your outdoor space? Tell us about your property and ideas to schedule a consultation with our Tampa landscape team.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 p-3.5 rounded-xl bg-white border border-border-subtle text-xs text-text-secondary shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                <strong>Quick Response Guaranteed:</strong> Submit your project details below and an outdoor design specialist will contact you within 24 business hours.
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 2-Column Layout */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context, Service Area & What to Expect */}
            <div className="lg:col-span-5 space-y-8">
            {/* Contact Information Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-border-subtle space-y-5 shadow-card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                Contact & Consultation Information
              </h2>

              <div className="space-y-4 text-sm text-text-secondary">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-light text-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-text-primary block">Tampa Service Headquarters</strong>
                    <span className="text-xs text-text-muted">
                      Serving South Tampa & Greater Tampa Bay, FL
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-light text-accent shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-text-primary block">Direct Email</strong>
                    <span className="text-xs text-text-muted font-mono">
                      quotes@greenstone-landscaping.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-light text-accent shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-text-primary block">Direct Phone</strong>
                    <span className="text-xs text-text-muted font-mono">
                      (813) 555-0194
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-light text-accent shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-text-primary block">Consultation Hours</strong>
                    <span className="text-xs text-text-muted">
                      Monday – Friday: 8:00 AM – 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-border-subtle space-y-4 shadow-card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                What to Expect Next
              </h2>
              <div className="space-y-3.5">
                {expectations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="p-6 rounded-3xl bg-white border border-border-subtle shadow-card">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-3">
                Key Neighborhoods Served
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 text-xs rounded-md bg-bg-secondary text-text-secondary border border-border-subtle"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Quote Request Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
  );
}
