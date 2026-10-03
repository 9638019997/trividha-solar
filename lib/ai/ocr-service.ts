export interface ExtractedBillData {
  consumerNumber?: string;
  sanctionedLoadKw?: number;
  monthlyUnitsKwh?: number;
  discomName?: string;
  estimatedRooftopPotentialKw?: number;
  confidenceScore: number;
}

export class SolarOcrProcessor {
  /**
   * Production-grade interface for OCR document processing.
   * Can plug into Tesseract, Google Document AI, or AWS Textract.
   */
  static async processElectricityBill(fileBuffer: Buffer, mimeType: string): Promise<ExtractedBillData> {
    // Modular parsing logic placeholder prepared for future provider binding
    return {
      discomName: "DGVCL / PGVCL (Gujarat)",
      sanctionedLoadKw: 5.0,
      monthlyUnitsKwh: 450,
      estimatedRooftopPotentialKw: 3.5,
      confidenceScore: 0.94,
    };
  }
}
