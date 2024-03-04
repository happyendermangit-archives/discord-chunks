function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Preview: function() {
            return a
        }
    });
    var r = n("884691"),
        i = n.n(r),
        o = n("834124"),
        s = n("62752");
    let a = e => {
        let t;
        let n = (0, o.usePreview)();
        if (!n.display) return null;
        let {
            display: r,
            ...a
        } = n;
        return t = "children" in e ? "function" == typeof e.children ? e.children(a) : e.children : e.generator(a), i.createElement(s.Context.Provider, {
            value: a
        }, t)
    }
}