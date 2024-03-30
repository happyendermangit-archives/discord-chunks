function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationBenefitsModalBenefits: function() {
            return m
        },
        ApplicationBenefitsModalContent: function() {
            return y
        },
        ApplicationBenefitsModalDescription: function() {
            return p
        },
        ApplicationBenefitsModalDivider: function() {
            return E
        },
        ApplicationBenefitsModalHeading: function() {
            return _
        },
        ApplicationBenefitsModalIcon: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("145771"),
        s = n("690016"),
        l = n("899670");

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function f(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var d = function(e) {
            var t = e.application,
                n = e.asset,
                o = e.className,
                i = f(e, ["application", "asset", "className"]);
            return r.createElement(u.default, c({
                application: t,
                size: u.ApplicationIconSize.MEDIUM,
                asset: n,
                className: o
            }, i))
        },
        _ = function(e) {
            var t = e.children,
                n = e.className,
                o = e.id,
                u = f(e, ["children", "className", "id"]);
            return r.createElement(a.Heading, c({
                className: i()(l.header, n),
                variant: "heading-xl/extrabold",
                id: o
            }, u), t)
        };

    function E() {
        return r.createElement("hr", {
            className: l.divider
        })
    }
    var p = function(e) {
            var t = e.className,
                n = e.title,
                o = e.description,
                i = f(e, ["className", "title", "description"]);
            return r.createElement("div", c({
                className: t
            }, i), r.createElement(a.Heading, {
                variant: "heading-md/bold",
                color: "header-primary"
            }, n), r.createElement(a.Heading, {
                variant: "heading-sm/normal",
                color: "header-secondary"
            }, o))
        },
        m = function(e) {
            var t = e.applicationId,
                n = e.storeListingBenefits,
                o = e.skuBenefits,
                a = e.className,
                u = f(e, ["applicationId", "storeListingBenefits", "skuBenefits", "className"]);
            return r.createElement("div", c({
                className: i()(l.benefitsContainer, a)
            }, u), r.createElement(s.SubscriptionListingBenefits, {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: o,
                className: l.benefit
            }))
        },
        y = function(e) {
            var t = e.children,
                n = e.className,
                o = f(e, ["children", "className"]);
            return r.createElement("div", c({
                className: i()(l.container, n)
            }, o), t)
        }
}