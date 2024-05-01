function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("724458"), n("653041");
    var i = n("778787"),
        r = n("803358");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class a extends r.default {
        static fromServer(e) {
            let {
                products: t,
                logo: n,
                pdp_bg: r,
                mobile_bg: s,
                success_modal_bg: o,
                mobile_banner: l,
                ...u
            } = e;
            return new a({
                ...super.fromServer(u),
                products: t.reduce((e, t) => {
                    let n = i.default.fromServer(t);
                    return 0 === n.items.length ? e : (e.push(n), e)
                }, []),
                logo: n,
                pdpBg: r,
                mobileBg: s,
                successModalBg: o,
                mobileBanner: l
            })
        }
        constructor(e) {
            super(e), s(this, "products", void 0), s(this, "logo", void 0), s(this, "pdpBg", void 0), s(this, "mobileBg", void 0), s(this, "successModalBg", void 0), s(this, "mobileBanner", void 0), this.products = e.products, this.logo = e.logo, this.pdpBg = e.pdpBg, this.mobileBg = e.mobileBg, this.successModalBg = e.successModalBg, this.mobileBanner = e.mobileBanner
        }
    }
}