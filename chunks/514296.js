function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    }), r("808653"), r("424973");
    var u, n = r("407788"),
        i = r("792382");
    u = class e extends i.default {
        static fromServer(t) {
            let {
                products: r,
                logo: u,
                mobile_bg: i,
                ...s
            } = t;
            return new e({
                ...super.fromServer(s),
                products: r.reduce((e, t) => {
                    let r = n.default.fromServer(t);
                    return 0 === r.items.length ? e : (e.push(r), e)
                }, []),
                logo: u,
                mobile_bg: i
            })
        }
        constructor(e) {
            super(e), this.products = e.products, this.logo = e.logo, this.mobile_bg = e.mobile_bg
        }
    }
}