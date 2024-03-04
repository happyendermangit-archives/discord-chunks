function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return a
        }
    });
    var s = r("37983");
    r("884691");
    var n = r("414456"),
        l = r.n(n),
        i = r("21538"),
        a = e => {
            let {
                message: t,
                className: r,
                noResultsImageURL: n,
                forceLightTheme: a,
                suggestions: o
            } = e;
            return (0, s.jsx)("div", {
                className: l({
                    [i.forceLightTheme]: a
                }, r),
                children: (0, s.jsxs)("div", {
                    className: i.wrapper,
                    children: [(0, s.jsx)("div", {
                        className: i.sadImage,
                        style: null != n ? {
                            backgroundImage: "url(".concat(n, ")")
                        } : {}
                    }), (0, s.jsx)("div", {
                        children: t
                    }), o]
                })
            })
        }
}