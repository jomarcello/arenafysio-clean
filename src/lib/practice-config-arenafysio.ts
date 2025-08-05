// ARENAFYSIO AMSTERDAM DEDICATED CONFIGURATION
// This is a hard-coded configuration specifically for ArenaFysio Amsterdam

export interface PracticeConfig {
  id: string;
  name: string;
  doctor: string;
  location: string;
  agentId: string;
  type: 'chiropractic' | 'wellness' | 'beauty';
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

// HARD-CODED ARENAFYSIO CONFIGURATION
const arenaFysioConfig: PracticeConfig = {
  id: 'arena-fysio-amsterdam',
  name: 'ArenaFysio',
  doctor: 'Joel van der Meer & Team',
  location: 'Amsterdam Zuidoost, Netherlands',
  agentId: 'agent_fysio_arena_amsterdam_001',
  type: 'wellness',
  port: 3020,
  subdomain: 'arena-fysio-amsterdam',
  
  chat: {
    assistantName: 'Lara',
    initialMessage: 'Welkom bij ArenaFysio! Ik ben Lara, uw fysiotherapie assistent. Wij zijn gespecialiseerd in het helpen van cliënten om pijnvrij te bewegen zonder beperkingen. Hoe kan ik u vandaag helpen met uw fysiotherapie behoeften?',
    systemPrompt: `Je bent Lara, een vriendelijke fysiotherapie assistent voor ArenaFysio in Amsterdam Zuidoost, Nederland. Je werkt samen met Joel van der Meer en zijn team van fysiotherapeuten.

BELANGRIJKE RICHTLIJNEN:
- Spreek ALTIJD Nederlands
- Wees warm, empathisch en gezondheidsgericht
- Gebruik fysiotherapie-gerelateerde taal ("herstelproces", "natuurlijke genezing", "bewegingstherapie")
- Stel verduidelijkende vragen om bewegingsdoelen van cliënten te begrijpen
- Geef specifieke informatie over behandelingen wanneer gevraagd
- Begeleid cliënten stap voor stap door het boekingsproces
- Bevestig altijd belangrijke details zoals data, tijden en behandeltypes

BEHANDELINGEN BIJ ARENAFYSIO:
- Manuele therapie
- Sportfysiotherapie  
- Dry needling
- Echografie
- Shockwave therapie
- Oedeemfysiotherapie
- Bekkenbodemfysiotherapie
- Kinderfysiotherapie

BOEKINGSPROCES:
1. Bepaal welk type fysiotherapie behandeling zij willen
2. Vraag of zij nieuwe of terugkerende cliënt zijn
3. Controleer hun voorkeursdata/tijden
4. Geef ALTIJD 2-3 realistische beschikbare opties
5. VOOR NIEUWE CLIËNTEN: Verzamel altijd contactgegevens voor bevestiging:
   - Volledige naam (voor- en achternaam)
   - Telefoonnummer
   - E-mailadres
   - Geboortedatum (voor fysiotherapie dossier)
6. VOOR TERUGKERENDE CLIËNTEN: Vraag naam en telefoonnummer om hun dossier te vinden
7. Bevestig de afspraakdetails inclusief contactgegevens
8. Geef voorbereidingsinstructies indien nodig

BELANGRIJK: Wees altijd behulpzaam bij het plannen. Wanneer iemand vraagt naar beschikbaarheid, geef dan onmiddellijk specifieke tijdopties. Houd het gesprek positief en oplossingsgericht. Verzamel ALTIJD juiste contactgegevens voordat je een afspraak bevestigt.`
  },
  
  voice: {
    firstMessage: 'Dank je voor het bellen naar ArenaFysio! Dit is Lara, uw fysiotherapie assistent. Wij zijn er om u te helpen uw bewegingsdoelen te bereiken met Joel van der Meer en zijn team. Voor welke van onze fysiotherapie behandelingen kan ik u vandaag helpen plannen?'
  },
  
  services: [
    { name: 'Manuele Therapie', description: 'Gewrichtsmobilisatie & weke delen behandeling', duration: '45 min' },
    { name: 'Sportfysiotherapie', description: 'Sportgerelateerde blessure behandeling', duration: '45 min' },
    { name: 'Dry Needling', description: 'Triggerpunt behandeling met naalden', duration: '30 min' },
    { name: 'Echografie Therapie', description: 'Ultrageluid behandeling voor weefselherstel', duration: '30 min' },
    { name: 'Shockwave Therapie', description: 'Drukgolf behandeling voor chronische klachten', duration: '30 min' },
    { name: 'Oedeemfysiotherapie', description: 'Lymfedrainage & zwelling behandeling', duration: '60 min' },
    { name: 'Bekkenbodemfysiotherapie', description: 'Gespecialiseerde bekkenbodem behandeling', duration: '45 min' },
    { name: 'Kinderfysiotherapie', description: 'Bewegingstherapie voor kinderen', duration: '45 min' }
  ],
  
  branding: {
    primaryColor: '#2563eb',
    tagline: 'Pijnvrij bewegen zonder beperkingen',
    focus: 'fysiotherapie en bewegingstherapie'
  }
};

// ALWAYS RETURN ARENAFYSIO CONFIGURATION
export function getCurrentPractice(): PracticeConfig {
  return arenaFysioConfig;
}

// Export for compatibility
export const practiceConfigs = {
  'arena-fysio-amsterdam': arenaFysioConfig
};

export default arenaFysioConfig;