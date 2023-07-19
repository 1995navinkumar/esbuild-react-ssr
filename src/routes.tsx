
import React, { lazy } from 'react';
import DocsWrapper from './components/docs-wrapper';

export default [
    {
                path : 'x',
                element : <DocsWrapper name="x" />
            }, {
                path : 'x/xpayroll',
                element : <DocsWrapper name="x/xpayroll" />
            }, {
                path : 'x/xpayroll/plans',
                element : <DocsWrapper name="x/xpayroll/plans" />
            }, {
                path : 'x/xpayroll/integrate',
                element : <DocsWrapper name="x/xpayroll/integrate" />
            }, {
                path : 'x/xpayroll/integrate/whatsapp',
                element : <DocsWrapper name="x/xpayroll/integrate/whatsapp" />
            }, {
                path : 'x/xpayroll/integrate/slack',
                element : <DocsWrapper name="x/xpayroll/integrate/slack" />
            }, {
                path : 'x/xpayroll/integrate/quickbooks',
                element : <DocsWrapper name="x/xpayroll/integrate/quickbooks" />
            }, {
                path : 'x/xpayroll/integrate/insurance',
                element : <DocsWrapper name="x/xpayroll/integrate/insurance" />
            }, {
                path : 'x/xpayroll/integrate/current-account',
                element : <DocsWrapper name="x/xpayroll/integrate/current-account" />
            }, {
                path : 'x/xpayroll/employers/setup/tds',
                element : <DocsWrapper name="x/xpayroll/employers/setup/tds" />
            }, {
                path : 'x/xpayroll/employers/setup/tds/verify',
                element : <DocsWrapper name="x/xpayroll/employers/setup/tds/verify" />
            }, {
                path : 'x/xpayroll/employers/setup/statutory-compliance',
                element : <DocsWrapper name="x/xpayroll/employers/setup/statutory-compliance" />
            }, {
                path : 'x/xpayroll/employers/setup/pt',
                element : <DocsWrapper name="x/xpayroll/employers/setup/pt" />
            }, {
                path : 'x/xpayroll/employers/setup/provident-fund',
                element : <DocsWrapper name="x/xpayroll/employers/setup/provident-fund" />
            }, {
                path : 'x/xpayroll/employers/setup/provident-fund/register',
                element : <DocsWrapper name="x/xpayroll/employers/setup/provident-fund/register" />
            }, {
                path : 'x/xpayroll/employers/setup/execute-payroll',
                element : <DocsWrapper name="x/xpayroll/employers/setup/execute-payroll" />
            }, {
                path : 'x/xpayroll/employers/setup/account',
                element : <DocsWrapper name="x/xpayroll/employers/setup/account" />
            }, {
                path : 'x/xpayroll/employers/salary',
                element : <DocsWrapper name="x/xpayroll/employers/salary" />
            }, {
                path : 'x/xpayroll/employers/salary/run-payroll',
                element : <DocsWrapper name="x/xpayroll/employers/salary/run-payroll" />
            }, {
                path : 'x/xpayroll/employers/salary/reimbursements',
                element : <DocsWrapper name="x/xpayroll/employers/salary/reimbursements" />
            }, {
                path : 'x/xpayroll/employers/salary/one-time-payments',
                element : <DocsWrapper name="x/xpayroll/employers/salary/one-time-payments" />
            }, {
                path : 'x/xpayroll/employers/salary/exceptional-cases',
                element : <DocsWrapper name="x/xpayroll/employers/salary/exceptional-cases" />
            }, {
                path : 'x/xpayroll/employers/payroll-payouts',
                element : <DocsWrapper name="x/xpayroll/employers/payroll-payouts" />
            }, {
                path : 'x/xpayroll/employers/human-resources',
                element : <DocsWrapper name="x/xpayroll/employers/human-resources" />
            }, {
                path : 'x/xpayroll/employers/human-resources/time-management',
                element : <DocsWrapper name="x/xpayroll/employers/human-resources/time-management" />
            }, {
                path : 'x/xpayroll/employers/human-resources/leaves',
                element : <DocsWrapper name="x/xpayroll/employers/human-resources/leaves" />
            }, {
                path : 'x/xpayroll/employers/human-resources/documents-letters',
                element : <DocsWrapper name="x/xpayroll/employers/human-resources/documents-letters" />
            }, {
                path : 'x/xpayroll/employers/human-resources/attendance',
                element : <DocsWrapper name="x/xpayroll/employers/human-resources/attendance" />
            }, {
                path : 'x/xpayroll/employees',
                element : <DocsWrapper name="x/xpayroll/employees" />
            }, {
                path : 'x/xpayroll/employees/resignation',
                element : <DocsWrapper name="x/xpayroll/employees/resignation" />
            }, {
                path : 'x/xpayroll/employees/reimbursements',
                element : <DocsWrapper name="x/xpayroll/employees/reimbursements" />
            }, {
                path : 'x/xpayroll/employees/leaves',
                element : <DocsWrapper name="x/xpayroll/employees/leaves" />
            }, {
                path : 'x/xpayroll/employees/declarations',
                element : <DocsWrapper name="x/xpayroll/employees/declarations" />
            }, {
                path : 'x/webhooks',
                element : <DocsWrapper name="x/webhooks" />
            }, {
                path : 'x/webhooks/subscribe',
                element : <DocsWrapper name="x/webhooks/subscribe" />
            }, {
                path : 'x/vendor-payments',
                element : <DocsWrapper name="x/vendor-payments" />
            }, {
                path : 'x/vendor-payments/zohobooks',
                element : <DocsWrapper name="x/vendor-payments/zohobooks" />
            }, {
                path : 'x/vendor-payments/zohobooks/sync-zohobooks',
                element : <DocsWrapper name="x/vendor-payments/zohobooks/sync-zohobooks" />
            }, {
                path : 'x/vendor-payments/zohobooks/integrate',
                element : <DocsWrapper name="x/vendor-payments/zohobooks/integrate" />
            }, {
                path : 'x/vendor-payments/tally',
                element : <DocsWrapper name="x/vendor-payments/tally" />
            }, {
                path : 'x/vendor-payments/tally/sync-purchase-vouchers',
                element : <DocsWrapper name="x/vendor-payments/tally/sync-purchase-vouchers" />
            }, {
                path : 'x/vendor-payments/tally/sync-payment-vouchers',
                element : <DocsWrapper name="x/vendor-payments/tally/sync-payment-vouchers" />
            }, {
                path : 'x/vendor-payments/tally/set-up',
                element : <DocsWrapper name="x/vendor-payments/tally/set-up" />
            }, {
                path : 'x/vendor-payments/tally/bring-bills',
                element : <DocsWrapper name="x/vendor-payments/tally/bring-bills" />
            }, {
                path : 'x/vendor-payments/tally/bank-statement-sync',
                element : <DocsWrapper name="x/vendor-payments/tally/bank-statement-sync" />
            }, {
                path : 'x/vendor-payments/scheduled-payouts',
                element : <DocsWrapper name="x/vendor-payments/scheduled-payouts" />
            }, {
                path : 'x/vendor-payments/quickbooks-integration',
                element : <DocsWrapper name="x/vendor-payments/quickbooks-integration" />
            }, {
                path : 'x/vendor-payments/portal',
                element : <DocsWrapper name="x/vendor-payments/portal" />
            }, {
                path : 'x/vendor-payments/portal/business',
                element : <DocsWrapper name="x/vendor-payments/portal/business" />
            }, {
                path : 'x/vendor-payments/partial-payouts',
                element : <DocsWrapper name="x/vendor-payments/partial-payouts" />
            }, {
                path : 'x/vendor-payments/life-cycle',
                element : <DocsWrapper name="x/vendor-payments/life-cycle" />
            }, {
                path : 'x/vendor-payments/invoices',
                element : <DocsWrapper name="x/vendor-payments/invoices" />
            }, {
                path : 'x/vendor-payments/invoice-report',
                element : <DocsWrapper name="x/vendor-payments/invoice-report" />
            }, {
                path : 'x/vendor-payments/integrations',
                element : <DocsWrapper name="x/vendor-payments/integrations" />
            }, {
                path : 'x/vendor-payments/faqs',
                element : <DocsWrapper name="x/vendor-payments/faqs" />
            }, {
                path : 'x/vendor-payments/bulk-invoices',
                element : <DocsWrapper name="x/vendor-payments/bulk-invoices" />
            }, {
                path : 'x/vendor-payments/bulk',
                element : <DocsWrapper name="x/vendor-payments/bulk" />
            }, {
                path : 'x/vendor-payments/approve-invoices',
                element : <DocsWrapper name="x/vendor-payments/approve-invoices" />
            }, {
                path : 'x/vendor-payments/approvals-on-invoices',
                element : <DocsWrapper name="x/vendor-payments/approvals-on-invoices" />
            }, {
                path : 'x/tax-payments',
                element : <DocsWrapper name="x/tax-payments" />
            }, {
                path : 'x/tax-payments/manual-tds',
                element : <DocsWrapper name="x/tax-payments/manual-tds" />
            }, {
                path : 'x/tax-payments/life-cycle',
                element : <DocsWrapper name="x/tax-payments/life-cycle" />
            }, {
                path : 'x/tax-payments/gst',
                element : <DocsWrapper name="x/tax-payments/gst" />
            }, {
                path : 'x/tax-payments/automatic-tds',
                element : <DocsWrapper name="x/tax-payments/automatic-tds" />
            }, {
                path : 'x/tax-payments/advance',
                element : <DocsWrapper name="x/tax-payments/advance" />
            }, {
                path : 'x/tally-epayments',
                element : <DocsWrapper name="x/tally-epayments" />
            }, {
                path : 'x/tally-epayments/set-up',
                element : <DocsWrapper name="x/tally-epayments/set-up" />
            }, {
                path : 'x/tally-epayments/reconcile-payouts',
                element : <DocsWrapper name="x/tally-epayments/reconcile-payouts" />
            }, {
                path : 'x/tally-epayments/export-approve-payouts',
                element : <DocsWrapper name="x/tally-epayments/export-approve-payouts" />
            }, {
                path : 'x/support',
                element : <DocsWrapper name="x/support" />
            }, {
                path : 'x/sign-up',
                element : <DocsWrapper name="x/sign-up" />
            }, {
                path : 'x/reports',
                element : <DocsWrapper name="x/reports" />
            }, {
                path : 'x/rbl-current-account/trust-society',
                element : <DocsWrapper name="x/rbl-current-account/trust-society" />
            }, {
                path : 'x/rbl-current-account/sole-proprietorship',
                element : <DocsWrapper name="x/rbl-current-account/sole-proprietorship" />
            }, {
                path : 'x/rbl-current-account/sole-proprietorship/kyc',
                element : <DocsWrapper name="x/rbl-current-account/sole-proprietorship/kyc" />
            }, {
                path : 'x/rbl-current-account/partnership',
                element : <DocsWrapper name="x/rbl-current-account/partnership" />
            }, {
                path : 'x/rbl-current-account/partnership/kyc',
                element : <DocsWrapper name="x/rbl-current-account/partnership/kyc" />
            }, {
                path : 'x/rbl-current-account/llp',
                element : <DocsWrapper name="x/rbl-current-account/llp" />
            }, {
                path : 'x/rbl-current-account/llp/kyc',
                element : <DocsWrapper name="x/rbl-current-account/llp/kyc" />
            }, {
                path : 'x/rbl-current-account/company',
                element : <DocsWrapper name="x/rbl-current-account/company" />
            }, {
                path : 'x/rbl-current-account/company/kyc',
                element : <DocsWrapper name="x/rbl-current-account/company/kyc" />
            }, {
                path : 'x/rbl-current-account/cif',
                element : <DocsWrapper name="x/rbl-current-account/cif" />
            }, {
                path : 'x/quickbooks/delete',
                element : <DocsWrapper name="x/quickbooks/delete" />
            }, {
                path : 'x/payouts',
                element : <DocsWrapper name="x/payouts" />
            }, {
                path : 'x/payouts/sub-accounts',
                element : <DocsWrapper name="x/payouts/sub-accounts" />
            }, {
                path : 'x/payouts/states-life-cycle',
                element : <DocsWrapper name="x/payouts/states-life-cycle" />
            }, {
                path : 'x/payouts/scheduled',
                element : <DocsWrapper name="x/payouts/scheduled" />
            }, {
                path : 'x/payouts/reports',
                element : <DocsWrapper name="x/payouts/reports" />
            }, {
                path : 'x/payouts/queued',
                element : <DocsWrapper name="x/payouts/queued" />
            }, {
                path : 'x/payouts/intelligent-payouts',
                element : <DocsWrapper name="x/payouts/intelligent-payouts" />
            }, {
                path : 'x/payouts/faqs',
                element : <DocsWrapper name="x/payouts/faqs" />
            }, {
                path : 'x/payouts/cards',
                element : <DocsWrapper name="x/payouts/cards" />
            }, {
                path : 'x/payouts/best-practices',
                element : <DocsWrapper name="x/payouts/best-practices" />
            }, {
                path : 'x/payouts/api',
                element : <DocsWrapper name="x/payouts/api" />
            }, {
                path : 'x/payout-wallet/amazon',
                element : <DocsWrapper name="x/payout-wallet/amazon" />
            }, {
                path : 'x/payout-wallet/amazon/branding-guidelines',
                element : <DocsWrapper name="x/payout-wallet/amazon/branding-guidelines" />
            }, {
                path : 'x/payout-wallet/amazon/api',
                element : <DocsWrapper name="x/payout-wallet/amazon/api" />
            }, {
                path : 'x/payout-links',
                element : <DocsWrapper name="x/payout-links" />
            }, {
                path : 'x/payout-links/shopify',
                element : <DocsWrapper name="x/payout-links/shopify" />
            }, {
                path : 'x/payout-links/set-expiry',
                element : <DocsWrapper name="x/payout-links/set-expiry" />
            }, {
                path : 'x/payout-links/reports',
                element : <DocsWrapper name="x/payout-links/reports" />
            }, {
                path : 'x/payout-links/report-and-errors',
                element : <DocsWrapper name="x/payout-links/report-and-errors" />
            }, {
                path : 'x/payout-links/life-cycle',
                element : <DocsWrapper name="x/payout-links/life-cycle" />
            }, {
                path : 'x/payout-links/faqs',
                element : <DocsWrapper name="x/payout-links/faqs" />
            }, {
                path : 'x/payout-links/create',
                element : <DocsWrapper name="x/payout-links/create" />
            }, {
                path : 'x/payout-links/bulk',
                element : <DocsWrapper name="x/payout-links/bulk" />
            }, {
                path : 'x/payout-links/api',
                element : <DocsWrapper name="x/payout-links/api" />
            }, {
                path : 'x/notifications',
                element : <DocsWrapper name="x/notifications" />
            }, {
                path : 'x/manage-teams',
                element : <DocsWrapper name="x/manage-teams" />
            }, {
                path : 'x/manage-teams/faqs',
                element : <DocsWrapper name="x/manage-teams/faqs" />
            }, {
                path : 'x/manage-teams/credits-free-payouts',
                element : <DocsWrapper name="x/manage-teams/credits-free-payouts" />
            }, {
                path : 'x/manage-teams/create-user-role',
                element : <DocsWrapper name="x/manage-teams/create-user-role" />
            }, {
                path : 'x/manage-teams/ca-portal',
                element : <DocsWrapper name="x/manage-teams/ca-portal" />
            }, {
                path : 'x/manage-teams/billing',
                element : <DocsWrapper name="x/manage-teams/billing" />
            }, {
                path : 'x/manage-teams/approval-workflow-changes',
                element : <DocsWrapper name="x/manage-teams/approval-workflow-changes" />
            }, {
                path : 'x/manage-teams/approval-workflow',
                element : <DocsWrapper name="x/manage-teams/approval-workflow" />
            }, {
                path : 'x/manage-teams/2fa',
                element : <DocsWrapper name="x/manage-teams/2fa" />
            }, {
                path : 'x/icici-current-account/sole-proprietorship',
                element : <DocsWrapper name="x/icici-current-account/sole-proprietorship" />
            }, {
                path : 'x/icici-current-account/partnership',
                element : <DocsWrapper name="x/icici-current-account/partnership" />
            }, {
                path : 'x/icici-current-account/llp',
                element : <DocsWrapper name="x/icici-current-account/llp" />
            }, {
                path : 'x/icici-current-account/entity-address-proof',
                element : <DocsWrapper name="x/icici-current-account/entity-address-proof" />
            }, {
                path : 'x/icici-current-account/company',
                element : <DocsWrapper name="x/icici-current-account/company" />
            }, {
                path : 'x/glossary',
                element : <DocsWrapper name="x/glossary" />
            }, {
                path : 'x/fund-accounts',
                element : <DocsWrapper name="x/fund-accounts" />
            }, {
                path : 'x/fund-accounts/faqs',
                element : <DocsWrapper name="x/fund-accounts/faqs" />
            }, {
                path : 'x/fund-accounts/api',
                element : <DocsWrapper name="x/fund-accounts/api" />
            }, {
                path : 'x/fund-account-validation',
                element : <DocsWrapper name="x/fund-account-validation" />
            }, {
                path : 'x/dashboard',
                element : <DocsWrapper name="x/dashboard" />
            }, {
                path : 'x/dashboard/test-mode',
                element : <DocsWrapper name="x/dashboard/test-mode" />
            }, {
                path : 'x/dashboard/keyboard-shortcuts',
                element : <DocsWrapper name="x/dashboard/keyboard-shortcuts" />
            }, {
                path : 'x/dashboard/global-search',
                element : <DocsWrapper name="x/dashboard/global-search" />
            }, {
                path : 'x/dashboard/faqs',
                element : <DocsWrapper name="x/dashboard/faqs" />
            }, {
                path : 'x/dashboard/api-keys',
                element : <DocsWrapper name="x/dashboard/api-keys" />
            }, {
                path : 'x/dashboard/allowlist-ip',
                element : <DocsWrapper name="x/dashboard/allowlist-ip" />
            }, {
                path : 'x/contacts',
                element : <DocsWrapper name="x/contacts" />
            }, {
                path : 'x/contacts/faqs',
                element : <DocsWrapper name="x/contacts/faqs" />
            }, {
                path : 'x/contacts/bulk-uploads',
                element : <DocsWrapper name="x/contacts/bulk-uploads" />
            }, {
                path : 'x/contacts/api',
                element : <DocsWrapper name="x/contacts/api" />
            }, {
                path : 'x/capital',
                element : <DocsWrapper name="x/capital" />
            }, {
                path : 'x/capital/working-capital-loans',
                element : <DocsWrapper name="x/capital/working-capital-loans" />
            }, {
                path : 'x/capital/use-cases',
                element : <DocsWrapper name="x/capital/use-cases" />
            }, {
                path : 'x/capital/line-of-credit',
                element : <DocsWrapper name="x/capital/line-of-credit" />
            }, {
                path : 'x/capital/line-of-credit/dashboard',
                element : <DocsWrapper name="x/capital/line-of-credit/dashboard" />
            }, {
                path : 'x/capital/faqs',
                element : <DocsWrapper name="x/capital/faqs" />
            }, {
                path : 'x/capital/corporate-cards',
                element : <DocsWrapper name="x/capital/corporate-cards" />
            }, {
                path : 'x/capital/cash-advance',
                element : <DocsWrapper name="x/capital/cash-advance" />
            }, {
                path : 'x/capital/cards-kyc',
                element : <DocsWrapper name="x/capital/cards-kyc" />
            }, {
                path : 'x/bulk-payouts',
                element : <DocsWrapper name="x/bulk-payouts" />
            }, {
                path : 'x/bulk-payouts/uploads',
                element : <DocsWrapper name="x/bulk-payouts/uploads" />
            }, {
                path : 'x/bulk-payouts/report',
                element : <DocsWrapper name="x/bulk-payouts/report" />
            }, {
                path : 'x/bulk-payouts/life-cycle',
                element : <DocsWrapper name="x/bulk-payouts/life-cycle" />
            }, {
                path : 'x/billing',
                element : <DocsWrapper name="x/billing" />
            }, {
                path : 'x/apis',
                element : <DocsWrapper name="x/apis" />
            }, {
                path : 'x/account-types',
                element : <DocsWrapper name="x/account-types" />
            }, {
                path : 'x/account-types/source-account-validation',
                element : <DocsWrapper name="x/account-types/source-account-validation" />
            }, {
                path : 'x/account-types/razorpayx-lite',
                element : <DocsWrapper name="x/account-types/razorpayx-lite" />
            }, {
                path : 'x/account-types/faqs',
                element : <DocsWrapper name="x/account-types/faqs" />
            }, {
                path : 'x/account-types/current-account',
                element : <DocsWrapper name="x/account-types/current-account" />
            }, {
                path : 'x/account-statement',
                element : <DocsWrapper name="x/account-statement" />
            }, {
                path : 'x/account-statement/report',
                element : <DocsWrapper name="x/account-statement/report" />
            }, {
                path : 'x/account-statement/integrate',
                element : <DocsWrapper name="x/account-statement/integrate" />
            }, {
                path : 'x/account-statement/integrate/zohobooks',
                element : <DocsWrapper name="x/account-statement/integrate/zohobooks" />
            }, {
                path : 'x/account-statement/integrate/tally',
                element : <DocsWrapper name="x/account-statement/integrate/tally" />
            }, {
                path : 'x/account-statement/integrate/quickbooks',
                element : <DocsWrapper name="x/account-statement/integrate/quickbooks" />
            }, {
                path : 'x/account-statement/api',
                element : <DocsWrapper name="x/account-statement/api" />
            }, {
                path : 'webhooks',
                element : <DocsWrapper name="webhooks" />
            }, {
                path : 'webhooks/validate-test',
                element : <DocsWrapper name="webhooks/validate-test" />
            }, {
                path : 'webhooks/setup-edit-x',
                element : <DocsWrapper name="webhooks/setup-edit-x" />
            }, {
                path : 'webhooks/setup-edit-payments',
                element : <DocsWrapper name="webhooks/setup-edit-payments" />
            }, {
                path : 'webhooks/payloads/x',
                element : <DocsWrapper name="webhooks/payloads/x" />
            }, {
                path : 'webhooks/payloads/subscriptions',
                element : <DocsWrapper name="webhooks/payloads/subscriptions" />
            }, {
                path : 'webhooks/payloads/smart-collect',
                element : <DocsWrapper name="webhooks/payloads/smart-collect" />
            }, {
                path : 'webhooks/payloads/route',
                element : <DocsWrapper name="webhooks/payloads/route" />
            }, {
                path : 'webhooks/payloads/refunds',
                element : <DocsWrapper name="webhooks/payloads/refunds" />
            }, {
                path : 'webhooks/payloads/payments',
                element : <DocsWrapper name="webhooks/payloads/payments" />
            }, {
                path : 'webhooks/payloads/payment-links',
                element : <DocsWrapper name="webhooks/payloads/payment-links" />
            }, {
                path : 'webhooks/payloads/partners',
                element : <DocsWrapper name="webhooks/payloads/partners" />
            }, {
                path : 'webhooks/payloads/partners/under-review',
                element : <DocsWrapper name="webhooks/payloads/partners/under-review" />
            }, {
                path : 'webhooks/payloads/partners/suspended',
                element : <DocsWrapper name="webhooks/payloads/partners/suspended" />
            }, {
                path : 'webhooks/payloads/partners/rejected',
                element : <DocsWrapper name="webhooks/payloads/partners/rejected" />
            }, {
                path : 'webhooks/payloads/partners/payment-enabled',
                element : <DocsWrapper name="webhooks/payloads/partners/payment-enabled" />
            }, {
                path : 'webhooks/payloads/partners/oauth',
                element : <DocsWrapper name="webhooks/payloads/partners/oauth" />
            }, {
                path : 'webhooks/payloads/partners/needs-clarification',
                element : <DocsWrapper name="webhooks/payloads/partners/needs-clarification" />
            }, {
                path : 'webhooks/payloads/partners/instantly-activated',
                element : <DocsWrapper name="webhooks/payloads/partners/instantly-activated" />
            }, {
                path : 'webhooks/payloads/partners/funds-unhold',
                element : <DocsWrapper name="webhooks/payloads/partners/funds-unhold" />
            }, {
                path : 'webhooks/payloads/partners/funds-onhold',
                element : <DocsWrapper name="webhooks/payloads/partners/funds-onhold" />
            }, {
                path : 'webhooks/payloads/partners/activated-kyc-pending',
                element : <DocsWrapper name="webhooks/payloads/partners/activated-kyc-pending" />
            }, {
                path : 'webhooks/payloads/partners/activated',
                element : <DocsWrapper name="webhooks/payloads/partners/activated" />
            }, {
                path : 'webhooks/payloads/orders',
                element : <DocsWrapper name="webhooks/payloads/orders" />
            }, {
                path : 'webhooks/payloads/invoices',
                element : <DocsWrapper name="webhooks/payloads/invoices" />
            }, {
                path : 'webhooks/payloads/disputes',
                element : <DocsWrapper name="webhooks/payloads/disputes" />
            }, {
                path : 'webhooks/faqs',
                element : <DocsWrapper name="webhooks/faqs" />
            }, {
                path : 'webhooks/best-practices',
                element : <DocsWrapper name="webhooks/best-practices" />
            }, {
                path : 'test',
                element : <DocsWrapper name="test" />
            }, {
                path : 'test/payments',
                element : <DocsWrapper name="test/payments" />
            }, {
                path : 'security',
                element : <DocsWrapper name="security" />
            }, {
                path : 'security/whitelists',
                element : <DocsWrapper name="security/whitelists" />
            }, {
                path : 'security/shared-responsibility-model',
                element : <DocsWrapper name="security/shared-responsibility-model" />
            }, {
                path : 'security/customers',
                element : <DocsWrapper name="security/customers" />
            }, {
                path : 'security/checklist',
                element : <DocsWrapper name="security/checklist" />
            }, {
                path : 'private/support-ticket-api',
                element : <DocsWrapper name="private/support-ticket-api" />
            }, {
                path : 'private/microsoft-net',
                element : <DocsWrapper name="private/microsoft-net" />
            }, {
                path : 'private/invoices-callback',
                element : <DocsWrapper name="private/invoices-callback" />
            }, {
                path : 'payments',
                element : <DocsWrapper name="payments" />
            }, {
                path : 'payments/webhooks',
                element : <DocsWrapper name="payments/webhooks" />
            }, {
                path : 'payments/wallet',
                element : <DocsWrapper name="payments/wallet" />
            }, {
                path : 'payments/wallet/wallet-operations',
                element : <DocsWrapper name="payments/wallet/wallet-operations" />
            }, {
                path : 'payments/wallet/api-reference',
                element : <DocsWrapper name="payments/wallet/api-reference" />
            }, {
                path : 'payments/thirdwatch',
                element : <DocsWrapper name="payments/thirdwatch" />
            }, {
                path : 'payments/third-party-validation',
                element : <DocsWrapper name="payments/third-party-validation" />
            }, {
                path : 'payments/third-party-validation/s2s-integration',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration" />
            }, {
                path : 'payments/third-party-validation/s2s-integration/upi/intent',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration/upi/intent" />
            }, {
                path : 'payments/third-party-validation/s2s-integration/upi/collect',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration/upi/collect" />
            }, {
                path : 'payments/third-party-validation/s2s-integration/netbanking',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration/netbanking" />
            }, {
                path : 'payments/third-party-validation/s2s-integration/methods-api',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration/methods-api" />
            }, {
                path : 'payments/third-party-validation/s2s-integration/best-practices',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration/best-practices" />
            }, {
                path : 'payments/third-party-validation/s2s-integration/bank-list',
                element : <DocsWrapper name="payments/third-party-validation/s2s-integration/bank-list" />
            }, {
                path : 'payments/third-party-validation/custom-integration',
                element : <DocsWrapper name="payments/third-party-validation/custom-integration" />
            }, {
                path : 'payments/third-party-validation/custom-integration/best-practices',
                element : <DocsWrapper name="payments/third-party-validation/custom-integration/best-practices" />
            }, {
                path : 'payments/third-party-validation/custom-integration/bank-list',
                element : <DocsWrapper name="payments/third-party-validation/custom-integration/bank-list" />
            }, {
                path : 'payments/third-party-validation/best-practices',
                element : <DocsWrapper name="payments/third-party-validation/best-practices" />
            }, {
                path : 'payments/third-party-validation/bank-list',
                element : <DocsWrapper name="payments/third-party-validation/bank-list" />
            }, {
                path : 'payments/subscriptions',
                element : <DocsWrapper name="payments/subscriptions" />
            }, {
                path : 'payments/subscriptions/workflow',
                element : <DocsWrapper name="payments/subscriptions/workflow" />
            }, {
                path : 'payments/subscriptions/view',
                element : <DocsWrapper name="payments/subscriptions/view" />
            }, {
                path : 'payments/subscriptions/update',
                element : <DocsWrapper name="payments/subscriptions/update" />
            }, {
                path : 'payments/subscriptions/test',
                element : <DocsWrapper name="payments/subscriptions/test" />
            }, {
                path : 'payments/subscriptions/supported-banks-apps',
                element : <DocsWrapper name="payments/subscriptions/supported-banks-apps" />
            }, {
                path : 'payments/subscriptions/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/subscriptions/subscribe-to-webhooks" />
            }, {
                path : 'payments/subscriptions/states',
                element : <DocsWrapper name="payments/subscriptions/states" />
            }, {
                path : 'payments/subscriptions/settings',
                element : <DocsWrapper name="payments/subscriptions/settings" />
            }, {
                path : 'payments/subscriptions/qr-codes',
                element : <DocsWrapper name="payments/subscriptions/qr-codes" />
            }, {
                path : 'payments/subscriptions/plugins/woocommerce',
                element : <DocsWrapper name="payments/subscriptions/plugins/woocommerce" />
            }, {
                path : 'payments/subscriptions/plugins/woocommerce/test-integration',
                element : <DocsWrapper name="payments/subscriptions/plugins/woocommerce/test-integration" />
            }, {
                path : 'payments/subscriptions/plugins/woocommerce/subscriptions-status',
                element : <DocsWrapper name="payments/subscriptions/plugins/woocommerce/subscriptions-status" />
            }, {
                path : 'payments/subscriptions/plugins/woocommerce/manage-subscriptions',
                element : <DocsWrapper name="payments/subscriptions/plugins/woocommerce/manage-subscriptions" />
            }, {
                path : 'payments/subscriptions/plugins/woocommerce/go-live-checklist',
                element : <DocsWrapper name="payments/subscriptions/plugins/woocommerce/go-live-checklist" />
            }, {
                path : 'payments/subscriptions/plugins/woocommerce/build-integration',
                element : <DocsWrapper name="payments/subscriptions/plugins/woocommerce/build-integration" />
            }, {
                path : 'payments/subscriptions/plugins/opencart',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart" />
            }, {
                path : 'payments/subscriptions/plugins/opencart/webhook-events',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart/webhook-events" />
            }, {
                path : 'payments/subscriptions/plugins/opencart/test-integration',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart/test-integration" />
            }, {
                path : 'payments/subscriptions/plugins/opencart/subscriptions-status',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart/subscriptions-status" />
            }, {
                path : 'payments/subscriptions/plugins/opencart/manage-subscriptions',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart/manage-subscriptions" />
            }, {
                path : 'payments/subscriptions/plugins/opencart/go-live-checklist',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart/go-live-checklist" />
            }, {
                path : 'payments/subscriptions/plugins/opencart/build-integration',
                element : <DocsWrapper name="payments/subscriptions/plugins/opencart/build-integration" />
            }, {
                path : 'payments/subscriptions/plugins/magento',
                element : <DocsWrapper name="payments/subscriptions/plugins/magento" />
            }, {
                path : 'payments/subscriptions/plugins/magento/webhook-events',
                element : <DocsWrapper name="payments/subscriptions/plugins/magento/webhook-events" />
            }, {
                path : 'payments/subscriptions/plugins/magento/test-it-out',
                element : <DocsWrapper name="payments/subscriptions/plugins/magento/test-it-out" />
            }, {
                path : 'payments/subscriptions/plugins/magento/status',
                element : <DocsWrapper name="payments/subscriptions/plugins/magento/status" />
            }, {
                path : 'payments/subscriptions/plugins/magento/manage',
                element : <DocsWrapper name="payments/subscriptions/plugins/magento/manage" />
            }, {
                path : 'payments/subscriptions/payment-retries',
                element : <DocsWrapper name="payments/subscriptions/payment-retries" />
            }, {
                path : 'payments/subscriptions/pause-resume-cancel',
                element : <DocsWrapper name="payments/subscriptions/pause-resume-cancel" />
            }, {
                path : 'payments/subscriptions/offers',
                element : <DocsWrapper name="payments/subscriptions/offers" />
            }, {
                path : 'payments/subscriptions/offers/update',
                element : <DocsWrapper name="payments/subscriptions/offers/update" />
            }, {
                path : 'payments/subscriptions/offers/link',
                element : <DocsWrapper name="payments/subscriptions/offers/link" />
            }, {
                path : 'payments/subscriptions/offers/delete',
                element : <DocsWrapper name="payments/subscriptions/offers/delete" />
            }, {
                path : 'payments/subscriptions/offers/create',
                element : <DocsWrapper name="payments/subscriptions/offers/create" />
            }, {
                path : 'payments/subscriptions/notifications',
                element : <DocsWrapper name="payments/subscriptions/notifications" />
            }, {
                path : 'payments/subscriptions/manually-charge-card',
                element : <DocsWrapper name="payments/subscriptions/manually-charge-card" />
            }, {
                path : 'payments/subscriptions/glossary',
                element : <DocsWrapper name="payments/subscriptions/glossary" />
            }, {
                path : 'payments/subscriptions/faqs',
                element : <DocsWrapper name="payments/subscriptions/faqs" />
            }, {
                path : 'payments/subscriptions/create-subscription-links',
                element : <DocsWrapper name="payments/subscriptions/create-subscription-links" />
            }, {
                path : 'payments/subscriptions/create-plans',
                element : <DocsWrapper name="payments/subscriptions/create-plans" />
            }, {
                path : 'payments/subscriptions/create-add-ons',
                element : <DocsWrapper name="payments/subscriptions/create-add-ons" />
            }, {
                path : 'payments/subscriptions/create',
                element : <DocsWrapper name="payments/subscriptions/create" />
            }, {
                path : 'payments/subscriptions/apis',
                element : <DocsWrapper name="payments/subscriptions/apis" />
            }, {
                path : 'payments/smart-collect',
                element : <DocsWrapper name="payments/smart-collect" />
            }, {
                path : 'payments/smart-collect/yesbank-moratorium-migration',
                element : <DocsWrapper name="payments/smart-collect/yesbank-moratorium-migration" />
            }, {
                path : 'payments/smart-collect/vanity',
                element : <DocsWrapper name="payments/smart-collect/vanity" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/yesbank-moratorium-migration',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/yesbank-moratorium-migration" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/vanity',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/vanity" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/testing',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/testing" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/status',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/status" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/refunds',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/refunds" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/receiver-types',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/receiver-types" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/notification-wo-payer-details',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/notification-wo-payer-details" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/notification',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/notification" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/faqs',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/faqs" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/dashboard',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/dashboard" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/dashboard/test-payments',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/dashboard/test-payments" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/dashboard/search',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/dashboard/search" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/dashboard/refund',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/dashboard/refund" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/dashboard/create',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/dashboard/create" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/dashboard/close',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/dashboard/close" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/custom',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/custom" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/batch',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/batch" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api/update',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api/update" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api/refunds',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api/refunds" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api/postman-collection',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api/postman-collection" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api/fetch',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api/fetch" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api/create',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api/create" />
            }, {
                path : 'payments/smart-collect/va-vpa-qr/api/close',
                element : <DocsWrapper name="payments/smart-collect/va-vpa-qr/api/close" />
            }, {
                path : 'payments/smart-collect/update-individual-expiry',
                element : <DocsWrapper name="payments/smart-collect/update-individual-expiry" />
            }, {
                path : 'payments/smart-collect/update-expiry',
                element : <DocsWrapper name="payments/smart-collect/update-expiry" />
            }, {
                path : 'payments/smart-collect/update-expiry/bulk',
                element : <DocsWrapper name="payments/smart-collect/update-expiry/bulk" />
            }, {
                path : 'payments/smart-collect/update',
                element : <DocsWrapper name="payments/smart-collect/update" />
            }, {
                path : 'payments/smart-collect/third-party-validation',
                element : <DocsWrapper name="payments/smart-collect/third-party-validation" />
            }, {
                path : 'payments/smart-collect/testing',
                element : <DocsWrapper name="payments/smart-collect/testing" />
            }, {
                path : 'payments/smart-collect/test-payments',
                element : <DocsWrapper name="payments/smart-collect/test-payments" />
            }, {
                path : 'payments/smart-collect/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/smart-collect/subscribe-to-webhooks" />
            }, {
                path : 'payments/smart-collect/status',
                element : <DocsWrapper name="payments/smart-collect/status" />
            }, {
                path : 'payments/smart-collect/states',
                element : <DocsWrapper name="payments/smart-collect/states" />
            }, {
                path : 'payments/smart-collect/search',
                element : <DocsWrapper name="payments/smart-collect/search" />
            }, {
                path : 'payments/smart-collect/refund-failures',
                element : <DocsWrapper name="payments/smart-collect/refund-failures" />
            }, {
                path : 'payments/smart-collect/refund',
                element : <DocsWrapper name="payments/smart-collect/refund" />
            }, {
                path : 'payments/smart-collect/receiver-types',
                element : <DocsWrapper name="payments/smart-collect/receiver-types" />
            }, {
                path : 'payments/smart-collect/pa-pg-migration',
                element : <DocsWrapper name="payments/smart-collect/pa-pg-migration" />
            }, {
                path : 'payments/smart-collect/notification-wo-payer-details',
                element : <DocsWrapper name="payments/smart-collect/notification-wo-payer-details" />
            }, {
                path : 'payments/smart-collect/how-it-works',
                element : <DocsWrapper name="payments/smart-collect/how-it-works" />
            }, {
                path : 'payments/smart-collect/glossary',
                element : <DocsWrapper name="payments/smart-collect/glossary" />
            }, {
                path : 'payments/smart-collect/faqs',
                element : <DocsWrapper name="payments/smart-collect/faqs" />
            }, {
                path : 'payments/smart-collect/custom',
                element : <DocsWrapper name="payments/smart-collect/custom" />
            }, {
                path : 'payments/smart-collect/create-tpv',
                element : <DocsWrapper name="payments/smart-collect/create-tpv" />
            }, {
                path : 'payments/smart-collect/create',
                element : <DocsWrapper name="payments/smart-collect/create" />
            }, {
                path : 'payments/smart-collect/close',
                element : <DocsWrapper name="payments/smart-collect/close" />
            }, {
                path : 'payments/smart-collect/bulk',
                element : <DocsWrapper name="payments/smart-collect/bulk" />
            }, {
                path : 'payments/smart-collect/apis-tpv',
                element : <DocsWrapper name="payments/smart-collect/apis-tpv" />
            }, {
                path : 'payments/smart-collect/apis',
                element : <DocsWrapper name="payments/smart-collect/apis" />
            }, {
                path : 'payments/settlements',
                element : <DocsWrapper name="payments/settlements" />
            }, {
                path : 'payments/settlements/instant',
                element : <DocsWrapper name="payments/settlements/instant" />
            }, {
                path : 'payments/settlements/faqs',
                element : <DocsWrapper name="payments/settlements/faqs" />
            }, {
                path : 'payments/settlements/direct',
                element : <DocsWrapper name="payments/settlements/direct" />
            }, {
                path : 'payments/settlements/dashboard',
                element : <DocsWrapper name="payments/settlements/dashboard" />
            }, {
                path : 'payments/settlements/apis',
                element : <DocsWrapper name="payments/settlements/apis" />
            }, {
                path : 'payments/server-integration',
                element : <DocsWrapper name="payments/server-integration" />
            }, {
                path : 'payments/server-integration/ruby/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/ruby/payment-gateway" />
            }, {
                path : 'payments/server-integration/ruby/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/ruby/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/ruby/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/ruby/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/ruby/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/ruby/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/ruby/install',
                element : <DocsWrapper name="payments/server-integration/ruby/install" />
            }, {
                path : 'payments/server-integration/python/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/python/payment-gateway" />
            }, {
                path : 'payments/server-integration/python/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/python/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/python/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/python/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/python/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/python/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/python/others-integration',
                element : <DocsWrapper name="payments/server-integration/python/others-integration" />
            }, {
                path : 'payments/server-integration/python/install',
                element : <DocsWrapper name="payments/server-integration/python/install" />
            }, {
                path : 'payments/server-integration/php/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/php/payment-gateway" />
            }, {
                path : 'payments/server-integration/php/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/php/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/php/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/php/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/php/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/php/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/php/others-integration',
                element : <DocsWrapper name="payments/server-integration/php/others-integration" />
            }, {
                path : 'payments/server-integration/php/install',
                element : <DocsWrapper name="payments/server-integration/php/install" />
            }, {
                path : 'payments/server-integration/nodejs/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/nodejs/payment-gateway" />
            }, {
                path : 'payments/server-integration/nodejs/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/nodejs/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/nodejs/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/nodejs/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/nodejs/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/nodejs/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/nodejs/others-integration',
                element : <DocsWrapper name="payments/server-integration/nodejs/others-integration" />
            }, {
                path : 'payments/server-integration/nodejs/install',
                element : <DocsWrapper name="payments/server-integration/nodejs/install" />
            }, {
                path : 'payments/server-integration/nodejs/faqs',
                element : <DocsWrapper name="payments/server-integration/nodejs/faqs" />
            }, {
                path : 'payments/server-integration/java/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/java/payment-gateway" />
            }, {
                path : 'payments/server-integration/java/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/java/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/java/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/java/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/java/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/java/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/java/others-integration',
                element : <DocsWrapper name="payments/server-integration/java/others-integration" />
            }, {
                path : 'payments/server-integration/java/install',
                element : <DocsWrapper name="payments/server-integration/java/install" />
            }, {
                path : 'payments/server-integration/go/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/go/payment-gateway" />
            }, {
                path : 'payments/server-integration/go/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/go/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/go/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/go/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/go/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/go/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/go/install',
                element : <DocsWrapper name="payments/server-integration/go/install" />
            }, {
                path : 'payments/server-integration/dot-net/troubleshooting-faqs',
                element : <DocsWrapper name="payments/server-integration/dot-net/troubleshooting-faqs" />
            }, {
                path : 'payments/server-integration/dot-net/payment-gateway',
                element : <DocsWrapper name="payments/server-integration/dot-net/payment-gateway" />
            }, {
                path : 'payments/server-integration/dot-net/payment-gateway/test-integration',
                element : <DocsWrapper name="payments/server-integration/dot-net/payment-gateway/test-integration" />
            }, {
                path : 'payments/server-integration/dot-net/payment-gateway/go-live-checklist',
                element : <DocsWrapper name="payments/server-integration/dot-net/payment-gateway/go-live-checklist" />
            }, {
                path : 'payments/server-integration/dot-net/payment-gateway/build-integration',
                element : <DocsWrapper name="payments/server-integration/dot-net/payment-gateway/build-integration" />
            }, {
                path : 'payments/server-integration/dot-net/install',
                element : <DocsWrapper name="payments/server-integration/dot-net/install" />
            }, {
                path : 'payments/second-component',
                element : <DocsWrapper name="payments/second-component" />
            }, {
                path : 'payments/route',
                element : <DocsWrapper name="payments/route" />
            }, {
                path : 'payments/route/view-reports',
                element : <DocsWrapper name="payments/route/view-reports" />
            }, {
                path : 'payments/route/use-cases',
                element : <DocsWrapper name="payments/route/use-cases" />
            }, {
                path : 'payments/route/transfer-funds-to-linked-accounts',
                element : <DocsWrapper name="payments/route/transfer-funds-to-linked-accounts" />
            }, {
                path : 'payments/route/transfer-fees-example',
                element : <DocsWrapper name="payments/route/transfer-fees-example" />
            }, {
                path : 'payments/route/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/route/subscribe-to-webhooks" />
            }, {
                path : 'payments/route/schedule-settlement',
                element : <DocsWrapper name="payments/route/schedule-settlement" />
            }, {
                path : 'payments/route/reversal',
                element : <DocsWrapper name="payments/route/reversal" />
            }, {
                path : 'payments/route/refund',
                element : <DocsWrapper name="payments/route/refund" />
            }, {
                path : 'payments/route/pricing',
                element : <DocsWrapper name="payments/route/pricing" />
            }, {
                path : 'payments/route/plugins/woocommerce',
                element : <DocsWrapper name="payments/route/plugins/woocommerce" />
            }, {
                path : 'payments/route/plugins/woocommerce/test-integration',
                element : <DocsWrapper name="payments/route/plugins/woocommerce/test-integration" />
            }, {
                path : 'payments/route/plugins/woocommerce/go-live-checklist',
                element : <DocsWrapper name="payments/route/plugins/woocommerce/go-live-checklist" />
            }, {
                path : 'payments/route/plugins/woocommerce/create-reversals',
                element : <DocsWrapper name="payments/route/plugins/woocommerce/create-reversals" />
            }, {
                path : 'payments/route/plugins/woocommerce/build-integration/transfers-orders-payments',
                element : <DocsWrapper name="payments/route/plugins/woocommerce/build-integration/transfers-orders-payments" />
            }, {
                path : 'payments/route/plugins/woocommerce/build-integration/direct-transfers',
                element : <DocsWrapper name="payments/route/plugins/woocommerce/build-integration/direct-transfers" />
            }, {
                path : 'payments/route/other-features',
                element : <DocsWrapper name="payments/route/other-features" />
            }, {
                path : 'payments/route/linked-account',
                element : <DocsWrapper name="payments/route/linked-account" />
            }, {
                path : 'payments/route/linked-account/reversals-settlements',
                element : <DocsWrapper name="payments/route/linked-account/reversals-settlements" />
            }, {
                path : 'payments/route/linked-account/manage-profile',
                element : <DocsWrapper name="payments/route/linked-account/manage-profile" />
            }, {
                path : 'payments/route/linked-account/initiate-refund',
                element : <DocsWrapper name="payments/route/linked-account/initiate-refund" />
            }, {
                path : 'payments/route/glossary',
                element : <DocsWrapper name="payments/route/glossary" />
            }, {
                path : 'payments/route/faqs',
                element : <DocsWrapper name="payments/route/faqs" />
            }, {
                path : 'payments/route/dashboard',
                element : <DocsWrapper name="payments/route/dashboard" />
            }, {
                path : 'payments/route/batch-upload',
                element : <DocsWrapper name="payments/route/batch-upload" />
            }, {
                path : 'payments/route/batch-linked-accounts',
                element : <DocsWrapper name="payments/route/batch-linked-accounts" />
            }, {
                path : 'payments/route/apis',
                element : <DocsWrapper name="payments/route/apis" />
            }, {
                path : 'payments/route/account-code',
                element : <DocsWrapper name="payments/route/account-code" />
            }, {
                path : 'payments/route/account-code/dashboard',
                element : <DocsWrapper name="payments/route/account-code/dashboard" />
            }, {
                path : 'payments/route/account-code/api',
                element : <DocsWrapper name="payments/route/account-code/api" />
            }, {
                path : 'payments/refunds',
                element : <DocsWrapper name="payments/refunds" />
            }, {
                path : 'payments/refunds/view',
                element : <DocsWrapper name="payments/refunds/view" />
            }, {
                path : 'payments/refunds/supported-payment-methods',
                element : <DocsWrapper name="payments/refunds/supported-payment-methods" />
            }, {
                path : 'payments/refunds/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/refunds/subscribe-to-webhooks" />
            }, {
                path : 'payments/refunds/refund-speed',
                element : <DocsWrapper name="payments/refunds/refund-speed" />
            }, {
                path : 'payments/refunds/normal',
                element : <DocsWrapper name="payments/refunds/normal" />
            }, {
                path : 'payments/refunds/issue',
                element : <DocsWrapper name="payments/refunds/issue" />
            }, {
                path : 'payments/refunds/instant',
                element : <DocsWrapper name="payments/refunds/instant" />
            }, {
                path : 'payments/refunds/faqs',
                element : <DocsWrapper name="payments/refunds/faqs" />
            }, {
                path : 'payments/refunds/errors',
                element : <DocsWrapper name="payments/refunds/errors" />
            }, {
                path : 'payments/refunds/emi-pay-later',
                element : <DocsWrapper name="payments/refunds/emi-pay-later" />
            }, {
                path : 'payments/refunds/communication',
                element : <DocsWrapper name="payments/refunds/communication" />
            }, {
                path : 'payments/refunds/chargeback',
                element : <DocsWrapper name="payments/refunds/chargeback" />
            }, {
                path : 'payments/refunds/batch',
                element : <DocsWrapper name="payments/refunds/batch" />
            }, {
                path : 'payments/refunds/apis',
                element : <DocsWrapper name="payments/refunds/apis" />
            }, {
                path : 'payments/referral-program',
                element : <DocsWrapper name="payments/referral-program" />
            }, {
                path : 'payments/recurring-payments',
                element : <DocsWrapper name="payments/recurring-payments" />
            }, {
                path : 'payments/recurring-payments/upload-paper-nach-form',
                element : <DocsWrapper name="payments/recurring-payments/upload-paper-nach-form" />
            }, {
                path : 'payments/recurring-payments/upi/supported-banks',
                element : <DocsWrapper name="payments/recurring-payments/upi/supported-banks" />
            }, {
                path : 'payments/recurring-payments/upi/qr-codes',
                element : <DocsWrapper name="payments/recurring-payments/upi/qr-codes" />
            }, {
                path : 'payments/recurring-payments/upi/integrate',
                element : <DocsWrapper name="payments/recurring-payments/upi/integrate" />
            }, {
                path : 'payments/recurring-payments/upi/faqs',
                element : <DocsWrapper name="payments/recurring-payments/upi/faqs" />
            }, {
                path : 'payments/recurring-payments/upi/apis',
                element : <DocsWrapper name="payments/recurring-payments/upi/apis" />
            }, {
                path : 'payments/recurring-payments/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/recurring-payments/subscribe-to-webhooks" />
            }, {
                path : 'payments/recurring-payments/paper-nach/integrate',
                element : <DocsWrapper name="payments/recurring-payments/paper-nach/integrate" />
            }, {
                path : 'payments/recurring-payments/paper-nach/faqs',
                element : <DocsWrapper name="payments/recurring-payments/paper-nach/faqs" />
            }, {
                path : 'payments/recurring-payments/paper-nach/apis',
                element : <DocsWrapper name="payments/recurring-payments/paper-nach/apis" />
            }, {
                path : 'payments/recurring-payments/glossary',
                element : <DocsWrapper name="payments/recurring-payments/glossary" />
            }, {
                path : 'payments/recurring-payments/emandate/supported-banks',
                element : <DocsWrapper name="payments/recurring-payments/emandate/supported-banks" />
            }, {
                path : 'payments/recurring-payments/emandate/integrate',
                element : <DocsWrapper name="payments/recurring-payments/emandate/integrate" />
            }, {
                path : 'payments/recurring-payments/emandate/faqs',
                element : <DocsWrapper name="payments/recurring-payments/emandate/faqs" />
            }, {
                path : 'payments/recurring-payments/emandate/errors',
                element : <DocsWrapper name="payments/recurring-payments/emandate/errors" />
            }, {
                path : 'payments/recurring-payments/emandate/charge-customer-during-registration',
                element : <DocsWrapper name="payments/recurring-payments/emandate/charge-customer-during-registration" />
            }, {
                path : 'payments/recurring-payments/emandate/apis',
                element : <DocsWrapper name="payments/recurring-payments/emandate/apis" />
            }, {
                path : 'payments/recurring-payments/create',
                element : <DocsWrapper name="payments/recurring-payments/create" />
            }, {
                path : 'payments/recurring-payments/cards/supported-banks',
                element : <DocsWrapper name="payments/recurring-payments/cards/supported-banks" />
            }, {
                path : 'payments/recurring-payments/cards/integrate',
                element : <DocsWrapper name="payments/recurring-payments/cards/integrate" />
            }, {
                path : 'payments/recurring-payments/cards/faqs',
                element : <DocsWrapper name="payments/recurring-payments/cards/faqs" />
            }, {
                path : 'payments/recurring-payments/cards/apis',
                element : <DocsWrapper name="payments/recurring-payments/cards/apis" />
            }, {
                path : 'payments/recurring-payments/batch-operations',
                element : <DocsWrapper name="payments/recurring-payments/batch-operations" />
            }, {
                path : 'payments/qr-codes',
                element : <DocsWrapper name="payments/qr-codes" />
            }, {
                path : 'payments/qr-codes/view-reports',
                element : <DocsWrapper name="payments/qr-codes/view-reports" />
            }, {
                path : 'payments/qr-codes/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/qr-codes/subscribe-to-webhooks" />
            }, {
                path : 'payments/qr-codes/states',
                element : <DocsWrapper name="payments/qr-codes/states" />
            }, {
                path : 'payments/qr-codes/search',
                element : <DocsWrapper name="payments/qr-codes/search" />
            }, {
                path : 'payments/qr-codes/migrate',
                element : <DocsWrapper name="payments/qr-codes/migrate" />
            }, {
                path : 'payments/qr-codes/how-it-works',
                element : <DocsWrapper name="payments/qr-codes/how-it-works" />
            }, {
                path : 'payments/qr-codes/glossary',
                element : <DocsWrapper name="payments/qr-codes/glossary" />
            }, {
                path : 'payments/qr-codes/faqs',
                element : <DocsWrapper name="payments/qr-codes/faqs" />
            }, {
                path : 'payments/qr-codes/create',
                element : <DocsWrapper name="payments/qr-codes/create" />
            }, {
                path : 'payments/qr-codes/close',
                element : <DocsWrapper name="payments/qr-codes/close" />
            }, {
                path : 'payments/qr-codes/apis',
                element : <DocsWrapper name="payments/qr-codes/apis" />
            }, {
                path : 'payments/payments',
                element : <DocsWrapper name="payments/payments" />
            }, {
                path : 'payments/payments/test-upi-details',
                element : <DocsWrapper name="payments/payments/test-upi-details" />
            }, {
                path : 'payments/payments/test-card-details',
                element : <DocsWrapper name="payments/payments/test-card-details" />
            }, {
                path : 'payments/payments/success-rate-analytics',
                element : <DocsWrapper name="payments/payments/success-rate-analytics" />
            }, {
                path : 'payments/payments/outward-remittances',
                element : <DocsWrapper name="payments/payments/outward-remittances" />
            }, {
                path : 'payments/payments/outward-remittances/education',
                element : <DocsWrapper name="payments/payments/outward-remittances/education" />
            }, {
                path : 'payments/payments/late-authorisation',
                element : <DocsWrapper name="payments/payments/late-authorisation" />
            }, {
                path : 'payments/payments/late-authorisation/handle',
                element : <DocsWrapper name="payments/payments/late-authorisation/handle" />
            }, {
                path : 'payments/payments/international-payments',
                element : <DocsWrapper name="payments/payments/international-payments" />
            }, {
                path : 'payments/payments/faqs',
                element : <DocsWrapper name="payments/payments/faqs" />
            }, {
                path : 'payments/payments/failure-analysis',
                element : <DocsWrapper name="payments/payments/failure-analysis" />
            }, {
                path : 'payments/payments/downtime-updates',
                element : <DocsWrapper name="payments/payments/downtime-updates" />
            }, {
                path : 'payments/payments/dashboard',
                element : <DocsWrapper name="payments/payments/dashboard" />
            }, {
                path : 'payments/payments/capture-settings',
                element : <DocsWrapper name="payments/payments/capture-settings" />
            }, {
                path : 'payments/payments/capture-settings/api',
                element : <DocsWrapper name="payments/payments/capture-settings/api" />
            }, {
                path : 'payments/payments/apis',
                element : <DocsWrapper name="payments/payments/apis" />
            }, {
                path : 'payments/payments/address-verification-system',
                element : <DocsWrapper name="payments/payments/address-verification-system" />
            }, {
                path : 'payments/payments/accept-international-payments-via-swift-transfer',
                element : <DocsWrapper name="payments/payments/accept-international-payments-via-swift-transfer" />
            }, {
                path : 'payments/payments/accept-international-payments-via-local-currency-bank-accounts',
                element : <DocsWrapper name="payments/payments/accept-international-payments-via-local-currency-bank-accounts" />
            }, {
                path : 'payments/payments/accept-international-payments-from-india',
                element : <DocsWrapper name="payments/payments/accept-international-payments-from-india" />
            }, {
                path : 'payments/payment-pages',
                element : <DocsWrapper name="payments/payment-pages" />
            }, {
                path : 'payments/payment-pages/view-reports',
                element : <DocsWrapper name="payments/payment-pages/view-reports" />
            }, {
                path : 'payments/payment-pages/twitter-tip-jar',
                element : <DocsWrapper name="payments/payment-pages/twitter-tip-jar" />
            }, {
                path : 'payments/payment-pages/twitter-tip-jar/view-settlements',
                element : <DocsWrapper name="payments/payment-pages/twitter-tip-jar/view-settlements" />
            }, {
                path : 'payments/payment-pages/twitter-tip-jar/receive-payments',
                element : <DocsWrapper name="payments/payment-pages/twitter-tip-jar/receive-payments" />
            }, {
                path : 'payments/payment-pages/twitter-tip-jar/link-page',
                element : <DocsWrapper name="payments/payment-pages/twitter-tip-jar/link-page" />
            }, {
                path : 'payments/payment-pages/twitter-tip-jar/customise-url',
                element : <DocsWrapper name="payments/payment-pages/twitter-tip-jar/customise-url" />
            }, {
                path : 'payments/payment-pages/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/payment-pages/subscribe-to-webhooks" />
            }, {
                path : 'payments/payment-pages/states',
                element : <DocsWrapper name="payments/payment-pages/states" />
            }, {
                path : 'payments/payment-pages/search',
                element : <DocsWrapper name="payments/payment-pages/search" />
            }, {
                path : 'payments/payment-pages/receipt',
                element : <DocsWrapper name="payments/payment-pages/receipt" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons/zapier',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons/zapier" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons/shiprocket',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons/shiprocket" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons/magic-checkout',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons/magic-checkout" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons/google-analytics',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons/google-analytics" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons/fb-pixel',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons/fb-pixel" />
            }, {
                path : 'payments/payment-pages/plugins-add-ons/fb-payment-success',
                element : <DocsWrapper name="payments/payment-pages/plugins-add-ons/fb-payment-success" />
            }, {
                path : 'payments/payment-pages/manage',
                element : <DocsWrapper name="payments/payment-pages/manage" />
            }, {
                path : 'payments/payment-pages/how-it-works',
                element : <DocsWrapper name="payments/payment-pages/how-it-works" />
            }, {
                path : 'payments/payment-pages/goal-tracker',
                element : <DocsWrapper name="payments/payment-pages/goal-tracker" />
            }, {
                path : 'payments/payment-pages/glossary',
                element : <DocsWrapper name="payments/payment-pages/glossary" />
            }, {
                path : 'payments/payment-pages/faqs',
                element : <DocsWrapper name="payments/payment-pages/faqs" />
            }, {
                path : 'payments/payment-pages/domain-linking',
                element : <DocsWrapper name="payments/payment-pages/domain-linking" />
            }, {
                path : 'payments/payment-pages/customise',
                element : <DocsWrapper name="payments/payment-pages/customise" />
            }, {
                path : 'payments/payment-pages/create',
                element : <DocsWrapper name="payments/payment-pages/create" />
            }, {
                path : 'payments/payment-pages/add-images-videos',
                element : <DocsWrapper name="payments/payment-pages/add-images-videos" />
            }, {
                path : 'payments/payment-pages/80g-receipt',
                element : <DocsWrapper name="payments/payment-pages/80g-receipt" />
            }, {
                path : 'payments/payment-methods',
                element : <DocsWrapper name="payments/payment-methods" />
            }, {
                path : 'payments/payment-methods/wallets/touch-n-go',
                element : <DocsWrapper name="payments/payment-methods/wallets/touch-n-go" />
            }, {
                path : 'payments/payment-methods/wallets/paytm',
                element : <DocsWrapper name="payments/payment-methods/wallets/paytm" />
            }, {
                path : 'payments/payment-methods/wallets/paypal',
                element : <DocsWrapper name="payments/payment-methods/wallets/paypal" />
            }, {
                path : 'payments/payment-methods/wallets/grab-pay',
                element : <DocsWrapper name="payments/payment-methods/wallets/grab-pay" />
            }, {
                path : 'payments/payment-methods/wallets/external',
                element : <DocsWrapper name="payments/payment-methods/wallets/external" />
            }, {
                path : 'payments/payment-methods/wallets/bajaj-pay',
                element : <DocsWrapper name="payments/payment-methods/wallets/bajaj-pay" />
            }, {
                path : 'payments/payment-methods/wallets/amazon-pay',
                element : <DocsWrapper name="payments/payment-methods/wallets/amazon-pay" />
            }, {
                path : 'payments/payment-methods/wallets/amazon-pay/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/wallets/amazon-pay/custom-integration" />
            }, {
                path : 'payments/payment-methods/upi-qr',
                element : <DocsWrapper name="payments/payment-methods/upi-qr" />
            }, {
                path : 'payments/payment-methods/upi-qr/webhooks',
                element : <DocsWrapper name="payments/payment-methods/upi-qr/webhooks" />
            }, {
                path : 'payments/payment-methods/upi-qr/faqs',
                element : <DocsWrapper name="payments/payment-methods/upi-qr/faqs" />
            }, {
                path : 'payments/payment-methods/upi-qr/api',
                element : <DocsWrapper name="payments/payment-methods/upi-qr/api" />
            }, {
                path : 'payments/payment-methods/upi',
                element : <DocsWrapper name="payments/payment-methods/upi" />
            }, {
                path : 'payments/payment-methods/upi/vpa-validation',
                element : <DocsWrapper name="payments/payment-methods/upi/vpa-validation" />
            }, {
                path : 'payments/payment-methods/upi/upi-intent',
                element : <DocsWrapper name="payments/payment-methods/upi/upi-intent" />
            }, {
                path : 'payments/payment-methods/upi/upi-intent/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/upi-intent/s2s-integration" />
            }, {
                path : 'payments/payment-methods/upi/upi-intent/mobile-web',
                element : <DocsWrapper name="payments/payment-methods/upi/upi-intent/mobile-web" />
            }, {
                path : 'payments/payment-methods/upi/upi-intent/ios',
                element : <DocsWrapper name="payments/payment-methods/upi/upi-intent/ios" />
            }, {
                path : 'payments/payment-methods/upi/upi-intent/android',
                element : <DocsWrapper name="payments/payment-methods/upi/upi-intent/android" />
            }, {
                path : 'payments/payment-methods/upi/turbo-upi',
                element : <DocsWrapper name="payments/payment-methods/upi/turbo-upi" />
            }, {
                path : 'payments/payment-methods/upi/supported-apps',
                element : <DocsWrapper name="payments/payment-methods/upi/supported-apps" />
            }, {
                path : 'payments/payment-methods/upi/saved-vpa',
                element : <DocsWrapper name="payments/payment-methods/upi/saved-vpa" />
            }, {
                path : 'payments/payment-methods/upi/gst-on-upi',
                element : <DocsWrapper name="payments/payment-methods/upi/gst-on-upi" />
            }, {
                path : 'payments/payment-methods/upi/gst-on-upi/faqs',
                element : <DocsWrapper name="payments/payment-methods/upi/gst-on-upi/faqs" />
            }, {
                path : 'payments/payment-methods/upi/google-pay',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/standard-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/standard-integration" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/spot-platform-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/spot-platform-integration" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/spot-platform-integration/checkout-parameters',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/spot-platform-integration/checkout-parameters" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/omnichannel',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/omnichannel" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/omnichannel/standard-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/omnichannel/standard-integration" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/omnichannel/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/omnichannel/s2s-integration" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/omnichannel/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/omnichannel/custom-integration" />
            }, {
                path : 'payments/payment-methods/upi/google-pay/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/upi/google-pay/custom-integration" />
            }, {
                path : 'payments/payment-methods/upi/cc-on-upi',
                element : <DocsWrapper name="payments/payment-methods/upi/cc-on-upi" />
            }, {
                path : 'payments/payment-methods/trustly',
                element : <DocsWrapper name="payments/payment-methods/trustly" />
            }, {
                path : 'payments/payment-methods/trustly/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/trustly/s2s-integration" />
            }, {
                path : 'payments/payment-methods/trustly/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/trustly/custom-integration" />
            }, {
                path : 'payments/payment-methods/transaction-limits',
                element : <DocsWrapper name="payments/payment-methods/transaction-limits" />
            }, {
                path : 'payments/payment-methods/transaction-limits/upi',
                element : <DocsWrapper name="payments/payment-methods/transaction-limits/upi" />
            }, {
                path : 'payments/payment-methods/swift-bank-transfer',
                element : <DocsWrapper name="payments/payment-methods/swift-bank-transfer" />
            }, {
                path : 'payments/payment-methods/sofort',
                element : <DocsWrapper name="payments/payment-methods/sofort" />
            }, {
                path : 'payments/payment-methods/sofort/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/sofort/s2s-integration" />
            }, {
                path : 'payments/payment-methods/sofort/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/sofort/custom-integration" />
            }, {
                path : 'payments/payment-methods/poli',
                element : <DocsWrapper name="payments/payment-methods/poli" />
            }, {
                path : 'payments/payment-methods/poli/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/poli/s2s-integration" />
            }, {
                path : 'payments/payment-methods/poli/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/poli/custom-integration" />
            }, {
                path : 'payments/payment-methods/pay-later',
                element : <DocsWrapper name="payments/payment-methods/pay-later" />
            }, {
                path : 'payments/payment-methods/pay-later/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/pay-later/custom-integration" />
            }, {
                path : 'payments/payment-methods/netbanking',
                element : <DocsWrapper name="payments/payment-methods/netbanking" />
            }, {
                path : 'payments/payment-methods/netbanking/corporate',
                element : <DocsWrapper name="payments/payment-methods/netbanking/corporate" />
            }, {
                path : 'payments/payment-methods/moto',
                element : <DocsWrapper name="payments/payment-methods/moto" />
            }, {
                path : 'payments/payment-methods/moto/batch',
                element : <DocsWrapper name="payments/payment-methods/moto/batch" />
            }, {
                path : 'payments/payment-methods/local-currency-bank-transfer',
                element : <DocsWrapper name="payments/payment-methods/local-currency-bank-transfer" />
            }, {
                path : 'payments/payment-methods/instant-international-bank-transfer',
                element : <DocsWrapper name="payments/payment-methods/instant-international-bank-transfer" />
            }, {
                path : 'payments/payment-methods/giropay',
                element : <DocsWrapper name="payments/payment-methods/giropay" />
            }, {
                path : 'payments/payment-methods/giropay/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/giropay/s2s-integration" />
            }, {
                path : 'payments/payment-methods/giropay/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/giropay/custom-integration" />
            }, {
                path : 'payments/payment-methods/fpx',
                element : <DocsWrapper name="payments/payment-methods/fpx" />
            }, {
                path : 'payments/payment-methods/emi',
                element : <DocsWrapper name="payments/payment-methods/emi" />
            }, {
                path : 'payments/payment-methods/emi/no-cost-emi',
                element : <DocsWrapper name="payments/payment-methods/emi/no-cost-emi" />
            }, {
                path : 'payments/payment-methods/emi/no-cost-emi/bajaj-finserv',
                element : <DocsWrapper name="payments/payment-methods/emi/no-cost-emi/bajaj-finserv" />
            }, {
                path : 'payments/payment-methods/emi/no-cost-emi/bajaj-finserv/standard-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/no-cost-emi/bajaj-finserv/standard-integration" />
            }, {
                path : 'payments/payment-methods/emi/no-cost-emi/bajaj-finserv/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/no-cost-emi/bajaj-finserv/s2s-integration" />
            }, {
                path : 'payments/payment-methods/emi/no-cost-emi/bajaj-finserv/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/no-cost-emi/bajaj-finserv/custom-integration" />
            }, {
                path : 'payments/payment-methods/emi/faqs',
                element : <DocsWrapper name="payments/payment-methods/emi/faqs" />
            }, {
                path : 'payments/payment-methods/emi/debit-card-emi',
                element : <DocsWrapper name="payments/payment-methods/emi/debit-card-emi" />
            }, {
                path : 'payments/payment-methods/emi/credit-card-emi',
                element : <DocsWrapper name="payments/payment-methods/emi/credit-card-emi" />
            }, {
                path : 'payments/payment-methods/emi/credit-card-emi/onecard',
                element : <DocsWrapper name="payments/payment-methods/emi/credit-card-emi/onecard" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/zestmoney',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/zestmoney" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/s2s-integration" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/custom-integration" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/axio',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/axio" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/axio/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/axio/s2s-integration" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/axio/faqs',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/axio/faqs" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/axio/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/axio/custom-integration" />
            }, {
                path : 'payments/payment-methods/emi/cardless-emi/axio/checkout-configuration',
                element : <DocsWrapper name="payments/payment-methods/emi/cardless-emi/axio/checkout-configuration" />
            }, {
                path : 'payments/payment-methods/ecod',
                element : <DocsWrapper name="payments/payment-methods/ecod" />
            }, {
                path : 'payments/payment-methods/ecod/integration',
                element : <DocsWrapper name="payments/payment-methods/ecod/integration" />
            }, {
                path : 'payments/payment-methods/duitnow-rpp',
                element : <DocsWrapper name="payments/payment-methods/duitnow-rpp" />
            }, {
                path : 'payments/payment-methods/cards',
                element : <DocsWrapper name="payments/payment-methods/cards" />
            }, {
                path : 'payments/payment-methods/cards/visa-safe-click',
                element : <DocsWrapper name="payments/payment-methods/cards/visa-safe-click" />
            }, {
                path : 'payments/payment-methods/cards/token-public',
                element : <DocsWrapper name="payments/payment-methods/cards/token-public" />
            }, {
                path : 'payments/payment-methods/cards/token-private',
                element : <DocsWrapper name="payments/payment-methods/cards/token-private" />
            }, {
                path : 'payments/payment-methods/cards/token-hq',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/webhooks',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/webhooks" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/token-lifecycle',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/token-lifecycle" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/iin-validation',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/iin-validation" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/apis',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/apis" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/additional-information',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor-with-network-tokens/additional-information" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor/webhooks',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor/webhooks" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor/token-lifecycle',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor/token-lifecycle" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor/iin-validation',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor/iin-validation" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor/cvv-less-flow',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor/cvv-less-flow" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor/apis',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor/apis" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/razorpay-requestor/additional-information',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/razorpay-requestor/additional-information" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/webhooks',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/webhooks" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/token-lifecycle',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/token-lifecycle" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/iin-validation',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/iin-validation" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/cvv-less-flow',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/cvv-less-flow" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/apis',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/apis" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/apis/payment',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/apis/payment" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/additional-information',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor-with-network-tokens/additional-information" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor/webhooks',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor/webhooks" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor/token-lifecycle',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor/token-lifecycle" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor/iin-validation',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor/iin-validation" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor/apis',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor/apis" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/merchant-requestor/additional-information',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/merchant-requestor/additional-information" />
            }, {
                path : 'payments/payment-methods/cards/token-hq/dual-token',
                element : <DocsWrapper name="payments/payment-methods/cards/token-hq/dual-token" />
            }, {
                path : 'payments/payment-methods/cards/google-pay',
                element : <DocsWrapper name="payments/payment-methods/cards/google-pay" />
            }, {
                path : 'payments/payment-methods/cards/google-pay/standard-integration',
                element : <DocsWrapper name="payments/payment-methods/cards/google-pay/standard-integration" />
            }, {
                path : 'payments/payment-methods/cards/google-pay/s2s-integration/redirect',
                element : <DocsWrapper name="payments/payment-methods/cards/google-pay/s2s-integration/redirect" />
            }, {
                path : 'payments/payment-methods/cards/google-pay/s2s-integration/json',
                element : <DocsWrapper name="payments/payment-methods/cards/google-pay/s2s-integration/json" />
            }, {
                path : 'payments/payment-methods/cards/google-pay/faqs',
                element : <DocsWrapper name="payments/payment-methods/cards/google-pay/faqs" />
            }, {
                path : 'payments/payment-methods/cards/google-pay/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/cards/google-pay/custom-integration" />
            }, {
                path : 'payments/payment-methods/cards/features/saved-cards',
                element : <DocsWrapper name="payments/payment-methods/cards/features/saved-cards" />
            }, {
                path : 'payments/payment-methods/cards/features/manage',
                element : <DocsWrapper name="payments/payment-methods/cards/features/manage" />
            }, {
                path : 'payments/payment-methods/cards/features/cvv-less-flow',
                element : <DocsWrapper name="payments/payment-methods/cards/features/cvv-less-flow" />
            }, {
                path : 'payments/payment-methods/cards/features/3ds2.0',
                element : <DocsWrapper name="payments/payment-methods/cards/features/3ds2.0" />
            }, {
                path : 'payments/payment-methods/cards/error-parameters',
                element : <DocsWrapper name="payments/payment-methods/cards/error-parameters" />
            }, {
                path : 'payments/payment-methods/cards/dynamic-currency-conversion',
                element : <DocsWrapper name="payments/payment-methods/cards/dynamic-currency-conversion" />
            }, {
                path : 'payments/payment-methods/cards/dynamic-currency-conversion/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/cards/dynamic-currency-conversion/s2s-integration" />
            }, {
                path : 'payments/payment-methods/cards/dynamic-currency-conversion/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/cards/dynamic-currency-conversion/custom-integration" />
            }, {
                path : 'payments/payment-methods/cards/corporate-cards',
                element : <DocsWrapper name="payments/payment-methods/cards/corporate-cards" />
            }, {
                path : 'payments/payment-methods/cards/authentication/native-otp',
                element : <DocsWrapper name="payments/payment-methods/cards/authentication/native-otp" />
            }, {
                path : 'payments/payment-methods/cards/authentication/native-otp/custom-integration/android',
                element : <DocsWrapper name="payments/payment-methods/cards/authentication/native-otp/custom-integration/android" />
            }, {
                path : 'payments/payment-methods/bharatqr',
                element : <DocsWrapper name="payments/payment-methods/bharatqr" />
            }, {
                path : 'payments/payment-methods/bharatqr/testing',
                element : <DocsWrapper name="payments/payment-methods/bharatqr/testing" />
            }, {
                path : 'payments/payment-methods/bharatqr/status',
                element : <DocsWrapper name="payments/payment-methods/bharatqr/status" />
            }, {
                path : 'payments/payment-methods/bharatqr/notification',
                element : <DocsWrapper name="payments/payment-methods/bharatqr/notification" />
            }, {
                path : 'payments/payment-methods/bharatqr/faqs',
                element : <DocsWrapper name="payments/payment-methods/bharatqr/faqs" />
            }, {
                path : 'payments/payment-methods/bharatqr/api',
                element : <DocsWrapper name="payments/payment-methods/bharatqr/api" />
            }, {
                path : 'payments/payment-methods/bharatqr/additional-operations',
                element : <DocsWrapper name="payments/payment-methods/bharatqr/additional-operations" />
            }, {
                path : 'payments/payment-methods/bank-transfer',
                element : <DocsWrapper name="payments/payment-methods/bank-transfer" />
            }, {
                path : 'payments/payment-methods/bank-transfer/hosted-integration',
                element : <DocsWrapper name="payments/payment-methods/bank-transfer/hosted-integration" />
            }, {
                path : 'payments/payment-methods/bank-transfer/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/bank-transfer/custom-integration" />
            }, {
                path : 'payments/payment-methods/apps/reward-points',
                element : <DocsWrapper name="payments/payment-methods/apps/reward-points" />
            }, {
                path : 'payments/payment-methods/apps/reward-points/s2s-integration/redirect',
                element : <DocsWrapper name="payments/payment-methods/apps/reward-points/s2s-integration/redirect" />
            }, {
                path : 'payments/payment-methods/apps/reward-points/s2s-integration/json',
                element : <DocsWrapper name="payments/payment-methods/apps/reward-points/s2s-integration/json" />
            }, {
                path : 'payments/payment-methods/apps/reward-points/faqs',
                element : <DocsWrapper name="payments/payment-methods/apps/reward-points/faqs" />
            }, {
                path : 'payments/payment-methods/apps/reward-points/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/apps/reward-points/custom-integration" />
            }, {
                path : 'payments/payment-methods/apps/cred',
                element : <DocsWrapper name="payments/payment-methods/apps/cred" />
            }, {
                path : 'payments/payment-methods/apps/cred/standard-integration',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/standard-integration" />
            }, {
                path : 'payments/payment-methods/apps/cred/standard-integration/checkout-configuration',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/standard-integration/checkout-configuration" />
            }, {
                path : 'payments/payment-methods/apps/cred/s2s-integration',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/s2s-integration" />
            }, {
                path : 'payments/payment-methods/apps/cred/refunds',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/refunds" />
            }, {
                path : 'payments/payment-methods/apps/cred/pricing',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/pricing" />
            }, {
                path : 'payments/payment-methods/apps/cred/custom-integration',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/custom-integration" />
            }, {
                path : 'payments/payment-methods/apps/cred/custom-integration/check-cred-eligibility',
                element : <DocsWrapper name="payments/payment-methods/apps/cred/custom-integration/check-cred-eligibility" />
            }, {
                path : 'payments/payment-links',
                element : <DocsWrapper name="payments/payment-links" />
            }, {
                path : 'payments/payment-links/whatsapp-bot',
                element : <DocsWrapper name="payments/payment-links/whatsapp-bot" />
            }, {
                path : 'payments/payment-links/view-reports',
                element : <DocsWrapper name="payments/payment-links/view-reports" />
            }, {
                path : 'payments/payment-links/upi',
                element : <DocsWrapper name="payments/payment-links/upi" />
            }, {
                path : 'payments/payment-links/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/payment-links/subscribe-to-webhooks" />
            }, {
                path : 'payments/payment-links/states',
                element : <DocsWrapper name="payments/payment-links/states" />
            }, {
                path : 'payments/payment-links/standard',
                element : <DocsWrapper name="payments/payment-links/standard" />
            }, {
                path : 'payments/payment-links/search',
                element : <DocsWrapper name="payments/payment-links/search" />
            }, {
                path : 'payments/payment-links/resend',
                element : <DocsWrapper name="payments/payment-links/resend" />
            }, {
                path : 'payments/payment-links/reminders',
                element : <DocsWrapper name="payments/payment-links/reminders" />
            }, {
                path : 'payments/payment-links/partial-payments',
                element : <DocsWrapper name="payments/payment-links/partial-payments" />
            }, {
                path : 'payments/payment-links/offers',
                element : <DocsWrapper name="payments/payment-links/offers" />
            }, {
                path : 'payments/payment-links/manage-team',
                element : <DocsWrapper name="payments/payment-links/manage-team" />
            }, {
                path : 'payments/payment-links/legacy',
                element : <DocsWrapper name="payments/payment-links/legacy" />
            }, {
                path : 'payments/payment-links/how-it-works',
                element : <DocsWrapper name="payments/payment-links/how-it-works" />
            }, {
                path : 'payments/payment-links/glossary',
                element : <DocsWrapper name="payments/payment-links/glossary" />
            }, {
                path : 'payments/payment-links/faqs',
                element : <DocsWrapper name="payments/payment-links/faqs" />
            }, {
                path : 'payments/payment-links/edit',
                element : <DocsWrapper name="payments/payment-links/edit" />
            }, {
                path : 'payments/payment-links/duplicate',
                element : <DocsWrapper name="payments/payment-links/duplicate" />
            }, {
                path : 'payments/payment-links/create',
                element : <DocsWrapper name="payments/payment-links/create" />
            }, {
                path : 'payments/payment-links/cancel',
                element : <DocsWrapper name="payments/payment-links/cancel" />
            }, {
                path : 'payments/payment-links/batch',
                element : <DocsWrapper name="payments/payment-links/batch" />
            }, {
                path : 'payments/payment-links/bank-transfer-faqs',
                element : <DocsWrapper name="payments/payment-links/bank-transfer-faqs" />
            }, {
                path : 'payments/payment-links/bank-transfer',
                element : <DocsWrapper name="payments/payment-links/bank-transfer" />
            }, {
                path : 'payments/payment-links/apis',
                element : <DocsWrapper name="payments/payment-links/apis" />
            }, {
                path : 'payments/payment-links/announcements',
                element : <DocsWrapper name="payments/payment-links/announcements" />
            }, {
                path : 'payments/payment-links/announcements/retry-link',
                element : <DocsWrapper name="payments/payment-links/announcements/retry-link" />
            }, {
                path : 'payments/payment-gateway',
                element : <DocsWrapper name="payments/payment-gateway" />
            }, {
                path : 'payments/payment-gateway/zoho',
                element : <DocsWrapper name="payments/payment-gateway/zoho" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/webview',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/webview" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/webview/upi-intent-ios',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/webview/upi-intent-ios" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/webview/upi-intent-android',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/webview/upi-intent-android" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/test-integration" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/local-lang',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/local-lang" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-restrict-payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-restrict-payment-methods" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-restrict-payment-methods/sample-code',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-restrict-payment-methods/sample-code" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-payment-methods" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-payment-methods/understand-configuration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-payment-methods/understand-configuration" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-payment-methods/supported-methods',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-payment-methods/supported-methods" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-payment-methods/sample-code',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-payment-methods/sample-code" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/configure-payment-methods/display-configuration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/configure-payment-methods/display-configuration" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/build-integration" />
            }, {
                path : 'payments/payment-gateway/web-integration/standard/best-practices',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/standard/best-practices" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted/test-integration" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted/payment-methods" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted/checkout-options',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted/checkout-options" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted/build-integration" />
            }, {
                path : 'payments/payment-gateway/web-integration/hosted/best-practices',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/hosted/best-practices" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/test-integration" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/phonepe-switch',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/phonepe-switch" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/payment-methods" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/payment-methods/upi-intent-mweb',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/payment-methods/upi-intent-mweb" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/input-restriction',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/input-restriction" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/validate-vpa',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/validate-vpa" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/saved-vpa',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/saved-vpa" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/saved-cards-old',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/saved-cards-old" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/saved-cards',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/saved-cards" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/saved-cards/scenario-3',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/saved-cards/scenario-3" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/saved-cards/scenario-2',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/saved-cards/scenario-2" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/saved-cards/scenario-1',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/saved-cards/scenario-1" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/pop-up',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/pop-up" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/native-otp',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/native-otp" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/emi-plans',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/emi-plans" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/cvv-less-flow',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/cvv-less-flow" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/check-cred-eligibility',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/check-cred-eligibility" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/features/async-payments',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/features/async-payments" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/build-integration" />
            }, {
                path : 'payments/payment-gateway/web-integration/custom/best-practices',
                element : <DocsWrapper name="payments/payment-gateway/web-integration/custom/best-practices" />
            }, {
                path : 'payments/payment-gateway/s2s-integration',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/subscriptions',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/subscriptions" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/redirect',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/redirect" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/redirect/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/redirect/test-integration" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/redirect/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/redirect/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/redirect/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/redirect/build-integration" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/redirect/build-integration/cards',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/redirect/build-integration/cards" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/redirect/build-integration/cards/migrate-3ds2.0',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/redirect/build-integration/cards/migrate-3ds2.0" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi-tpv/tokens',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi-tpv/tokens" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi-tpv/subsequent-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi-tpv/subsequent-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi-tpv/authorization-transaction',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi-tpv/authorization-transaction" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi-intent/tokens',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi-intent/tokens" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi-intent/subsequent-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi-intent/subsequent-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi-intent/authorization-transaction',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi-intent/authorization-transaction" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi/tokens',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi/tokens" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi/subsequent-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi/subsequent-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/upi/authorization-transaction',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/upi/authorization-transaction" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/postman-collection',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/postman-collection" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/tokens',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/tokens" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/subsequent-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/subsequent-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/auto-debit',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/auto-debit" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/authorization-transaction',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/paper-nach/authorization-transaction" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/emandate/tokens',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/emandate/tokens" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/emandate/subsequent-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/emandate/subsequent-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/emandate/auto-debit',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/emandate/auto-debit" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/emandate/authorization-transaction',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/emandate/authorization-transaction" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/cards/tokens',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/cards/tokens" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/cards/subsequent-payments',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/cards/subsequent-payments" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/recurring-payments/cards/authorization-transaction',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/recurring-payments/cards/authorization-transaction" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/upi',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/upi" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/upi/saved-vpa',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/upi/saved-vpa" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/upi/saved-vpa/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/upi/saved-vpa/build-integration" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/upi/intent',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/upi/intent" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/upi/collect',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/upi/collect" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/paypal',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/paypal" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/methods-api',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/methods-api" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/emi/one-card',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/emi/one-card" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/emi/hsbc',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/emi/hsbc" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/cvv-less-flow',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/cvv-less-flow" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/cards/authentication-type/native-otp',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/cards/authentication-type/native-otp" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/cards/3ds2.0',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/cards/3ds2.0" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/payment-methods/apps/cred',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/payment-methods/apps/cred" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2/test-integration" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2/build-integration/upi',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2/build-integration/upi" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2/build-integration/netbanking',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2/build-integration/netbanking" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2/build-integration/cards',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2/build-integration/cards" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v2/build-integration/cards/migrate-3ds2.0',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v2/build-integration/cards/migrate-3ds2.0" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v1',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v1" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v1/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v1/test-integration" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v1/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v1/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v1/build-integration/upi',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v1/build-integration/upi" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v1/build-integration/cards',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v1/build-integration/cards" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/json/v1/build-integration/cards/migrate-3ds2.0',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/json/v1/build-integration/cards/migrate-3ds2.0" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/features/address-verification-system',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/features/address-verification-system" />
            }, {
                path : 'payments/payment-gateway/s2s-integration/best-practices',
                element : <DocsWrapper name="payments/payment-gateway/s2s-integration/best-practices" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/standard',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/standard" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/standard/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/standard/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/standard/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/standard/test-integration" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/standard/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/standard/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/standard/build-integration-ios',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/standard/build-integration-ios" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/standard/build-integration-android',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/standard/build-integration-android" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/custom',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/custom" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/custom/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/custom/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/custom/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/custom/test-integration" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/custom/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/custom/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/custom/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/custom/build-integration" />
            }, {
                path : 'payments/payment-gateway/react-native-integration/custom/additional-features',
                element : <DocsWrapper name="payments/payment-gateway/react-native-integration/custom/additional-features" />
            }, {
                path : 'payments/payment-gateway/rainy-day',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day" />
            }, {
                path : 'payments/payment-gateway/rainy-day/errors',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/errors" />
            }, {
                path : 'payments/payment-gateway/rainy-day/errors/payment-error-parameters',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/errors/payment-error-parameters" />
            }, {
                path : 'payments/payment-gateway/rainy-day/errors/error-reasons',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/errors/error-reasons" />
            }, {
                path : 'payments/payment-gateway/rainy-day/errors/error-codes',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/errors/error-codes" />
            }, {
                path : 'payments/payment-gateway/rainy-day/downtime',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/downtime" />
            }, {
                path : 'payments/payment-gateway/rainy-day/capture-settings',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/capture-settings" />
            }, {
                path : 'payments/payment-gateway/rainy-day/capture-settings/api',
                element : <DocsWrapper name="payments/payment-gateway/rainy-day/capture-settings/api" />
            }, {
                path : 'payments/payment-gateway/quick-integration',
                element : <DocsWrapper name="payments/payment-gateway/quick-integration" />
            }, {
                path : 'payments/payment-gateway/quick-integration/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/quick-integration/test-integration" />
            }, {
                path : 'payments/payment-gateway/quick-integration/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/quick-integration/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/quick-integration/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/quick-integration/build-integration" />
            }, {
                path : 'payments/payment-gateway/ios-integration/webapp',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/webapp" />
            }, {
                path : 'payments/payment-gateway/ios-integration/standard',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/standard" />
            }, {
                path : 'payments/payment-gateway/ios-integration/standard/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/standard/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ios-integration/standard/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/standard/test-integration" />
            }, {
                path : 'payments/payment-gateway/ios-integration/standard/payment-methods/turbo-upi',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/standard/payment-methods/turbo-upi" />
            }, {
                path : 'payments/payment-gateway/ios-integration/standard/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/standard/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ios-integration/standard/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/standard/build-integration" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/test-native-otp',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/test-native-otp" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/test-integration" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/payment-methods" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/payment-methods/turbo-upi',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/payment-methods/turbo-upi" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/payment-methods/turbo-upi/integrate-ui',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/payment-methods/turbo-upi/integrate-ui" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/payment-methods/turbo-upi/integrate-noui',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/payment-methods/turbo-upi/integrate-noui" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/native-otp',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/native-otp" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/configurations',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/configurations" />
            }, {
                path : 'payments/payment-gateway/ios-integration/custom/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ios-integration/custom/build-integration" />
            }, {
                path : 'payments/payment-gateway/how-it-works',
                element : <DocsWrapper name="payments/payment-gateway/how-it-works" />
            }, {
                path : 'payments/payment-gateway/get-started',
                element : <DocsWrapper name="payments/payment-gateway/get-started" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/standard',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/standard" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/standard/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/standard/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/standard/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/standard/test-integration" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/standard/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/standard/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/standard/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/standard/build-integration" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/standard/api',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/standard/api" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom/test-integration" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom/payment-methods" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom/methods',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom/methods" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/flutter-integration/custom/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/flutter-integration/custom/build-integration" />
            }, {
                path : 'payments/payment-gateway/features',
                element : <DocsWrapper name="payments/payment-gateway/features" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wordpress',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wordpress" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wordpress/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wordpress/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wordpress/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wordpress/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wordpress/faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wordpress/faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wordpress/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wordpress/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/woocommerce',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/woocommerce" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/woocommerce/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/woocommerce/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/woocommerce/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/woocommerce/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/woocommerce/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/woocommerce/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/woocommerce/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/woocommerce/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wix',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wix" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wix/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wix/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wix/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wix/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wix/faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wix/faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/wix/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/wix/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/whmcs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/whmcs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/whmcs/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/whmcs/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/whmcs/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/whmcs/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/whmcs/faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/whmcs/faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/whmcs/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/whmcs/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/reconcile-payments',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/reconcile-payments" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/migration-steps',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/migration-steps" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/international-payments',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/international-payments" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/go-live',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/go-live" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/features',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/features" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/features/initiate-refunds',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/features/initiate-refunds" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/features/display-offers',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/features/display-offers" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/shopify/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/shopify/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/prestashop',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/prestashop" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/prestashop/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/prestashop/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/prestashop/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/prestashop/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/prestashop/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/prestashop/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/prestashop/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/prestashop/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/open-cart',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/open-cart" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/open-cart/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/open-cart/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/open-cart/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/open-cart/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/open-cart/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/open-cart/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/open-cart/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/open-cart/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/magento',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/magento" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/magento/troubleshooting',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/magento/troubleshooting" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/magento/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/magento/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/magento/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/magento/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/magento/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/magento/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/magento/2.x',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/magento/2.x" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/gravity-forms',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/gravity-forms" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/gravity-forms/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/gravity-forms/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/gravity-forms/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/gravity-forms/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/gravity-forms/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/gravity-forms/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/gravity-forms/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/gravity-forms/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/easy-digital-downloads',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/easy-digital-downloads" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/easy-digital-downloads/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/easy-digital-downloads/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/easy-digital-downloads/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/easy-digital-downloads/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/easy-digital-downloads/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/easy-digital-downloads/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/drupal-commerce',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/drupal-commerce" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/drupal-commerce/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/drupal-commerce/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/drupal-commerce/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/drupal-commerce/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/drupal-commerce/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/drupal-commerce/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/drupal-commerce/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/drupal-commerce/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/cs-cart',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/cs-cart" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/cs-cart/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/cs-cart/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/cs-cart/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/cs-cart/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/cs-cart/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/cs-cart/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/cs-cart/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/cs-cart/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/build-your-own',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/build-your-own" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/build-your-own/use-case',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/build-your-own/use-case" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/build-your-own/faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/build-your-own/faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/bigcommerce',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/bigcommerce" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/bigcommerce/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/bigcommerce/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/bigcommerce/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/bigcommerce/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/bigcommerce/faqs',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/bigcommerce/faqs" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/bigcommerce/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/bigcommerce/build-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/arastta',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/arastta" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/arastta/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/arastta/test-integration" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/arastta/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/arastta/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/ecommerce-plugins/arastta/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/ecommerce-plugins/arastta/build-integration" />
            }, {
                path : 'payments/payment-gateway/cordova-integration',
                element : <DocsWrapper name="payments/payment-gateway/cordova-integration" />
            }, {
                path : 'payments/payment-gateway/cordova-integration/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/cordova-integration/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/cordova-integration/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/cordova-integration/test-integration" />
            }, {
                path : 'payments/payment-gateway/cordova-integration/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/cordova-integration/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/cordova-integration/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/cordova-integration/build-integration" />
            }, {
                path : 'payments/payment-gateway/capacitor-integration',
                element : <DocsWrapper name="payments/payment-gateway/capacitor-integration" />
            }, {
                path : 'payments/payment-gateway/capacitor-integration/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/capacitor-integration/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/capacitor-integration/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/capacitor-integration/test-integration" />
            }, {
                path : 'payments/payment-gateway/capacitor-integration/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/capacitor-integration/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/capacitor-integration/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/capacitor-integration/build-integration" />
            }, {
                path : 'payments/payment-gateway/callback-url',
                element : <DocsWrapper name="payments/payment-gateway/callback-url" />
            }, {
                path : 'payments/payment-gateway/balances',
                element : <DocsWrapper name="payments/payment-gateway/balances" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/test-integration" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/payment-methods" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/payment-methods/turbo-upi',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/payment-methods/turbo-upi" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/override-minimum-sdk',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/override-minimum-sdk" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/google-data-safety',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/google-data-safety" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/customisation',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/customisation" />
            }, {
                path : 'payments/payment-gateway/android-integration/standard/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/standard/build-integration" />
            }, {
                path : 'payments/payment-gateway/android-integration/magic',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/magic" />
            }, {
                path : 'payments/payment-gateway/android-integration/magic/custom-layout',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/magic/custom-layout" />
            }, {
                path : 'payments/payment-gateway/android-integration/magic/add-sdk',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/magic/add-sdk" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/upi-intent-flow',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/upi-intent-flow" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/test-native-otp-integration',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/test-native-otp-integration" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/test-integration',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/test-integration" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/payment-methods',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/payment-methods" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/payment-methods/turbo-upi',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/payment-methods/turbo-upi" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/payment-methods/turbo-upi/integration-ui',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/payment-methods/turbo-upi/integration-ui" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/payment-methods/turbo-upi/integration-noui',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/payment-methods/turbo-upi/integration-noui" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/override-minimum-sdk',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/override-minimum-sdk" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/native-otp-integration',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/native-otp-integration" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/google-data-safety',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/google-data-safety" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/go-live-checklist',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/go-live-checklist" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/build-integration',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/build-integration" />
            }, {
                path : 'payments/payment-gateway/android-integration/custom/additional-features',
                element : <DocsWrapper name="payments/payment-gateway/android-integration/custom/additional-features" />
            }, {
                path : 'payments/payment-gateway/affordability',
                element : <DocsWrapper name="payments/payment-gateway/affordability" />
            }, {
                path : 'payments/payment-gateway/affordability/widget',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/woocommerce',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/woocommerce" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/woocommerce/customise',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/woocommerce/customise" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/troubleshooting-faqs',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/troubleshooting-faqs" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/shopify',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/shopify" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/shopify/customise',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/shopify/customise" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/native-web',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/native-web" />
            }, {
                path : 'payments/payment-gateway/affordability/widget/native-web/customise',
                element : <DocsWrapper name="payments/payment-gateway/affordability/widget/native-web/customise" />
            }, {
                path : 'payments/payment-gateway/affordability/payment-methods/standard-integration',
                element : <DocsWrapper name="payments/payment-gateway/affordability/payment-methods/standard-integration" />
            }, {
                path : 'payments/payment-gateway/affordability/payment-methods/custom-integration',
                element : <DocsWrapper name="payments/payment-gateway/affordability/payment-methods/custom-integration" />
            }, {
                path : 'payments/payment-gateway/affordability/offers',
                element : <DocsWrapper name="payments/payment-gateway/affordability/offers" />
            }, {
                path : 'payments/payment-gateway/affordability/offers/tutorial',
                element : <DocsWrapper name="payments/payment-gateway/affordability/offers/tutorial" />
            }, {
                path : 'payments/payment-gateway/affordability/offers/standard-integration',
                element : <DocsWrapper name="payments/payment-gateway/affordability/offers/standard-integration" />
            }, {
                path : 'payments/payment-gateway/affordability/offers/s2s-integration',
                element : <DocsWrapper name="payments/payment-gateway/affordability/offers/s2s-integration" />
            }, {
                path : 'payments/payment-gateway/affordability/offers/custom-integration',
                element : <DocsWrapper name="payments/payment-gateway/affordability/offers/custom-integration" />
            }, {
                path : 'payments/payment-gateway/affordability/offers/create',
                element : <DocsWrapper name="payments/payment-gateway/affordability/offers/create" />
            }, {
                path : 'payments/payment-gateway/affordability/no-cost-emi',
                element : <DocsWrapper name="payments/payment-gateway/affordability/no-cost-emi" />
            }, {
                path : 'payments/payment-gateway/affordability/no-cost-emi/tutorial',
                element : <DocsWrapper name="payments/payment-gateway/affordability/no-cost-emi/tutorial" />
            }, {
                path : 'payments/payment-gateway/affordability/no-cost-emi/standard-integration',
                element : <DocsWrapper name="payments/payment-gateway/affordability/no-cost-emi/standard-integration" />
            }, {
                path : 'payments/payment-gateway/affordability/no-cost-emi/create',
                element : <DocsWrapper name="payments/payment-gateway/affordability/no-cost-emi/create" />
            }, {
                path : 'payments/payment-gateway/affordability/glossary',
                element : <DocsWrapper name="payments/payment-gateway/affordability/glossary" />
            }, {
                path : 'payments/payment-gateway/affordability/faqs',
                element : <DocsWrapper name="payments/payment-gateway/affordability/faqs" />
            }, {
                path : 'payments/payment-gateway/affordability/eligibility-check',
                element : <DocsWrapper name="payments/payment-gateway/affordability/eligibility-check" />
            }, {
                path : 'payments/payment-gateway/affordability/eligibility-check/standard',
                element : <DocsWrapper name="payments/payment-gateway/affordability/eligibility-check/standard" />
            }, {
                path : 'payments/payment-gateway/affordability/eligibility-check/configurations',
                element : <DocsWrapper name="payments/payment-gateway/affordability/eligibility-check/configurations" />
            }, {
                path : 'payments/payment-button',
                element : <DocsWrapper name="payments/payment-button" />
            }, {
                path : 'payments/payment-button/view-reports',
                element : <DocsWrapper name="payments/payment-button/view-reports" />
            }, {
                path : 'payments/payment-button/supported-platforms',
                element : <DocsWrapper name="payments/payment-button/supported-platforms" />
            }, {
                path : 'payments/payment-button/supported-platforms/wordpress',
                element : <DocsWrapper name="payments/payment-button/supported-platforms/wordpress" />
            }, {
                path : 'payments/payment-button/supported-platforms/wordpress/visual-composer',
                element : <DocsWrapper name="payments/payment-button/supported-platforms/wordpress/visual-composer" />
            }, {
                path : 'payments/payment-button/supported-platforms/wordpress/site-origin',
                element : <DocsWrapper name="payments/payment-button/supported-platforms/wordpress/site-origin" />
            }, {
                path : 'payments/payment-button/supported-platforms/wordpress/elementor',
                element : <DocsWrapper name="payments/payment-button/supported-platforms/wordpress/elementor" />
            }, {
                path : 'payments/payment-button/supported-platforms/wordpress/create-website',
                element : <DocsWrapper name="payments/payment-button/supported-platforms/wordpress/create-website" />
            }, {
                path : 'payments/payment-button/subscription-buttons',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons" />
            }, {
                path : 'payments/payment-button/subscription-buttons/supported-platforms',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/supported-platforms" />
            }, {
                path : 'payments/payment-button/subscription-buttons/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/subscribe-to-webhooks" />
            }, {
                path : 'payments/payment-button/subscription-buttons/receipt',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/receipt" />
            }, {
                path : 'payments/payment-button/subscription-buttons/manage',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/manage" />
            }, {
                path : 'payments/payment-button/subscription-buttons/faqs',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/faqs" />
            }, {
                path : 'payments/payment-button/subscription-buttons/embed',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/embed" />
            }, {
                path : 'payments/payment-button/subscription-buttons/download-reports',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/download-reports" />
            }, {
                path : 'payments/payment-button/subscription-buttons/advanced-options/add-fb-pixel',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/advanced-options/add-fb-pixel" />
            }, {
                path : 'payments/payment-button/subscription-buttons/80g-receipt',
                element : <DocsWrapper name="payments/payment-button/subscription-buttons/80g-receipt" />
            }, {
                path : 'payments/payment-button/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/payment-button/subscribe-to-webhooks" />
            }, {
                path : 'payments/payment-button/states',
                element : <DocsWrapper name="payments/payment-button/states" />
            }, {
                path : 'payments/payment-button/search',
                element : <DocsWrapper name="payments/payment-button/search" />
            }, {
                path : 'payments/payment-button/receipt',
                element : <DocsWrapper name="payments/payment-button/receipt" />
            }, {
                path : 'payments/payment-button/quick-pay',
                element : <DocsWrapper name="payments/payment-button/quick-pay" />
            }, {
                path : 'payments/payment-button/manage',
                element : <DocsWrapper name="payments/payment-button/manage" />
            }, {
                path : 'payments/payment-button/manage/prefill-amount-fields',
                element : <DocsWrapper name="payments/payment-button/manage/prefill-amount-fields" />
            }, {
                path : 'payments/payment-button/how-it-works',
                element : <DocsWrapper name="payments/payment-button/how-it-works" />
            }, {
                path : 'payments/payment-button/glossary',
                element : <DocsWrapper name="payments/payment-button/glossary" />
            }, {
                path : 'payments/payment-button/faqs',
                element : <DocsWrapper name="payments/payment-button/faqs" />
            }, {
                path : 'payments/payment-button/donations',
                element : <DocsWrapper name="payments/payment-button/donations" />
            }, {
                path : 'payments/payment-button/custom',
                element : <DocsWrapper name="payments/payment-button/custom" />
            }, {
                path : 'payments/payment-button/buy-now',
                element : <DocsWrapper name="payments/payment-button/buy-now" />
            }, {
                path : 'payments/payment-button/add-fb-pixel',
                element : <DocsWrapper name="payments/payment-button/add-fb-pixel" />
            }, {
                path : 'payments/payment-button/80g-receipt',
                element : <DocsWrapper name="payments/payment-button/80g-receipt" />
            }, {
                path : 'payments/orders',
                element : <DocsWrapper name="payments/orders" />
            }, {
                path : 'payments/orders/dashboard',
                element : <DocsWrapper name="payments/orders/dashboard" />
            }, {
                path : 'payments/orders/create',
                element : <DocsWrapper name="payments/orders/create" />
            }, {
                path : 'payments/orders/apis',
                element : <DocsWrapper name="payments/orders/apis" />
            }, {
                path : 'payments/optimizer',
                element : <DocsWrapper name="payments/optimizer" />
            }, {
                path : 'payments/optimizer/update-default-rule',
                element : <DocsWrapper name="payments/optimizer/update-default-rule" />
            }, {
                path : 'payments/optimizer/tokenisation',
                element : <DocsWrapper name="payments/optimizer/tokenisation" />
            }, {
                path : 'payments/optimizer/supported-gateways-aggregators',
                element : <DocsWrapper name="payments/optimizer/supported-gateways-aggregators" />
            }, {
                path : 'payments/optimizer/success-rate',
                element : <DocsWrapper name="payments/optimizer/success-rate" />
            }, {
                path : 'payments/optimizer/set-rule-priority',
                element : <DocsWrapper name="payments/optimizer/set-rule-priority" />
            }, {
                path : 'payments/optimizer/roles-and-permissions',
                element : <DocsWrapper name="payments/optimizer/roles-and-permissions" />
            }, {
                path : 'payments/optimizer/reconciliation',
                element : <DocsWrapper name="payments/optimizer/reconciliation" />
            }, {
                path : 'payments/optimizer/pinelabs',
                element : <DocsWrapper name="payments/optimizer/pinelabs" />
            }, {
                path : 'payments/optimizer/payu',
                element : <DocsWrapper name="payments/optimizer/payu" />
            }, {
                path : 'payments/optimizer/paytm-s2s',
                element : <DocsWrapper name="payments/optimizer/paytm-s2s" />
            }, {
                path : 'payments/optimizer/paytm-instant',
                element : <DocsWrapper name="payments/optimizer/paytm-instant" />
            }, {
                path : 'payments/optimizer/manage-rules',
                element : <DocsWrapper name="payments/optimizer/manage-rules" />
            }, {
                path : 'payments/optimizer/ingenico',
                element : <DocsWrapper name="payments/optimizer/ingenico" />
            }, {
                path : 'payments/optimizer/get-started',
                element : <DocsWrapper name="payments/optimizer/get-started" />
            }, {
                path : 'payments/optimizer/faqs',
                element : <DocsWrapper name="payments/optimizer/faqs" />
            }, {
                path : 'payments/optimizer/dynamic-routing',
                element : <DocsWrapper name="payments/optimizer/dynamic-routing" />
            }, {
                path : 'payments/optimizer/create-custom-rule',
                element : <DocsWrapper name="payments/optimizer/create-custom-rule" />
            }, {
                path : 'payments/optimizer/ccavenue',
                element : <DocsWrapper name="payments/optimizer/ccavenue" />
            }, {
                path : 'payments/optimizer/cashfree',
                element : <DocsWrapper name="payments/optimizer/cashfree" />
            }, {
                path : 'payments/optimizer/capture-refund-settings',
                element : <DocsWrapper name="payments/optimizer/capture-refund-settings" />
            }, {
                path : 'payments/optimizer/billdesk',
                element : <DocsWrapper name="payments/optimizer/billdesk" />
            }, {
                path : 'payments/optimizer/banks',
                element : <DocsWrapper name="payments/optimizer/banks" />
            }, {
                path : 'payments/optimizer/add-payment-providers',
                element : <DocsWrapper name="payments/optimizer/add-payment-providers" />
            }, {
                path : 'payments/mobile-app',
                element : <DocsWrapper name="payments/mobile-app" />
            }, {
                path : 'payments/mobile-app/track-manage',
                element : <DocsWrapper name="payments/mobile-app/track-manage" />
            }, {
                path : 'payments/mobile-app/track-manage/view-settlements',
                element : <DocsWrapper name="payments/mobile-app/track-manage/view-settlements" />
            }, {
                path : 'payments/mobile-app/track-manage/issue-refunds',
                element : <DocsWrapper name="payments/mobile-app/track-manage/issue-refunds" />
            }, {
                path : 'payments/mobile-app/settings',
                element : <DocsWrapper name="payments/mobile-app/settings" />
            }, {
                path : 'payments/mobile-app/roles-and-permissions',
                element : <DocsWrapper name="payments/mobile-app/roles-and-permissions" />
            }, {
                path : 'payments/mobile-app/onboarding-videos',
                element : <DocsWrapper name="payments/mobile-app/onboarding-videos" />
            }, {
                path : 'payments/mobile-app/glossary',
                element : <DocsWrapper name="payments/mobile-app/glossary" />
            }, {
                path : 'payments/mobile-app/get-started',
                element : <DocsWrapper name="payments/mobile-app/get-started" />
            }, {
                path : 'payments/mobile-app/faqs',
                element : <DocsWrapper name="payments/mobile-app/faqs" />
            }, {
                path : 'payments/mobile-app/accept-payments/razorpay-me',
                element : <DocsWrapper name="payments/mobile-app/accept-payments/razorpay-me" />
            }, {
                path : 'payments/mobile-app/accept-payments/razorpay-me/manage',
                element : <DocsWrapper name="payments/mobile-app/accept-payments/razorpay-me/manage" />
            }, {
                path : 'payments/mobile-app/accept-payments/payment-pages',
                element : <DocsWrapper name="payments/mobile-app/accept-payments/payment-pages" />
            }, {
                path : 'payments/mobile-app/accept-payments/payment-links',
                element : <DocsWrapper name="payments/mobile-app/accept-payments/payment-links" />
            }, {
                path : 'payments/mobile-app/accept-payments/payment-gateway',
                element : <DocsWrapper name="payments/mobile-app/accept-payments/payment-gateway" />
            }, {
                path : 'payments/merchant-categorisation',
                element : <DocsWrapper name="payments/merchant-categorisation" />
            }, {
                path : 'payments/merchant-categorisation/utilities',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities" />
            }, {
                path : 'payments/merchant-categorisation/utilities/water',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/water" />
            }, {
                path : 'payments/merchant-categorisation/utilities/telecom-service',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/telecom-service" />
            }, {
                path : 'payments/merchant-categorisation/utilities/internet-service',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/internet-service" />
            }, {
                path : 'payments/merchant-categorisation/utilities/gas',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/gas" />
            }, {
                path : 'payments/merchant-categorisation/utilities/electricity',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/electricity" />
            }, {
                path : 'payments/merchant-categorisation/utilities/dth',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/dth" />
            }, {
                path : 'payments/merchant-categorisation/utilities/cable-operator',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/cable-operator" />
            }, {
                path : 'payments/merchant-categorisation/utilities/broadband',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/broadband" />
            }, {
                path : 'payments/merchant-categorisation/utilities/bill-payment-recharge',
                element : <DocsWrapper name="payments/merchant-categorisation/utilities/bill-payment-recharge" />
            }, {
                path : 'payments/merchant-categorisation/transport',
                element : <DocsWrapper name="payments/merchant-categorisation/transport" />
            }, {
                path : 'payments/merchant-categorisation/transport/train-metro-ticketing',
                element : <DocsWrapper name="payments/merchant-categorisation/transport/train-metro-ticketing" />
            }, {
                path : 'payments/merchant-categorisation/transport/cab-auto-hailing',
                element : <DocsWrapper name="payments/merchant-categorisation/transport/cab-auto-hailing" />
            }, {
                path : 'payments/merchant-categorisation/transport/bus-ticketing',
                element : <DocsWrapper name="payments/merchant-categorisation/transport/bus-ticketing" />
            }, {
                path : 'payments/merchant-categorisation/tours-and-travels',
                element : <DocsWrapper name="payments/merchant-categorisation/tours-and-travels" />
            }, {
                path : 'payments/merchant-categorisation/tours-and-travels/tours-travels-agency',
                element : <DocsWrapper name="payments/merchant-categorisation/tours-and-travels/tours-travels-agency" />
            }, {
                path : 'payments/merchant-categorisation/tours-and-travels/ota',
                element : <DocsWrapper name="payments/merchant-categorisation/tours-and-travels/ota" />
            }, {
                path : 'payments/merchant-categorisation/tours-and-travels/lodging-accommodation',
                element : <DocsWrapper name="payments/merchant-categorisation/tours-and-travels/lodging-accommodation" />
            }, {
                path : 'payments/merchant-categorisation/tours-and-travels/aviation',
                element : <DocsWrapper name="payments/merchant-categorisation/tours-and-travels/aviation" />
            }, {
                path : 'payments/merchant-categorisation/social',
                element : <DocsWrapper name="payments/merchant-categorisation/social" />
            }, {
                path : 'payments/merchant-categorisation/social/social-network',
                element : <DocsWrapper name="payments/merchant-categorisation/social/social-network" />
            }, {
                path : 'payments/merchant-categorisation/social/professional-network',
                element : <DocsWrapper name="payments/merchant-categorisation/social/professional-network" />
            }, {
                path : 'payments/merchant-categorisation/social/messaging-communication',
                element : <DocsWrapper name="payments/merchant-categorisation/social/messaging-communication" />
            }, {
                path : 'payments/merchant-categorisation/social/local-neighbourhood-network',
                element : <DocsWrapper name="payments/merchant-categorisation/social/local-neighbourhood-network" />
            }, {
                path : 'payments/merchant-categorisation/social/dating-matrimony-platforms',
                element : <DocsWrapper name="payments/merchant-categorisation/social/dating-matrimony-platforms" />
            }, {
                path : 'payments/merchant-categorisation/services',
                element : <DocsWrapper name="payments/merchant-categorisation/services" />
            }, {
                path : 'payments/merchant-categorisation/services/services-classifieds',
                element : <DocsWrapper name="payments/merchant-categorisation/services/services-classifieds" />
            }, {
                path : 'payments/merchant-categorisation/services/service-centre',
                element : <DocsWrapper name="payments/merchant-categorisation/services/service-centre" />
            }, {
                path : 'payments/merchant-categorisation/services/repair-cleaning-services',
                element : <DocsWrapper name="payments/merchant-categorisation/services/repair-cleaning-services" />
            }, {
                path : 'payments/merchant-categorisation/services/movers-packers',
                element : <DocsWrapper name="payments/merchant-categorisation/services/movers-packers" />
            }, {
                path : 'payments/merchant-categorisation/services/legal-services',
                element : <DocsWrapper name="payments/merchant-categorisation/services/legal-services" />
            }, {
                path : 'payments/merchant-categorisation/services/interior-designing-architect',
                element : <DocsWrapper name="payments/merchant-categorisation/services/interior-designing-architect" />
            }, {
                path : 'payments/merchant-categorisation/services/event-planning-services',
                element : <DocsWrapper name="payments/merchant-categorisation/services/event-planning-services" />
            }, {
                path : 'payments/merchant-categorisation/services/consulting-services',
                element : <DocsWrapper name="payments/merchant-categorisation/services/consulting-services" />
            }, {
                path : 'payments/merchant-categorisation/services/ad-marketing-agencies',
                element : <DocsWrapper name="payments/merchant-categorisation/services/ad-marketing-agencies" />
            }, {
                path : 'payments/merchant-categorisation/others',
                element : <DocsWrapper name="payments/merchant-categorisation/others" />
            }, {
                path : 'payments/merchant-categorisation/not-for-profit',
                element : <DocsWrapper name="payments/merchant-categorisation/not-for-profit" />
            }, {
                path : 'payments/merchant-categorisation/not-for-profit/religious',
                element : <DocsWrapper name="payments/merchant-categorisation/not-for-profit/religious" />
            }, {
                path : 'payments/merchant-categorisation/not-for-profit/personal',
                element : <DocsWrapper name="payments/merchant-categorisation/not-for-profit/personal" />
            }, {
                path : 'payments/merchant-categorisation/not-for-profit/educational',
                element : <DocsWrapper name="payments/merchant-categorisation/not-for-profit/educational" />
            }, {
                path : 'payments/merchant-categorisation/not-for-profit/charity',
                element : <DocsWrapper name="payments/merchant-categorisation/not-for-profit/charity" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment/video-on-demand',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment/video-on-demand" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment/news',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment/news" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment/music-streaming-services',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment/music-streaming-services" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment/multiplexes',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment/multiplexes" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment/events-movie-ticketing',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment/events-movie-ticketing" />
            }, {
                path : 'payments/merchant-categorisation/media-and-entertainment/content-publishing',
                element : <DocsWrapper name="payments/merchant-categorisation/media-and-entertainment/content-publishing" />
            }, {
                path : 'payments/merchant-categorisation/logistics',
                element : <DocsWrapper name="payments/merchant-categorisation/logistics" />
            }, {
                path : 'payments/merchant-categorisation/logistics/public-contract-warehousing',
                element : <DocsWrapper name="payments/merchant-categorisation/logistics/public-contract-warehousing" />
            }, {
                path : 'payments/merchant-categorisation/logistics/freight-consolidation',
                element : <DocsWrapper name="payments/merchant-categorisation/logistics/freight-consolidation" />
            }, {
                path : 'payments/merchant-categorisation/logistics/end-to-end-logistics',
                element : <DocsWrapper name="payments/merchant-categorisation/logistics/end-to-end-logistics" />
            }, {
                path : 'payments/merchant-categorisation/logistics/distribution-management',
                element : <DocsWrapper name="payments/merchant-categorisation/logistics/distribution-management" />
            }, {
                path : 'payments/merchant-categorisation/logistics/courier-shipping',
                element : <DocsWrapper name="payments/merchant-categorisation/logistics/courier-shipping" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software/web-development',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software/web-development" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software/technical-support',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software/technical-support" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software/saas',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software/saas" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software/paas',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software/paas" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software/iaas',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software/iaas" />
            }, {
                path : 'payments/merchant-categorisation/it-and-software/consulting-outsourcing',
                element : <DocsWrapper name="payments/merchant-categorisation/it-and-software/consulting-outsourcing" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate/rwa',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate/rwa" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate/real-estate-classifieds',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate/real-estate-classifieds" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate/home-office-rentals',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate/home-office-rentals" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate/facility-management-company',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate/facility-management-company" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate/developer',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate/developer" />
            }, {
                path : 'payments/merchant-categorisation/housing-real-estate/co-working-spaces',
                element : <DocsWrapper name="payments/merchant-categorisation/housing-real-estate/co-working-spaces" />
            }, {
                path : 'payments/merchant-categorisation/healthcare',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/marketplace',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/marketplace" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/lab',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/lab" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/hospital',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/hospital" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/health-products',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/health-products" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/health-lifestyle-coaching',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/health-lifestyle-coaching" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/gym-fitness',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/gym-fitness" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/dietician',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/dietician" />
            }, {
                path : 'payments/merchant-categorisation/healthcare/clinic',
                element : <DocsWrapper name="payments/merchant-categorisation/healthcare/clinic" />
            }, {
                path : 'payments/merchant-categorisation/government-bodies',
                element : <DocsWrapper name="payments/merchant-categorisation/government-bodies" />
            }, {
                path : 'payments/merchant-categorisation/government-bodies/state-department',
                element : <DocsWrapper name="payments/merchant-categorisation/government-bodies/state-department" />
            }, {
                path : 'payments/merchant-categorisation/government-bodies/central-department',
                element : <DocsWrapper name="payments/merchant-categorisation/government-bodies/central-department" />
            }, {
                path : 'payments/merchant-categorisation/games',
                element : <DocsWrapper name="payments/merchant-categorisation/games" />
            }, {
                path : 'payments/merchant-categorisation/games/game-distributor-marketplace',
                element : <DocsWrapper name="payments/merchant-categorisation/games/game-distributor-marketplace" />
            }, {
                path : 'payments/merchant-categorisation/games/game-developer-publisher',
                element : <DocsWrapper name="payments/merchant-categorisation/games/game-developer-publisher" />
            }, {
                path : 'payments/merchant-categorisation/games/fantasy-sports',
                element : <DocsWrapper name="payments/merchant-categorisation/games/fantasy-sports" />
            }, {
                path : 'payments/merchant-categorisation/games/e-sports',
                element : <DocsWrapper name="payments/merchant-categorisation/games/e-sports" />
            }, {
                path : 'payments/merchant-categorisation/food-and-beverages',
                element : <DocsWrapper name="payments/merchant-categorisation/food-and-beverages" />
            }, {
                path : 'payments/merchant-categorisation/food-and-beverages/restaurants',
                element : <DocsWrapper name="payments/merchant-categorisation/food-and-beverages/restaurants" />
            }, {
                path : 'payments/merchant-categorisation/food-and-beverages/restaurant-search-reservations',
                element : <DocsWrapper name="payments/merchant-categorisation/food-and-beverages/restaurant-search-reservations" />
            }, {
                path : 'payments/merchant-categorisation/food-and-beverages/online-food-ordering',
                element : <DocsWrapper name="payments/merchant-categorisation/food-and-beverages/online-food-ordering" />
            }, {
                path : 'payments/merchant-categorisation/food-and-beverages/food-courts-cafeteria',
                element : <DocsWrapper name="payments/merchant-categorisation/food-and-beverages/food-courts-cafeteria" />
            }, {
                path : 'payments/merchant-categorisation/food-and-beverages/catering-services',
                element : <DocsWrapper name="payments/merchant-categorisation/food-and-beverages/catering-services" />
            }, {
                path : 'payments/merchant-categorisation/financial-services',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/stock-broking',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/stock-broking" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/securities',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/securities" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/pension-fund',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/pension-fund" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/nbfc',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/nbfc" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/mutual-funds',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/mutual-funds" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/lending',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/lending" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/insurance',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/insurance" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/forex',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/forex" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/financial-advisory',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/financial-advisory" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/crowdfunding-platform',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/crowdfunding-platform" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/cooperatives',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/cooperatives" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/commodities',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/commodities" />
            }, {
                path : 'payments/merchant-categorisation/financial-services/accounting-taxes',
                element : <DocsWrapper name="payments/merchant-categorisation/financial-services/accounting-taxes" />
            }, {
                path : 'payments/merchant-categorisation/education',
                element : <DocsWrapper name="payments/merchant-categorisation/education" />
            }, {
                path : 'payments/merchant-categorisation/education/university',
                element : <DocsWrapper name="payments/merchant-categorisation/education/university" />
            }, {
                path : 'payments/merchant-categorisation/education/school',
                element : <DocsWrapper name="payments/merchant-categorisation/education/school" />
            }, {
                path : 'payments/merchant-categorisation/education/professional-courses',
                element : <DocsWrapper name="payments/merchant-categorisation/education/professional-courses" />
            }, {
                path : 'payments/merchant-categorisation/education/preschool-daycare',
                element : <DocsWrapper name="payments/merchant-categorisation/education/preschool-daycare" />
            }, {
                path : 'payments/merchant-categorisation/education/e-learning',
                element : <DocsWrapper name="payments/merchant-categorisation/education/e-learning" />
            }, {
                path : 'payments/merchant-categorisation/education/distance-learning',
                element : <DocsWrapper name="payments/merchant-categorisation/education/distance-learning" />
            }, {
                path : 'payments/merchant-categorisation/education/college',
                element : <DocsWrapper name="payments/merchant-categorisation/education/college" />
            }, {
                path : 'payments/merchant-categorisation/education/coaching-institute',
                element : <DocsWrapper name="payments/merchant-categorisation/education/coaching-institute" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/wholesale-bulk-trade',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/wholesale-bulk-trade" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/sports-goods',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/sports-goods" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/sexual-wellness-products',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/sexual-wellness-products" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/religious-products',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/religious-products" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/product-rentals',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/product-rentals" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/pet-care-supplies',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/pet-care-supplies" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/office-supplies',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/office-supplies" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/marketplace',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/marketplace" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/grocery',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/grocery" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/flowers-gifts',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/flowers-gifts" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/fashion-lifestyle',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/fashion-lifestyle" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/electronics-furniture',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/electronics-furniture" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/dropshipping',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/dropshipping" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/coupons-deals',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/coupons-deals" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/books-publications',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/books-publications" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/baby-care-toys',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/baby-care-toys" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/arts-crafts-collectibles',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/arts-crafts-collectibles" />
            }, {
                path : 'payments/merchant-categorisation/ecommerce/agricultural-products',
                element : <DocsWrapper name="payments/merchant-categorisation/ecommerce/agricultural-products" />
            }, {
                path : 'payments/magic-checkout',
                element : <DocsWrapper name="payments/magic-checkout" />
            }, {
                path : 'payments/magic-checkout/woocommerce',
                element : <DocsWrapper name="payments/magic-checkout/woocommerce" />
            }, {
                path : 'payments/magic-checkout/woocommerce/configuration',
                element : <DocsWrapper name="payments/magic-checkout/woocommerce/configuration" />
            }, {
                path : 'payments/magic-checkout/web',
                element : <DocsWrapper name="payments/magic-checkout/web" />
            }, {
                path : 'payments/magic-checkout/upload-order-status',
                element : <DocsWrapper name="payments/magic-checkout/upload-order-status" />
            }, {
                path : 'payments/magic-checkout/upload-order-status/order-history',
                element : <DocsWrapper name="payments/magic-checkout/upload-order-status/order-history" />
            }, {
                path : 'payments/magic-checkout/upload-order-status/delivery-statuses',
                element : <DocsWrapper name="payments/magic-checkout/upload-order-status/delivery-statuses" />
            }, {
                path : 'payments/magic-checkout/troubleshooting-faqs',
                element : <DocsWrapper name="payments/magic-checkout/troubleshooting-faqs" />
            }, {
                path : 'payments/magic-checkout/shopify',
                element : <DocsWrapper name="payments/magic-checkout/shopify" />
            }, {
                path : 'payments/magic-checkout/shopify/order-analytics',
                element : <DocsWrapper name="payments/magic-checkout/shopify/order-analytics" />
            }, {
                path : 'payments/magic-checkout/settings',
                element : <DocsWrapper name="payments/magic-checkout/settings" />
            }, {
                path : 'payments/magic-checkout/rto-analytics',
                element : <DocsWrapper name="payments/magic-checkout/rto-analytics" />
            }, {
                path : 'payments/magic-checkout/rto-analytics/rto-insights',
                element : <DocsWrapper name="payments/magic-checkout/rto-analytics/rto-insights" />
            }, {
                path : 'payments/magic-checkout/rto-analytics/risk-report',
                element : <DocsWrapper name="payments/magic-checkout/rto-analytics/risk-report" />
            }, {
                path : 'payments/magic-checkout/rto-analytics/overview',
                element : <DocsWrapper name="payments/magic-checkout/rto-analytics/overview" />
            }, {
                path : 'payments/magic-checkout/review-cod-orders',
                element : <DocsWrapper name="payments/magic-checkout/review-cod-orders" />
            }, {
                path : 'payments/magic-checkout/review-cod-orders/workflow',
                element : <DocsWrapper name="payments/magic-checkout/review-cod-orders/workflow" />
            }, {
                path : 'payments/magic-checkout/prepay-cod',
                element : <DocsWrapper name="payments/magic-checkout/prepay-cod" />
            }, {
                path : 'payments/magic-checkout/logistics-partners',
                element : <DocsWrapper name="payments/magic-checkout/logistics-partners" />
            }, {
                path : 'payments/magic-checkout/logistics-partners/shiprocket',
                element : <DocsWrapper name="payments/magic-checkout/logistics-partners/shiprocket" />
            }, {
                path : 'payments/magic-checkout/logistics-partners/delhivery',
                element : <DocsWrapper name="payments/magic-checkout/logistics-partners/delhivery" />
            }, {
                path : 'payments/magic-checkout/apis/shipping-info',
                element : <DocsWrapper name="payments/magic-checkout/apis/shipping-info" />
            }, {
                path : 'payments/magic-checkout/apis/customer-address',
                element : <DocsWrapper name="payments/magic-checkout/apis/customer-address" />
            }, {
                path : 'payments/magic-checkout/apis/coupon-code',
                element : <DocsWrapper name="payments/magic-checkout/apis/coupon-code" />
            }, {
                path : 'payments/invoices',
                element : <DocsWrapper name="payments/invoices" />
            }, {
                path : 'payments/invoices/update',
                element : <DocsWrapper name="payments/invoices/update" />
            }, {
                path : 'payments/invoices/subscribe-to-webhooks',
                element : <DocsWrapper name="payments/invoices/subscribe-to-webhooks" />
            }, {
                path : 'payments/invoices/states',
                element : <DocsWrapper name="payments/invoices/states" />
            }, {
                path : 'payments/invoices/search',
                element : <DocsWrapper name="payments/invoices/search" />
            }, {
                path : 'payments/invoices/resend',
                element : <DocsWrapper name="payments/invoices/resend" />
            }, {
                path : 'payments/invoices/items',
                element : <DocsWrapper name="payments/invoices/items" />
            }, {
                path : 'payments/invoices/items/dashboard',
                element : <DocsWrapper name="payments/invoices/items/dashboard" />
            }, {
                path : 'payments/invoices/issue',
                element : <DocsWrapper name="payments/invoices/issue" />
            }, {
                path : 'payments/invoices/how-it-works',
                element : <DocsWrapper name="payments/invoices/how-it-works" />
            }, {
                path : 'payments/invoices/glossary',
                element : <DocsWrapper name="payments/invoices/glossary" />
            }, {
                path : 'payments/invoices/faqs',
                element : <DocsWrapper name="payments/invoices/faqs" />
            }, {
                path : 'payments/invoices/duplicate',
                element : <DocsWrapper name="payments/invoices/duplicate" />
            }, {
                path : 'payments/invoices/download-print',
                element : <DocsWrapper name="payments/invoices/download-print" />
            }, {
                path : 'payments/invoices/delete',
                element : <DocsWrapper name="payments/invoices/delete" />
            }, {
                path : 'payments/invoices/create',
                element : <DocsWrapper name="payments/invoices/create" />
            }, {
                path : 'payments/invoices/cancel',
                element : <DocsWrapper name="payments/invoices/cancel" />
            }, {
                path : 'payments/invoices/apis',
                element : <DocsWrapper name="payments/invoices/apis" />
            }, {
                path : 'payments/glossary',
                element : <DocsWrapper name="payments/glossary" />
            }, {
                path : 'payments/faqs',
                element : <DocsWrapper name="payments/faqs" />
            }, {
                path : 'payments/epos-app',
                element : <DocsWrapper name="payments/epos-app" />
            }, {
                path : 'payments/easy-submit-kyc',
                element : <DocsWrapper name="payments/easy-submit-kyc" />
            }, {
                path : 'payments/easy-create-account',
                element : <DocsWrapper name="payments/easy-create-account" />
            }, {
                path : 'payments/dynamic-convenience-fees',
                element : <DocsWrapper name="payments/dynamic-convenience-fees" />
            }, {
                path : 'payments/dynamic-convenience-fees/faqs',
                element : <DocsWrapper name="payments/dynamic-convenience-fees/faqs" />
            }, {
                path : 'payments/dynamic-convenience-fees/api',
                element : <DocsWrapper name="payments/dynamic-convenience-fees/api" />
            }, {
                path : 'payments/disputes',
                element : <DocsWrapper name="payments/disputes" />
            }, {
                path : 'payments/disputes/submit-evidence',
                element : <DocsWrapper name="payments/disputes/submit-evidence" />
            }, {
                path : 'payments/disputes/presentments',
                element : <DocsWrapper name="payments/disputes/presentments" />
            }, {
                path : 'payments/disputes/faqs',
                element : <DocsWrapper name="payments/disputes/faqs" />
            }, {
                path : 'payments/disputes/dashboard',
                element : <DocsWrapper name="payments/disputes/dashboard" />
            }, {
                path : 'payments/disputes/apis',
                element : <DocsWrapper name="payments/disputes/apis" />
            }, {
                path : 'payments/dashboard',
                element : <DocsWrapper name="payments/dashboard" />
            }, {
                path : 'payments/dashboard/upload-invoices',
                element : <DocsWrapper name="payments/dashboard/upload-invoices" />
            }, {
                path : 'payments/dashboard/test-live-modes',
                element : <DocsWrapper name="payments/dashboard/test-live-modes" />
            }, {
                path : 'payments/dashboard/support',
                element : <DocsWrapper name="payments/dashboard/support" />
            }, {
                path : 'payments/dashboard/settings/webhooks',
                element : <DocsWrapper name="payments/dashboard/settings/webhooks" />
            }, {
                path : 'payments/dashboard/reports',
                element : <DocsWrapper name="payments/dashboard/reports" />
            }, {
                path : 'payments/dashboard/my-account/credits-beta',
                element : <DocsWrapper name="payments/dashboard/my-account/credits-beta" />
            }, {
                path : 'payments/dashboard/my-account/balances-beta',
                element : <DocsWrapper name="payments/dashboard/my-account/balances-beta" />
            }, {
                path : 'payments/dashboard/my-account/balances-beta/negative-balance-route',
                element : <DocsWrapper name="payments/dashboard/my-account/balances-beta/negative-balance-route" />
            }, {
                path : 'payments/dashboard/my-account/balances-beta/negative-balance-emandate',
                element : <DocsWrapper name="payments/dashboard/my-account/balances-beta/negative-balance-emandate" />
            }, {
                path : 'payments/dashboard/home',
                element : <DocsWrapper name="payments/dashboard/home" />
            }, {
                path : 'payments/dashboard/faqs',
                element : <DocsWrapper name="payments/dashboard/faqs" />
            }, {
                path : 'payments/dashboard/buyers-address-details',
                element : <DocsWrapper name="payments/dashboard/buyers-address-details" />
            }, {
                path : 'payments/dashboard/account-settings',
                element : <DocsWrapper name="payments/dashboard/account-settings" />
            }, {
                path : 'payments/dashboard/account-settings/trusted-badge',
                element : <DocsWrapper name="payments/dashboard/account-settings/trusted-badge" />
            }, {
                path : 'payments/dashboard/account-settings/support-tickets',
                element : <DocsWrapper name="payments/dashboard/account-settings/support-tickets" />
            }, {
                path : 'payments/dashboard/account-settings/reminders',
                element : <DocsWrapper name="payments/dashboard/account-settings/reminders" />
            }, {
                path : 'payments/dashboard/account-settings/profile',
                element : <DocsWrapper name="payments/dashboard/account-settings/profile" />
            }, {
                path : 'payments/dashboard/account-settings/payment-methods',
                element : <DocsWrapper name="payments/dashboard/account-settings/payment-methods" />
            }, {
                path : 'payments/dashboard/account-settings/manage-team',
                element : <DocsWrapper name="payments/dashboard/account-settings/manage-team" />
            }, {
                path : 'payments/dashboard/account-settings/credits',
                element : <DocsWrapper name="payments/dashboard/account-settings/credits" />
            }, {
                path : 'payments/dashboard/account-settings/configuration',
                element : <DocsWrapper name="payments/dashboard/account-settings/configuration" />
            }, {
                path : 'payments/dashboard/account-settings/configuration/convenience-fees',
                element : <DocsWrapper name="payments/dashboard/account-settings/configuration/convenience-fees" />
            }, {
                path : 'payments/dashboard/account-settings/configuration/convenience-fees/international-payments',
                element : <DocsWrapper name="payments/dashboard/account-settings/configuration/convenience-fees/international-payments" />
            }, {
                path : 'payments/dashboard/account-settings/balances',
                element : <DocsWrapper name="payments/dashboard/account-settings/balances" />
            }, {
                path : 'payments/dashboard/account-settings/balances/negative-balance-route',
                element : <DocsWrapper name="payments/dashboard/account-settings/balances/negative-balance-route" />
            }, {
                path : 'payments/dashboard/account-settings/balances/negative-balance-emandate',
                element : <DocsWrapper name="payments/dashboard/account-settings/balances/negative-balance-emandate" />
            }, {
                path : 'payments/dashboard/account-settings/api-keys',
                element : <DocsWrapper name="payments/dashboard/account-settings/api-keys" />
            }, {
                path : 'payments/customers',
                element : <DocsWrapper name="payments/customers" />
            }, {
                path : 'payments/customers/customer-refunds',
                element : <DocsWrapper name="payments/customers/customer-refunds" />
            }, {
                path : 'payments/customers/customer-fund-account-api',
                element : <DocsWrapper name="payments/customers/customer-fund-account-api" />
            }, {
                path : 'payments/business-types-kyc-documents',
                element : <DocsWrapper name="payments/business-types-kyc-documents" />
            }, {
                path : 'payments/account-activation-support',
                element : <DocsWrapper name="payments/account-activation-support" />
            }, {
                path : 'payments/accordian-component',
                element : <DocsWrapper name="payments/accordian-component" />
            }, {
                path : 'partners',
                element : <DocsWrapper name="partners" />
            }, {
                path : 'partners/route',
                element : <DocsWrapper name="partners/route" />
            }, {
                path : 'partners/route/transfers',
                element : <DocsWrapper name="partners/route/transfers" />
            }, {
                path : 'partners/route/settlements',
                element : <DocsWrapper name="partners/route/settlements" />
            }, {
                path : 'partners/route/refunds-reversals',
                element : <DocsWrapper name="partners/route/refunds-reversals" />
            }, {
                path : 'partners/route/linked-accounts',
                element : <DocsWrapper name="partners/route/linked-accounts" />
            }, {
                path : 'partners/resellers',
                element : <DocsWrapper name="partners/resellers" />
            }, {
                path : 'partners/resellers/perform-kyc',
                element : <DocsWrapper name="partners/resellers/perform-kyc" />
            }, {
                path : 'partners/resellers/add-submerchants',
                element : <DocsWrapper name="partners/resellers/add-submerchants" />
            }, {
                path : 'partners/resellers/add-submerchants/changes',
                element : <DocsWrapper name="partners/resellers/add-submerchants/changes" />
            }, {
                path : 'partners/resellers/activation-status',
                element : <DocsWrapper name="partners/resellers/activation-status" />
            }, {
                path : 'partners/platforms-and-marketplaces',
                element : <DocsWrapper name="partners/platforms-and-marketplaces" />
            }, {
                path : 'partners/platforms-and-marketplaces/reports-and-reconciliation/third-party',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/reports-and-reconciliation/third-party" />
            }, {
                path : 'partners/platforms-and-marketplaces/reports-and-reconciliation/sub-merchant',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/reports-and-reconciliation/sub-merchant" />
            }, {
                path : 'partners/platforms-and-marketplaces/reports-and-reconciliation/platform',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/reports-and-reconciliation/platform" />
            }, {
                path : 'partners/platforms-and-marketplaces/process-payments',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/process-payments" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/test-integration',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/test-integration" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/subscribe-to-webhooks',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/subscribe-to-webhooks" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/revoke-access',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/revoke-access" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/integration-steps',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/integration-steps" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/go-live-checklist',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/integrate-oauth/go-live-checklist" />
            }, {
                path : 'partners/platforms-and-marketplaces/onboard-businesses/customise-onboarding',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/onboard-businesses/customise-onboarding" />
            }, {
                path : 'partners/platforms-and-marketplaces/control-of-funds',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/control-of-funds" />
            }, {
                path : 'partners/platforms-and-marketplaces/control-of-funds/set-up-accounts',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/control-of-funds/set-up-accounts" />
            }, {
                path : 'partners/platforms-and-marketplaces/control-of-funds/refunds-and-reversals',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/control-of-funds/refunds-and-reversals" />
            }, {
                path : 'partners/platforms-and-marketplaces/control-of-funds/process-fees',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/control-of-funds/process-fees" />
            }, {
                path : 'partners/platforms-and-marketplaces/become-platform-partner',
                element : <DocsWrapper name="partners/platforms-and-marketplaces/become-platform-partner" />
            }, {
                path : 'partners/platform',
                element : <DocsWrapper name="partners/platform" />
            }, {
                path : 'partners/platform/oauth',
                element : <DocsWrapper name="partners/platform/oauth" />
            }, {
                path : 'partners/platform/oauth/test-integration',
                element : <DocsWrapper name="partners/platform/oauth/test-integration" />
            }, {
                path : 'partners/platform/oauth/subscribe-to-webhooks',
                element : <DocsWrapper name="partners/platform/oauth/subscribe-to-webhooks" />
            }, {
                path : 'partners/platform/oauth/revoke-access',
                element : <DocsWrapper name="partners/platform/oauth/revoke-access" />
            }, {
                path : 'partners/platform/oauth/recurring-payments',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/upi-tpv/fetch-manage-tokens',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/upi-tpv/fetch-manage-tokens" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/upi-tpv/create-subsequent-payments',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/upi-tpv/create-subsequent-payments" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/upi-tpv/create-authorisation-transaction',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/upi-tpv/create-authorisation-transaction" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/upi/fetch-manage-tokens',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/upi/fetch-manage-tokens" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/upi/create-subsequent-payments',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/upi/create-subsequent-payments" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/upi/create-authorisation-transaction',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/upi/create-authorisation-transaction" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/emandate/registration',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/emandate/registration" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/emandate/fetch-manage-tokens',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/emandate/fetch-manage-tokens" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/emandate/create-subsequent-payments',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/emandate/create-subsequent-payments" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/cards/fetch-manage-tokens',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/cards/fetch-manage-tokens" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/cards/create-subsequent-payments',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/cards/create-subsequent-payments" />
            }, {
                path : 'partners/platform/oauth/recurring-payments/cards/create-authorisation-transaction',
                element : <DocsWrapper name="partners/platform/oauth/recurring-payments/cards/create-authorisation-transaction" />
            }, {
                path : 'partners/platform/oauth/integration-steps',
                element : <DocsWrapper name="partners/platform/oauth/integration-steps" />
            }, {
                path : 'partners/platform/oauth/go-live-checklist',
                element : <DocsWrapper name="partners/platform/oauth/go-live-checklist" />
            }, {
                path : 'partners/platform/become-platform-partner',
                element : <DocsWrapper name="partners/platform/become-platform-partner" />
            }, {
                path : 'partners/new-merchant',
                element : <DocsWrapper name="partners/new-merchant" />
            }, {
                path : 'partners/glossary',
                element : <DocsWrapper name="partners/glossary" />
            }, {
                path : 'partners/faqs',
                element : <DocsWrapper name="partners/faqs" />
            }, {
                path : 'partners/existing-merchant',
                element : <DocsWrapper name="partners/existing-merchant" />
            }, {
                path : 'partners/earnings',
                element : <DocsWrapper name="partners/earnings" />
            }, {
                path : 'partners/commissions',
                element : <DocsWrapper name="partners/commissions" />
            }, {
                path : 'partners/commissions/settlement-process',
                element : <DocsWrapper name="partners/commissions/settlement-process" />
            }, {
                path : 'partners/commissions/reports-invoices',
                element : <DocsWrapper name="partners/commissions/reports-invoices" />
            }, {
                path : 'partners/commissions/referral-bonus',
                element : <DocsWrapper name="partners/commissions/referral-bonus" />
            }, {
                path : 'partners/capital',
                element : <DocsWrapper name="partners/capital" />
            }, {
                path : 'partners/aggregators',
                element : <DocsWrapper name="partners/aggregators" />
            }, {
                path : 'partners/aggregators/xpress-onboarding',
                element : <DocsWrapper name="partners/aggregators/xpress-onboarding" />
            }, {
                path : 'partners/aggregators/xpress-onboarding/list',
                element : <DocsWrapper name="partners/aggregators/xpress-onboarding/list" />
            }, {
                path : 'partners/aggregators/testing',
                element : <DocsWrapper name="partners/aggregators/testing" />
            }, {
                path : 'partners/aggregators/partner-auth',
                element : <DocsWrapper name="partners/aggregators/partner-auth" />
            }, {
                path : 'partners/aggregators/partner-auth/token-sharing',
                element : <DocsWrapper name="partners/aggregators/partner-auth/token-sharing" />
            }, {
                path : 'partners/aggregators/partner-auth/subscriptions',
                element : <DocsWrapper name="partners/aggregators/partner-auth/subscriptions" />
            }, {
                path : 'partners/aggregators/partner-auth/smart-collect',
                element : <DocsWrapper name="partners/aggregators/partner-auth/smart-collect" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/upi-tpv/fetch-manage-tokens',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/upi-tpv/fetch-manage-tokens" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/upi-tpv/create-subsequent-payments',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/upi-tpv/create-subsequent-payments" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/upi-tpv/create-authorisation-transaction',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/upi-tpv/create-authorisation-transaction" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/upi/fetch-manage-tokens',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/upi/fetch-manage-tokens" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/upi/create-subsequent-payments',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/upi/create-subsequent-payments" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/upi/create-authorisation-transaction',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/upi/create-authorisation-transaction" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/emandate/registration',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/emandate/registration" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/emandate/fetch-manage-tokens',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/emandate/fetch-manage-tokens" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/emandate/create-subsequent-payments',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/emandate/create-subsequent-payments" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/cards/fetch-manage-tokens',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/cards/fetch-manage-tokens" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/cards/create-subsequent-payments',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/cards/create-subsequent-payments" />
            }, {
                path : 'partners/aggregators/partner-auth/recurring-payments/cards/create-authorisation-transaction',
                element : <DocsWrapper name="partners/aggregators/partner-auth/recurring-payments/cards/create-authorisation-transaction" />
            }, {
                path : 'partners/aggregators/partner-auth/qr-codes',
                element : <DocsWrapper name="partners/aggregators/partner-auth/qr-codes" />
            }, {
                path : 'partners/aggregators/partner-auth/payment-links',
                element : <DocsWrapper name="partners/aggregators/partner-auth/payment-links" />
            }, {
                path : 'partners/aggregators/partner-auth/payment-gateway',
                element : <DocsWrapper name="partners/aggregators/partner-auth/payment-gateway" />
            }, {
                path : 'partners/aggregators/onboarding-ui',
                element : <DocsWrapper name="partners/aggregators/onboarding-ui" />
            }, {
                path : 'partners/aggregators/onboarding-ui/test-integration',
                element : <DocsWrapper name="partners/aggregators/onboarding-ui/test-integration" />
            }, {
                path : 'partners/aggregators/onboarding-ui/status',
                element : <DocsWrapper name="partners/aggregators/onboarding-ui/status" />
            }, {
                path : 'partners/aggregators/onboarding-ui/build-integration',
                element : <DocsWrapper name="partners/aggregators/onboarding-ui/build-integration" />
            }, {
                path : 'partners/aggregators/onboarding-api',
                element : <DocsWrapper name="partners/aggregators/onboarding-api" />
            }, {
                path : 'partners/aggregators/onboarding-api/workflow',
                element : <DocsWrapper name="partners/aggregators/onboarding-api/workflow" />
            }, {
                path : 'partners/aggregators/onboarding-api/webhooks',
                element : <DocsWrapper name="partners/aggregators/onboarding-api/webhooks" />
            }, {
                path : 'partners/aggregators/onboarding-api/product-activation',
                element : <DocsWrapper name="partners/aggregators/onboarding-api/product-activation" />
            }, {
                path : 'partners/aggregators/onboarding-api/instant-activation',
                element : <DocsWrapper name="partners/aggregators/onboarding-api/instant-activation" />
            }, {
                path : 'partners/aggregators/onboarding-api/appendix',
                element : <DocsWrapper name="partners/aggregators/onboarding-api/appendix" />
            }, {
                path : 'partners/aggregators/bulk-onboarding',
                element : <DocsWrapper name="partners/aggregators/bulk-onboarding" />
            }, {
                path : 'partners/aggregators/become-aggregator',
                element : <DocsWrapper name="partners/aggregators/become-aggregator" />
            }, {
                path : 'partners/aggregators/add-submerchants',
                element : <DocsWrapper name="partners/aggregators/add-submerchants" />
            }, {
                path : 'home',
                element : <DocsWrapper name="home" />
            }, {
                path : 'get-started',
                element : <DocsWrapper name="get-started" />
            }, {
                path : 'checkout/examples',
                element : <DocsWrapper name="checkout/examples" />
            }, {
                path : 'checkout/additional-features',
                element : <DocsWrapper name="checkout/additional-features" />
            }, {
                path : 'app-store',
                element : <DocsWrapper name="app-store" />
            }, {
                path : 'app-store/zapier',
                element : <DocsWrapper name="app-store/zapier" />
            }, {
                path : 'app-store/slack',
                element : <DocsWrapper name="app-store/slack" />
            }, {
                path : 'app-store/integromat',
                element : <DocsWrapper name="app-store/integromat" />
            }, {
                path : 'api',
                element : <DocsWrapper name="api" />
            }, {
                path : 'api/x',
                element : <DocsWrapper name="api/x" />
            }, {
                path : 'api/x/webhooks',
                element : <DocsWrapper name="api/x/webhooks" />
            }, {
                path : 'api/x/transactions',
                element : <DocsWrapper name="api/x/transactions" />
            }, {
                path : 'api/x/skip-workflow',
                element : <DocsWrapper name="api/x/skip-workflow" />
            }, {
                path : 'api/x/payouts-cards',
                element : <DocsWrapper name="api/x/payouts-cards" />
            }, {
                path : 'api/x/payouts-cards/security-risks',
                element : <DocsWrapper name="api/x/payouts-cards/security-risks" />
            }, {
                path : 'api/x/payouts',
                element : <DocsWrapper name="api/x/payouts" />
            }, {
                path : 'api/x/payout-wallet',
                element : <DocsWrapper name="api/x/payout-wallet" />
            }, {
                path : 'api/x/payout-links',
                element : <DocsWrapper name="api/x/payout-links" />
            }, {
                path : 'api/x/payout-idempotency',
                element : <DocsWrapper name="api/x/payout-idempotency" />
            }, {
                path : 'api/x/payout-composite',
                element : <DocsWrapper name="api/x/payout-composite" />
            }, {
                path : 'api/x/fund-accounts',
                element : <DocsWrapper name="api/x/fund-accounts" />
            }, {
                path : 'api/x/error-codes',
                element : <DocsWrapper name="api/x/error-codes" />
            }, {
                path : 'api/x/contacts',
                element : <DocsWrapper name="api/x/contacts" />
            }, {
                path : 'api/x/account-validation',
                element : <DocsWrapper name="api/x/account-validation" />
            }, {
                path : 'api/settlements',
                element : <DocsWrapper name="api/settlements" />
            }, {
                path : 'api/settlements/instant',
                element : <DocsWrapper name="api/settlements/instant" />
            }, {
                path : 'api/refunds',
                element : <DocsWrapper name="api/refunds" />
            }, {
                path : 'api/qr-codes',
                element : <DocsWrapper name="api/qr-codes" />
            }, {
                path : 'api/qr-codes/image-content',
                element : <DocsWrapper name="api/qr-codes/image-content" />
            }, {
                path : 'api/qr-codes/image-content/best-practices',
                element : <DocsWrapper name="api/qr-codes/image-content/best-practices" />
            }, {
                path : 'api/qr-codes/gst',
                element : <DocsWrapper name="api/qr-codes/gst" />
            }, {
                path : 'api/payments',
                element : <DocsWrapper name="api/payments" />
            }, {
                path : 'api/payments/subscriptions',
                element : <DocsWrapper name="api/payments/subscriptions" />
            }, {
                path : 'api/payments/subscriptions/custom',
                element : <DocsWrapper name="api/payments/subscriptions/custom" />
            }, {
                path : 'api/payments/smart-collect-tpv',
                element : <DocsWrapper name="api/payments/smart-collect-tpv" />
            }, {
                path : 'api/payments/smart-collect',
                element : <DocsWrapper name="api/payments/smart-collect" />
            }, {
                path : 'api/payments/route',
                element : <DocsWrapper name="api/payments/route" />
            }, {
                path : 'api/payments/route/transfers',
                element : <DocsWrapper name="api/payments/route/transfers" />
            }, {
                path : 'api/payments/route/linked-account-onboarding',
                element : <DocsWrapper name="api/payments/route/linked-account-onboarding" />
            }, {
                path : 'api/payments/route/linked-account-apis-beta',
                element : <DocsWrapper name="api/payments/route/linked-account-apis-beta" />
            }, {
                path : 'api/payments/route/appendix',
                element : <DocsWrapper name="api/payments/route/appendix" />
            }, {
                path : 'api/payments/route/account-apis-beta',
                element : <DocsWrapper name="api/payments/route/account-apis-beta" />
            }, {
                path : 'api/payments/recurring-payments',
                element : <DocsWrapper name="api/payments/recurring-payments" />
            }, {
                path : 'api/payments/recurring-payments/webhooks',
                element : <DocsWrapper name="api/payments/recurring-payments/webhooks" />
            }, {
                path : 'api/payments/recurring-payments/upi-tpv/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/upi-tpv/tokens" />
            }, {
                path : 'api/payments/recurring-payments/upi-tpv/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/upi-tpv/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/upi-tpv/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/upi-tpv/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/upi/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/upi/tokens" />
            }, {
                path : 'api/payments/recurring-payments/upi/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/upi/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/upi/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/upi/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/postman-collection',
                element : <DocsWrapper name="api/payments/recurring-payments/postman-collection" />
            }, {
                path : 'api/payments/recurring-payments/paper-nach/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/paper-nach/tokens" />
            }, {
                path : 'api/payments/recurring-payments/paper-nach/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/paper-nach/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/paper-nach/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/paper-nach/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/paper-nach/auto-debit',
                element : <DocsWrapper name="api/payments/recurring-payments/paper-nach/auto-debit" />
            }, {
                path : 'api/payments/recurring-payments/emandate/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/emandate/tokens" />
            }, {
                path : 'api/payments/recurring-payments/emandate/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/emandate/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/emandate/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/emandate/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/emandate/auto-debit',
                element : <DocsWrapper name="api/payments/recurring-payments/emandate/auto-debit" />
            }, {
                path : 'api/payments/recurring-payments/custom',
                element : <DocsWrapper name="api/payments/recurring-payments/custom" />
            }, {
                path : 'api/payments/recurring-payments/custom/webhooks',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/webhooks" />
            }, {
                path : 'api/payments/recurring-payments/custom/upi-tpv/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/upi-tpv/tokens" />
            }, {
                path : 'api/payments/recurring-payments/custom/upi-tpv/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/upi-tpv/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/custom/upi-tpv/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/upi-tpv/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/custom/upi/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/upi/tokens" />
            }, {
                path : 'api/payments/recurring-payments/custom/upi/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/upi/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/custom/upi/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/upi/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/custom/postman-collection',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/postman-collection" />
            }, {
                path : 'api/payments/recurring-payments/custom/paper-nach/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/paper-nach/tokens" />
            }, {
                path : 'api/payments/recurring-payments/custom/paper-nach/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/paper-nach/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/custom/paper-nach/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/paper-nach/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/custom/paper-nach/auto-debit',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/paper-nach/auto-debit" />
            }, {
                path : 'api/payments/recurring-payments/custom/emandate/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/emandate/tokens" />
            }, {
                path : 'api/payments/recurring-payments/custom/emandate/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/emandate/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/custom/emandate/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/emandate/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/custom/emandate/auto-debit',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/emandate/auto-debit" />
            }, {
                path : 'api/payments/recurring-payments/custom/cards/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/cards/tokens" />
            }, {
                path : 'api/payments/recurring-payments/custom/cards/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/cards/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/custom/cards/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/custom/cards/create-authorization-transaction" />
            }, {
                path : 'api/payments/recurring-payments/cards/tokens',
                element : <DocsWrapper name="api/payments/recurring-payments/cards/tokens" />
            }, {
                path : 'api/payments/recurring-payments/cards/create-subsequent-payments',
                element : <DocsWrapper name="api/payments/recurring-payments/cards/create-subsequent-payments" />
            }, {
                path : 'api/payments/recurring-payments/cards/create-authorization-transaction',
                element : <DocsWrapper name="api/payments/recurring-payments/cards/create-authorization-transaction" />
            }, {
                path : 'api/payments/payment-links',
                element : <DocsWrapper name="api/payments/payment-links" />
            }, {
                path : 'api/payments/payment-links/v1',
                element : <DocsWrapper name="api/payments/payment-links/v1" />
            }, {
                path : 'api/payments/payment-links/v1/transfers',
                element : <DocsWrapper name="api/payments/payment-links/v1/transfers" />
            }, {
                path : 'api/payments/payment-links/v1/third-party-validation',
                element : <DocsWrapper name="api/payments/payment-links/v1/third-party-validation" />
            }, {
                path : 'api/payments/payment-links/v1/reminders',
                element : <DocsWrapper name="api/payments/payment-links/v1/reminders" />
            }, {
                path : 'api/payments/payment-links/v1/offers',
                element : <DocsWrapper name="api/payments/payment-links/v1/offers" />
            }, {
                path : 'api/payments/payment-links/v1/customise',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise" />
            }, {
                path : 'api/payments/payment-links/v1/customise/rename-payment-details-labels',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/rename-payment-details-labels" />
            }, {
                path : 'api/payments/payment-links/v1/customise/rename-checkout-labels',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/rename-checkout-labels" />
            }, {
                path : 'api/payments/payment-links/v1/customise/read-only',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/read-only" />
            }, {
                path : 'api/payments/payment-links/v1/customise/prefill',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/prefill" />
            }, {
                path : 'api/payments/payment-links/v1/customise/postman-collection',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/postman-collection" />
            }, {
                path : 'api/payments/payment-links/v1/customise/payment-methods',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/payment-methods" />
            }, {
                path : 'api/payments/payment-links/v1/customise/merchant-details',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/merchant-details" />
            }, {
                path : 'api/payments/payment-links/v1/customise/checkout-theme',
                element : <DocsWrapper name="api/payments/payment-links/v1/customise/checkout-theme" />
            }, {
                path : 'api/payments/payment-links/v1/bank-transfer',
                element : <DocsWrapper name="api/payments/payment-links/v1/bank-transfer" />
            }, {
                path : 'api/payments/payment-links/transfer-payments',
                element : <DocsWrapper name="api/payments/payment-links/transfer-payments" />
            }, {
                path : 'api/payments/payment-links/third-party-validation',
                element : <DocsWrapper name="api/payments/payment-links/third-party-validation" />
            }, {
                path : 'api/payments/payment-links/rename-payment-details-labels',
                element : <DocsWrapper name="api/payments/payment-links/rename-payment-details-labels" />
            }, {
                path : 'api/payments/payment-links/rename-checkout-labels',
                element : <DocsWrapper name="api/payments/payment-links/rename-checkout-labels" />
            }, {
                path : 'api/payments/payment-links/reminders',
                element : <DocsWrapper name="api/payments/payment-links/reminders" />
            }, {
                path : 'api/payments/payment-links/receive-bank-transfer-payments',
                element : <DocsWrapper name="api/payments/payment-links/receive-bank-transfer-payments" />
            }, {
                path : 'api/payments/payment-links/parameters',
                element : <DocsWrapper name="api/payments/payment-links/parameters" />
            }, {
                path : 'api/payments/payment-links/offers',
                element : <DocsWrapper name="api/payments/payment-links/offers" />
            }, {
                path : 'api/payments/payment-links/customise-payment-methods',
                element : <DocsWrapper name="api/payments/payment-links/customise-payment-methods" />
            }, {
                path : 'api/payments/payment-links/customise',
                element : <DocsWrapper name="api/payments/payment-links/customise" />
            }, {
                path : 'api/payments/payment-links/checkout-theme',
                element : <DocsWrapper name="api/payments/payment-links/checkout-theme" />
            }, {
                path : 'api/payments/payment-links/change-business-name',
                element : <DocsWrapper name="api/payments/payment-links/change-business-name" />
            }, {
                path : 'api/payments/payment-links/advanced-options',
                element : <DocsWrapper name="api/payments/payment-links/advanced-options" />
            }, {
                path : 'api/payments/items',
                element : <DocsWrapper name="api/payments/items" />
            }, {
                path : 'api/payments/invoices',
                element : <DocsWrapper name="api/payments/invoices" />
            }, {
                path : 'api/payments/form-post-payment-create',
                element : <DocsWrapper name="api/payments/form-post-payment-create" />
            }, {
                path : 'api/payments/downtime-beta',
                element : <DocsWrapper name="api/payments/downtime-beta" />
            }, {
                path : 'api/payments/downtime',
                element : <DocsWrapper name="api/payments/downtime" />
            }, {
                path : 'api/payments/customer-payment-history',
                element : <DocsWrapper name="api/payments/customer-payment-history" />
            }, {
                path : 'api/payments/cards/iin-api',
                element : <DocsWrapper name="api/payments/cards/iin-api" />
            }, {
                path : 'api/payments/cards/fingerprints',
                element : <DocsWrapper name="api/payments/cards/fingerprints" />
            }, {
                path : 'api/payment-settlement-control-api',
                element : <DocsWrapper name="api/payment-settlement-control-api" />
            }, {
                path : 'api/partners',
                element : <DocsWrapper name="api/partners" />
            }, {
                path : 'api/partners/webhooks',
                element : <DocsWrapper name="api/partners/webhooks" />
            }, {
                path : 'api/partners/upload-document',
                element : <DocsWrapper name="api/partners/upload-document" />
            }, {
                path : 'api/partners/terms-conditions-deprecated',
                element : <DocsWrapper name="api/partners/terms-conditions-deprecated" />
            }, {
                path : 'api/partners/terms-conditions',
                element : <DocsWrapper name="api/partners/terms-conditions" />
            }, {
                path : 'api/partners/stakeholder',
                element : <DocsWrapper name="api/partners/stakeholder" />
            }, {
                path : 'api/partners/product-configuration-xpress-onboarding',
                element : <DocsWrapper name="api/partners/product-configuration-xpress-onboarding" />
            }, {
                path : 'api/partners/product-configuration',
                element : <DocsWrapper name="api/partners/product-configuration" />
            }, {
                path : 'api/partners/errors',
                element : <DocsWrapper name="api/partners/errors" />
            }, {
                path : 'api/partners/account-onboarding',
                element : <DocsWrapper name="api/partners/account-onboarding" />
            }, {
                path : 'api/pagination',
                element : <DocsWrapper name="api/pagination" />
            }, {
                path : 'api/orders',
                element : <DocsWrapper name="api/orders" />
            }, {
                path : 'api/orders/products',
                element : <DocsWrapper name="api/orders/products" />
            }, {
                path : 'api/instant-refunds',
                element : <DocsWrapper name="api/instant-refunds" />
            }, {
                path : 'api/glossary',
                element : <DocsWrapper name="api/glossary" />
            }, {
                path : 'api/errors',
                element : <DocsWrapper name="api/errors" />
            }, {
                path : 'api/errors/x',
                element : <DocsWrapper name="api/errors/x" />
            }, {
                path : 'api/errors/x/payout-status-details',
                element : <DocsWrapper name="api/errors/x/payout-status-details" />
            }, {
                path : 'api/errors/x/fund-account',
                element : <DocsWrapper name="api/errors/x/fund-account" />
            }, {
                path : 'api/errors/x/contacts',
                element : <DocsWrapper name="api/errors/x/contacts" />
            }, {
                path : 'api/errors/payment-methods',
                element : <DocsWrapper name="api/errors/payment-methods" />
            }, {
                path : 'api/errors/list',
                element : <DocsWrapper name="api/errors/list" />
            }, {
                path : 'api/entity-metadata',
                element : <DocsWrapper name="api/entity-metadata" />
            }, {
                path : 'api/documents',
                element : <DocsWrapper name="api/documents" />
            }, {
                path : 'api/disputes',
                element : <DocsWrapper name="api/disputes" />
            }, {
                path : 'api/customers',
                element : <DocsWrapper name="api/customers" />
            }, {
                path : 'api/best-practices',
                element : <DocsWrapper name="api/best-practices" />
            }, {
                path : 'api/basics',
                element : <DocsWrapper name="api/basics" />
            }, {
                path : 'api/authentication',
                element : <DocsWrapper name="api/authentication" />
            }, {
                path : 'announcements/whitelists',
                element : <DocsWrapper name="announcements/whitelists" />
            }, {
                path : 'announcements/tls',
                element : <DocsWrapper name="announcements/tls" />
            }, {
                path : 'announcements/tls/certs',
                element : <DocsWrapper name="announcements/tls/certs" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/subscriptions',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/subscriptions" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/subscriptions/mandatehq-faqs',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/subscriptions/mandatehq-faqs" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/subscriptions/cards',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/subscriptions/cards" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/subscriptions/cards/tokenisation',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/subscriptions/cards/tokenisation" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/recurring-payments',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/recurring-payments" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/recurring-payments/mandatehq-faqs',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/recurring-payments/mandatehq-faqs" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/recurring-payments/cards',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/recurring-payments/cards" />
            }, {
                path : 'announcements/rbi-card-mandate-guidelines/recurring-payments/cards/tokenisation',
                element : <DocsWrapper name="announcements/rbi-card-mandate-guidelines/recurring-payments/cards/tokenisation" />
            }, {
                path : 'announcements/gst-changes',
                element : <DocsWrapper name="announcements/gst-changes" />
            }
];

