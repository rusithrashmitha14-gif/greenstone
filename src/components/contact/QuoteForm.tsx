'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  location?: string;
  service?: string;
  description?: string;
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!data.location.trim()) {
      newErrors.location = 'Please select or enter your property location / neighborhood in Tampa.';
    }

    if (!data.service) {
      newErrors.service = 'Please select the primary service you require.';
    }

    if (!data.description.trim()) {
      newErrors.description = 'Please provide a brief description of your project or ideas.';
    } else if (data.description.trim().length < 15) {
      newErrors.description = 'Please describe your project in a little more detail (at least 15 characters).';
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      location: true,
      service: true,
      budget: true,
      timeline: true,
      description: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      service: '',
      budget: '',
      timeline: '',
      description: '',
    });
    setErrors({});
    setTouched({});
  };

  if (submittedData) {
    return (
      <div className="rounded-3xl bg-white border border-border-subtle p-8 sm:p-12 shadow-card">
        <div className="w-14 h-14 rounded-2xl bg-accent-light border border-accent/25 text-accent flex items-center justify-center mb-6 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-light text-accent border border-accent/25 uppercase tracking-wider">
          Quote Request Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mt-4">
          Thank You! We Have Received Your Project Request
        </h3>

        <div className="mt-4 p-4 rounded-xl bg-bg-secondary border border-border-subtle text-xs sm:text-sm text-text-secondary leading-relaxed">
          <p className="flex items-start gap-2">
            <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>
              A Greenstone landscape architect will review your property notes and reach out within 24 business hours to discuss your project scope and schedule an on-site consultation.
            </span>
          </p>
        </div>

        {/* Summary of inquiry input */}
        <div className="mt-6 p-5 rounded-2xl bg-bg-secondary/70 border border-border-subtle space-y-2.5 text-xs">
          <div className="text-[11px] font-semibold uppercase text-text-muted tracking-wider pb-2 border-b border-border-subtle">
            Your Project Details:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text-secondary">
            <div>
              <span className="text-text-muted">Client Name:</span>{' '}
              <strong className="text-text-primary">{submittedData.name}</strong>
            </div>
            <div>
              <span className="text-text-muted">Email:</span>{' '}
              <strong className="text-text-primary">{submittedData.email}</strong>
            </div>
            <div>
              <span className="text-text-muted">Phone:</span>{' '}
              <strong className="text-text-primary">{submittedData.phone || 'Not provided'}</strong>
            </div>
            <div>
              <span className="text-text-muted">Location:</span>{' '}
              <strong className="text-text-primary">{submittedData.location}</strong>
            </div>
            <div>
              <span className="text-text-muted">Service:</span>{' '}
              <strong className="text-accent">{submittedData.service}</strong>
            </div>
            <div>
              <span className="text-text-muted">Budget:</span>{' '}
              <strong className="text-text-primary">{submittedData.budget || 'Not specified'}</strong>
            </div>
          </div>
          <div className="pt-2 text-text-secondary">
            <span className="text-text-muted">Project Description:</span>
            <p className="mt-1 italic text-text-primary">“{submittedData.description}”</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button onClick={handleReset} variant="secondary" size="md" className="w-full sm:w-auto">
            <RefreshCw className="w-4 h-4 mr-2" />
            <span>Submit Another Inquiry</span>
          </Button>
          <Button href="/work" variant="outline" size="md" className="w-full sm:w-auto">
            <span>Explore Portfolio Projects</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white border border-border-subtle p-6 sm:p-10 shadow-card space-y-6"
    >
      <div className="border-b border-border-subtle pb-6">
        <h2 className="text-2xl font-bold text-text-primary">
          Request a Free Consultation & Quote
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-text-secondary">
          Tell us about your outdoor living goals. We will review your property and prepare a comprehensive proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Your Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Julian Montgomery"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.name && touched.name
                ? 'border-red-500 bg-red-50/50'
                : 'border-border-subtle focus:border-accent'
            }`}
          />
          {errors.name && touched.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. julian@example.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.email && touched.email
                ? 'border-red-500 bg-red-50/50'
                : 'border-border-subtle focus:border-accent'
            }`}
          />
          {errors.email && touched.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Phone Number <span className="text-text-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(813) 555-0100"
            className="w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border border-border-subtle focus:bg-white focus:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Property Location */}
        <div>
          <label htmlFor="location" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Property Location / Tampa Area <span className="text-accent">*</span>
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? 'location-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.location && touched.location
                ? 'border-red-500 bg-red-50/50'
                : 'border-border-subtle focus:border-accent'
            }`}
          >
            <option value="">Select your Tampa neighborhood...</option>
            <option value="South Tampa">South Tampa</option>
            <option value="Davis Islands">Davis Islands</option>
            <option value="Hyde Park">Hyde Park</option>
            <option value="Palma Ceia">Palma Ceia</option>
            <option value="Beach Park">Beach Park</option>
            <option value="Carrollwood">Carrollwood</option>
            <option value="Culbreath Isles">Culbreath Isles</option>
            <option value="Other Tampa Bay Location">Other Tampa Bay Location</option>
          </select>
          {errors.location && touched.location && (
            <p id="location-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.location}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service Required */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Service Required <span className="text-accent">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.service && touched.service
                ? 'border-red-500 bg-red-50/50'
                : 'border-border-subtle focus:border-accent'
            }`}
          >
            <option value="">Select a landscaping discipline...</option>
            <option value="Complete Multi-Disciplinary Master Plan">Complete Multi-Disciplinary Master Plan</option>
            <option value="Landscape Design & 3D Master Planning">Landscape Design & 3D Master Planning</option>
            <option value="Hardscaping, Travertine & Patios">Hardscaping, Travertine & Patios</option>
            <option value="Outdoor Living & Pergolas">Outdoor Living & Pergolas</option>
            <option value="Garden Design & Botanical Planting">Garden Design & Botanical Planting</option>
            <option value="Lawn Care & Estate Turf Maintenance">Lawn Care & Estate Turf Maintenance</option>
            <option value="Tree & Specimen Palm Care">Tree & Specimen Palm Care</option>
          </select>
          {errors.service && touched.service && (
            <p id="service-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* Estimated Budget (Optional) */}
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Estimated Budget <span className="text-text-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border border-border-subtle focus:bg-white focus:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select budget range...</option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000+">$100,000+ (Full Estate Masterplan)</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="description" className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
          Project Description & Priorities <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Describe your property, what you want to change (e.g. install travertine patio, improve drainage, plant tropical privacy screening, outdoor kitchen)..."
          aria-required="true"
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? 'description-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/60 text-text-primary text-sm border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.description && touched.description
              ? 'border-red-500 bg-red-50/50'
              : 'border-border-subtle focus:border-accent'
          }`}
        />
        {errors.description && touched.description && (
          <p id="description-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.description}</span>
          </p>
        )}
      </div>

      {/* Privacy Guarantee */}
      <div className="p-3.5 rounded-xl bg-bg-secondary border border-border-subtle flex items-start gap-2.5 text-xs text-text-muted">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p>
          <strong className="text-text-secondary">Privacy Guarantee:</strong> Your information is kept strictly confidential and used solely to prepare your custom landscaping proposal.
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent-hover shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Submitting Your Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Quote Request</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
