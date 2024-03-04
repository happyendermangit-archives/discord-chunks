function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("666038"),
        r = n("643619");
    i = class e extends s.default {
        static createInvoiceFromServer(t) {
            return new e({
                id: t.id,
                invoiceItems: t.invoice_items.map(r.createInvoiceItemFromServer),
                total: t.total,
                subtotal: t.subtotal,
                currency: t.currency,
                tax: t.tax,
                taxInclusive: t.tax_inclusive,
                subscriptionPeriodStart: new Date(t.subscription_period_start),
                subscriptionPeriodEnd: new Date(t.subscription_period_end),
                status: t.status
            })
        }
        constructor(e) {
            super(), this.id = e.id, this.invoiceItems = e.invoiceItems, this.total = e.total, this.subtotal = e.subtotal, this.currency = e.currency, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscriptionPeriodStart = e.subscriptionPeriodStart, this.subscriptionPeriodEnd = e.subscriptionPeriodEnd, this.status = e.status
        }
    }
}