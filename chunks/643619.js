function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        coalesceInvoiceItems: function() {
            return r
        },
        createInvoiceItemFromServer: function() {
            return a
        }
    }), n("222007"), n("424973");
    var i = n("917351"),
        s = n.n(i);

    function r(e) {
        let t = (e, t) => e.subscriptionPlanId === t.subscriptionPlanId && e.subscriptionPlanPrice === t.subscriptionPlanPrice && e.amount === t.amount && s.isEqual(e.discounts, t.discounts),
            n = [],
            i = new Set;
        e.map(e => {
            for (let s of n)
                if (t(s, e)) {
                    i.add(s.subscriptionPlanId), s.quantity += e.quantity;
                    return
                } n.push({
                ...e
            })
        });
        let r = n.map(e => {
            let t = {
                ...e
            };
            return i.has(e.subscriptionPlanId) && (t.amount = t.amount * t.quantity, t.discounts = t.discounts.map(e => ({
                ...e,
                amount: e.amount * t.quantity
            }))), t
        });
        return r
    }

    function a(e) {
        return {
            id: e.id,
            subscriptionPlanId: e.subscription_plan_id,
            subscriptionPlanPrice: e.subscription_plan_price,
            amount: e.amount,
            quantity: e.quantity,
            discounts: e.discounts
        }
    }
}