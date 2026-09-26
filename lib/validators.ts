/**
 * Validation rules for forms, user entries, and document inputs
 */

export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const regex = /^(?:\+91)?[6-9]\d{9}$/;
  return regex.test(cleaned);
};

export const isValidPAN = (pan: string): boolean => {
  if (!pan) return false;
  const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return regex.test(pan.trim().toUpperCase());
};

export const isValidGST = (gst: string): boolean => {
  if (!gst) return false;
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return regex.test(gst.trim().toUpperCase());
};

export const isValidIFSC = (ifsc: string): boolean => {
  if (!ifsc) return false;
  const regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  return regex.test(ifsc.trim().toUpperCase());
};

export const isValidAadhaar = (aadhaar: string): boolean => {
  if (!aadhaar) return false;
  const cleaned = aadhaar.replace(/[\s\-]/g, '');
  const regex = /^\d{12}$/;
  return regex.test(cleaned);
};

export interface FileValidationOptions {
  maxSizeMB?: number;
  allowedTypes?: string[];
  allowedExtensions?: string[];
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateFile = (
  file: File | { name: string; size: number; type: string },
  options: FileValidationOptions = {}
): ValidationResult => {
  if (!file) {
    return { valid: false, error: 'File is required' };
  }

  const maxSize = (options.maxSizeMB || 10) * 1024 * 1024;
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File size exceeds maximum limit of ${options.maxSizeMB || 10}MB`,
    };
  }

  if (options.allowedTypes && options.allowedTypes.length > 0) {
    const isTypeAllowed = options.allowedTypes.some(
      (type) => file.type === type || file.type.startsWith(type.replace('*', ''))
    );
    if (!isTypeAllowed) {
      return {
        valid: false,
        error: `File type '${file.type}' is not allowed. Allowed types: ${options.allowedTypes.join(', ')}`,
      };
    }
  }

  if (options.allowedExtensions && options.allowedExtensions.length > 0) {
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !options.allowedExtensions.map((e) => e.toLowerCase()).includes(ext)) {
      return {
        valid: false,
        error: `File extension '.${ext}' is not allowed. Allowed extensions: ${options.allowedExtensions.join(', ')}`,
      };
    }
  }

  return { valid: true };
};

export const validators = {
  email: isValidEmail,
  phone: isValidPhone,
  pan: isValidPAN,
  gst: isValidGST,
  ifsc: isValidIFSC,
  aadhaar: isValidAadhaar,
  file: validateFile,
};

export default validators;
