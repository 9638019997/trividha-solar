export type ProductCategory = 'panels' | 'inverters' | 'batteries' | 'structures' | 'bos' | 'accessories';

export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  brand: string;
  specifications: string;
  unit: string;
  unitCost: number;
  totalStock: number;
  reorderLevel: number;
  allocatedStock: number;
}

export interface Warehouse {
  id: string;
  code: string;
  name: string;
  location: string;
  supervisor: string;
  contact: string;
  totalCapacitySqFt: number;
  utilizationPercent: number;
}

export interface Vendor {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  categoriesSupplied: ProductCategory[];
  rating: number;
  activeOrders: number;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  vendorName: string;
  orderDate: string;
  expectedDate: string;
  totalAmount: number;
  status: 'draft' | 'ordered' | 'received' | 'partially_received' | 'cancelled';
  itemsCount: number;
}

export interface StockOperation {
  id: string;
  referenceNo: string;
  type: 'Stock In (GRN)' | 'Stock Out (Issue)' | 'Inter-Warehouse Transfer' | 'Audit Adjustment';
  warehouseName: string;
  productName: string;
  quantity: number;
  date: string;
  handledBy: string;
  status: 'completed' | 'in_transit' | 'pending';
}
