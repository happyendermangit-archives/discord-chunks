function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return a
        }
    });
    var r = s("37983");
    s("884691");
    var n = s("414456"),
        l = s.n(n),
        i = s("21538"),
        a = e => {
            let {
                message: t,
                className: s,
                noResultsImageURL: n,
                forceLightTheme: a,
                suggestions: o
            } = e;
            return (0, r.jsx)("div", {
                className: l({
                    [i.forceLightTheme]: a
                }, s),
                children: (0, r.jsxs)("div", {
                    className: i.wrapper,
                    children: [(0, r.jsx)("div", {
                        className: i.sadImage,
                        style: null != n ? {
                            backgroundImage: "url(".concat(n, ")")
                        } : {}
                    }), (0, r.jsx)("div", {
                        children: t
                    }), o]
                })
            })
        }
}