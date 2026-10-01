#!/usr/bin/env bash
set -e

echo "=========================================="
echo "Trividha Solar - Module 12 Installer"
echo "AI + CRM + Security + Production"
echo "=========================================="

ROOT=$(pwd)

echo "Creating folders..."

mkdir -p app/dashboard/ai
mkdir -p app/dashboard/ai/advisor
mkdir -p app/dashboard/ai/leads
mkdir -p app/dashboard/ai/quotation
mkdir -p app/dashboard/ai/reports
mkdir -p app/dashboard/ai/settings

mkdir -p app/dashboard/crm
mkdir -p app/dashboard/crm/leads
mkdir -p app/dashboard/crm/customers
mkdir -p app/dashboard/crm/opportunities
mkdir -p app/dashboard/crm/tasks
mkdir -p app/dashboard/crm/followups
mkdir -p app/dashboard/crm/activity
mkdir -p app/dashboard/crm/reports

mkdir -p app/dashboard/security
mkdir -p app/dashboard/security/users
mkdir -p app/dashboard/security/roles
mkdir -p app/dashboard/security/permissions
mkdir -p app/dashboard/security/audit
mkdir -p app/dashboard/security/sessions
mkdir -p app/dashboard/security/settings

mkdir -p app/dashboard/system
mkdir -p app/dashboard/system/company
mkdir -p app/dashboard/system/branches
mkdir -p app/dashboard/system/settings
mkdir -p app/dashboard/system/branding
mkdir -p app/dashboard/system/backup
mkdir -p app/dashboard/system/monitoring
mkdir -p app/dashboard/system/logs

mkdir -p app/dashboard/production
mkdir -p app/dashboard/production/seo
mkdir -p app/dashboard/production/performance
mkdir -p app/dashboard/production/deployment
mkdir -p app/dashboard/production/health
mkdir -p app/dashboard/production/checklist

mkdir -p components/ai
mkdir -p components/crm
mkdir -p components/security
mkdir -p components/system
mkdir -p components/production

mkdir -p lib/types
mkdir -p lib/mock

echo "Folders created."

echo "Generating TypeScript models..."
