// Shafer Clinic - Personalized Practice Configuration
// AI-Generated from Healthcare Automation Agent
// Manhattan Premier Plastic Surgery & Medical Spa

export interface PracticeConfig {
  id: string;
  name: string;
  doctor: string;
  location: string;
  agentId: string;
  type: 'cosmetic' | 'wellness' | 'chiropractic';
  port: number;
  subdomain: string;
  
  // Chat Configuration
  chat: {
    assistantName: string;
    initialMessage: string;
    systemPrompt: string;
  };
  
  // Voice Configuration  
  voice: {
    firstMessage: string;
  };
  
  // Services
  services: Array<{
    name: string;
    description: string;
    duration?: string;
  }>;
  
  // Branding
  branding: {
    primaryColor: string;
    tagline: string;
    focus: string;
  };
}

export const practiceConfigs: Record<string, PracticeConfig> = {
  'shafer-clinic': {
    id: 'shafer-clinic',
    name: 'Shafer Clinic',
    doctor: 'Dr. David Shafer, MD, FACS',
    location: '535 5th Ave, 33rd Floor, New York, NY 10017',
    agentId: 'agent_shafer_clinic_manhattan',
    type: 'cosmetic',
    port: 3000,
    subdomain: 'shafer-clinic',
    
    // AI Chat Configuration
    chat: {
      assistantName: 'Robin',
      initialMessage: 'Welcome to Shafer Clinic! I\'m Robin, your aesthetic consultant. I can help you schedule a consultation with Dr. David Shafer, MD, FACS for plastic surgery, injectables, or our medical spa services. Our Manhattan penthouse clinic serves elite clientele worldwide. Which aesthetic treatment interests you today?',
      systemPrompt: 'You are Robin, the scheduling assistant at Shafer Clinic in Manhattan, NYC. Help patients book consultations for: Plastic Surgery, Cosmetic Surgery, BOTOX®, Juvéderm®, Facials, Chemical Peels, Laser Treatments, and Medical Spa services. Dr. David Shafer is a double board-certified plastic surgeon. The clinic is located at 535 5th Ave, 33rd Floor, penthouse level. Emphasize luxury, expertise, and personalized care for Manhattan elite clientele. Phone: (212) 888-7770.'
    },
    
    // Voice Configuration  
    voice: {
      firstMessage: 'Thank you for calling Shafer Clinic, Manhattan\'s premier aesthetic destination! This is Robin. Dr. David Shafer and our expert team specialize in plastic surgery and medical spa treatments. How may I assist you with your aesthetic goals today?'
    },
    
    // Premium Services
    services: [
      {
        name: 'Plastic Surgery Consultation',
        description: 'Comprehensive consultation with Dr. David Shafer, MD, FACS for surgical procedures',
        duration: '60 minutes'
      },
      {
        name: 'BOTOX® Treatment',
        description: 'FDA-approved neuromodulator for wrinkle reduction and facial rejuvenation',
        duration: '30 minutes'
      },
      {
        name: 'Juvéderm® Dermal Fillers',
        description: 'Premium hyaluronic acid fillers for volume restoration and contouring',
        duration: '45 minutes'
      },
      {
        name: 'Chemical Peels',
        description: 'Advanced facial peels for skin rejuvenation and texture improvement',
        duration: '45 minutes'
      },
      {
        name: 'Laser Skin Treatments',
        description: 'State-of-the-art laser therapies for skin resurfacing and anti-aging',
        duration: '60 minutes'
      },
      {
        name: 'Medical Spa Facial',
        description: 'Luxury facial treatments in our Manhattan penthouse setting',
        duration: '75 minutes'
      }
    ],
    
    // Manhattan Elite Branding
    branding: {
      primaryColor: '#1a365d',
      tagline: 'The Art of Aesthetic Innovation',
      focus: 'Manhattan\'s premier destination for plastic surgery, dermatology, and medical spa treatments in a luxurious penthouse setting'
    }
  }
};

// Default configuration - Shafer Clinic
export const practiceConfig = practiceConfigs['shafer-clinic'];