function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("140436");
    t.default = function(e) {
        var t, n, o, u = e.message,
            s = e.className,
            l = e.noResultsImageURL,
            c = e.forceLightTheme,
            f = e.suggestions;
        return r.createElement("div", {
            className: i()((t = {}, n = a.forceLightTheme, o = c, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t), s)
        }, r.createElement("div", {
            className: a.wrapper
        }, r.createElement("div", {
            className: a.sadImage,
            style: null != l ? {
                backgroundImage: "url(".concat(l, ")")
            } : {}
        }), r.createElement("div", null, u), f))
    }
}