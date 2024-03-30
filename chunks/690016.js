function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionListingBenefits: function() {
            return c
        },
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("765457"),
        s = n("864122"),
        l = n("421290");

    function c(e) {
        var t, n = e.applicationId,
            o = e.storeListingBenefits,
            a = e.skuBenefits,
            u = e.className;
        return null != o ? t = o.map(function(e) {
            return r.createElement(d, {
                applicationId: n,
                benefit: e,
                key: e.id,
                className: i()(l.__invalid_benefit, u)
            })
        }) : null != a && (t = a.map(function(e, t) {
            return r.createElement(f, {
                benefit: e,
                key: t,
                className: i()(l.__invalid_benefit, u)
            })
        })), r.createElement(r.Fragment, null, t)
    }

    function f(e) {
        var t = e.benefit,
            n = e.className,
            o = e.emojiContainerClassName,
            s = e.showsDescription,
            c = e.nameTextVariant,
            f = e.nameTextColor;
        return r.createElement("div", {
            className: i()(l.container, n)
        }, null != t.emoji && r.createElement("div", {
            className: i()(l.emojiContainer, o)
        }, r.createElement(u.default, {
            emojiId: t.emoji.id,
            emojiName: t.emoji.name,
            animated: t.emoji.animated
        })), r.createElement("div", {
            className: l.infoContainer
        }, r.createElement(a.Text, {
            variant: void 0 === c ? "text-md/medium" : c,
            color: void 0 === f ? "header-primary" : f,
            className: l.name
        }, t.name), (void 0 === s || s) && r.createElement(a.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal"
        }, t.description)))
    }

    function d(e) {
        var t = e.applicationId,
            n = e.benefit,
            o = e.className,
            u = e.emojiContainerClassName,
            c = e.showsDescription,
            f = e.nameTextVariant,
            d = e.nameTextColor;
        return r.createElement("div", {
            className: i()(l.container, o)
        }, r.createElement("div", {
            className: i()(l.emojiContainer, u)
        }, (0, s.getBenefitIcon)(t, n.icon)), r.createElement("div", {
            className: l.infoContainer
        }, r.createElement(a.Text, {
            variant: void 0 === f ? "text-md/medium" : f,
            color: void 0 === d ? "header-primary" : d,
            className: l.name
        }, n.name), (void 0 === c || c) && r.createElement(a.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal"
        }, n.description)))
    }
}