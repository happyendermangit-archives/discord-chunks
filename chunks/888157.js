function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Preview: function() {
            return s
        }
    });
    var r = n("884691"),
        a = n.n(r),
        i = n("834124"),
        o = n("62752");
    let s = e => {
        let t;
        let n = (0, i.usePreview)();
        if (!n.display) return null;
        let {
            display: r,
            ...s
        } = n;
        return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), a.createElement(o.Context.Provider, {
            value: s
        }, t)
    }
}