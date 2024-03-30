function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("813571"),
        u = n("993531"),
        s = n("941504"),
        l = n("201385");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = r.memo(function(e) {
        var t, n = e.onClick,
            o = e.disabled,
            f = void 0 !== o && o;
        return r.createElement("div", {
            className: l.separator
        }, r.createElement("div", {
            className: l.buttonContainer
        }, r.createElement(a.default, {
            className: l.button,
            innerClassName: l.innerButton,
            childClassName: i()(l.buttonChild, (c(t = {}, l.disabled, f), c(t, l.activeButtonChild, !f), t)),
            onClick: n,
            disabled: f,
            isActive: !1,
            "aria-label": s.default.Messages.SEND_MESSAGE
        }, r.createElement(u.default, {
            className: l.sendIcon
        }))))
    })
}