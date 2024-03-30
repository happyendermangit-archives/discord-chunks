function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HiddenVisually: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("513209");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        var t, n = e.id,
            o = e.tag,
            s = e.showOnFocus,
            l = e.children;
        return r.createElement(void 0 === o ? "span" : o, {
            id: n,
            className: i()((u(t = {}, a.hiddenVisually, !s), u(t, a.showOnFocus, s), t))
        }, l)
    }
}