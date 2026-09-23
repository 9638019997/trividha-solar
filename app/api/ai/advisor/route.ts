import { NextResponse } from 'next/server';
import { calculateSolarEstimate, createSolarAdvisorRecommendation } from '@/lib/ai/gemini';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = {
      monthlyBill: Number(body.monthlyBill ?? 0),
      roofAreaSqm: Number(body.roofAreaSqm ?? 45),
      city: String(body.city ?? 'Gujarat'),
      propertyType: body.propertyType ?? 'residential',
    };

    const estimate = calculateSolarEstimate(payload);
    const recommendation = await createSolarAdvisorRecommendation(payload);

    return NextResponse.json({
      estimate,
      recommendation,
      policy: 'PM Surya Ghar subsidy guidance for Gujarat households',
    });
  } catch (error) {
    console.error('Solar advisor API error:', error);
    return NextResponse.json(
      {
        error: 'Unable to calculate solar advisory result.',
      },
      { status: 400 }
    );
  }
}
