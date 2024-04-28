function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Preview: function() {
            return s
        }
    });
    var r = n("470079"),
        i = n.n(r),
        a = n("576967"),
        o = n("694542");
    let s = e => {
        let t;
        let n = (0, a.usePreview)();
        if (!n.display) return null;
        let {
            display: r,
            ...s
        } = n;
        return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), i().createElement(o.Context.Provider, {
            value: s
        }, t)
    }
}