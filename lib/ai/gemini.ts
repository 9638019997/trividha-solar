import { GoogleGenAI } from '@google/genai';

export type PropertyType = 'residential' | 'commercial' | 'industrial';

export interface SolarAdvisorInput {
  monthlyBill: number;
  roofAreaSqm?: number;
  city?: string;
  propertyType?: PropertyType;
  monthlyConsumptionKwh?: number;
}

export interface SolarAdvisorOutput {
  systemSizeKw: number;
  annualGenerationKwh: number;
  annualSavingsInr: number;
  estimatedCostInr: number;
  subsidyInr: number;
  paybackYears: number;
  recommendedRoofAreaSqm: number;
  summary: string;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function calculateGujaratSuryaGharSubsidy(systemSizeKw: number, propertyType: PropertyType = 'residential') {
  if (propertyType !== 'residential') {
    return 0;
  }

  if (systemSizeKw <= 2) return 60000;
  if (systemSizeKw <= 3) return 78000;
  return 78000;
}

export function calculateSolarEstimate(input: SolarAdvisorInput): SolarAdvisorOutput {
  const monthlyBill = Math.max(input.monthlyBill || 0, 0);
  const roofAreaSqm = Math.max(input.roofAreaSqm || 45, 20);
  const propertyType = input.propertyType || 'residential';
  const estimatedSizeKw = clamp((monthlyBill / 1800) * 1.7 + (roofAreaSqm > 70 ? 0.35 : 0.15), 1.5, 10);
  const systemSizeKw = Number(estimatedSizeKw.toFixed(1));
  const annualGenerationKwh = Number((systemSizeKw * 1600).toFixed(0));
  const annualSavingsInr = Number((annualGenerationKwh * 6.2).toFixed(0));
  const estimatedCostInr = Number((systemSizeKw * 52000).toFixed(0));
  const subsidyInr = calculateGujaratSuryaGharSubsidy(systemSizeKw, propertyType);
  const netCost = Math.max(estimatedCostInr - subsidyInr, 0);
  const paybackYears = netCost > 0 ? Number((netCost / Math.max(annualSavingsInr, 1)).toFixed(2)) : 0.5;
  const recommendedRoofAreaSqm = Number((systemSizeKw * 8.5).toFixed(1));

  const summary = `For ${input.city || 'Gujarat'} with a monthly bill of ₹${monthlyBill.toLocaleString('en-IN')}, a ${systemSizeKw.toFixed(1)} kW rooftop system is a practical fit. The expected annual generation is ${annualGenerationKwh.toLocaleString('en-IN')} kWh, with a government subsidy of ₹${subsidyInr.toLocaleString('en-IN')} under the PM Surya Ghar framework.`;

  return {
    systemSizeKw,
    annualGenerationKwh,
    annualSavingsInr,
    estimatedCostInr,
    subsidyInr,
    paybackYears,
    recommendedRoofAreaSqm,
    summary,
  };
}

export async function createSolarAdvisorRecommendation(input: SolarAdvisorInput): Promise<string> {
  const estimate = calculateSolarEstimate(input);

  if (!process.env.GEMINI_API_KEY) {
    return estimate.summary;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `Act as a senior solar consultant for Gujarat. Provide a concise, customer-friendly recommendation for a property with monthly electricity bill ₹${input.monthlyBill}, roof area ${input.roofAreaSqm ?? 45} sq m, location ${input.city ?? 'Gujarat'}, and property type ${input.propertyType ?? 'residential'}. Recommend a system size and reference the PM Surya Ghar subsidy. Keep it to 3 short sentences.`;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = (response as { text?: string })?.text ?? estimate.summary;
    return text.trim() || estimate.summary;
  } catch (error) {
    console.error('Gemini advisor error:', error);
    return estimate.summary;
  }
}
