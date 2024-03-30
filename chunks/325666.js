function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("56300"),
        l = n("784184"),
        c = n("247164"),
        f = n("437404"),
        d = n("941504"),
        _ = n("37379");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {})).DEFAULT = "", r.BOLD = "Bold", r.SOLID = "Solid";
    var p = function(e) {
        var t, n = e.closeAction,
            r = e.variant,
            o = e.keybind,
            a = e.className;
        return i.createElement("div", {
            className: u()(_.container, a)
        }, i.createElement(l.Clickable, {
            className: u()(_.closeButton, (E(t = {}, _.closeButtonBold, "Bold" === r), E(t, _.closeButtonSolid, "Solid" === r), t)),
            onClick: n,
            "aria-label": d.default.Messages.CLOSE
        }, "Solid" === r ? i.createElement(f.default, {
            width: 24,
            height: 24,
            "aria-hidden": !0
        }) : i.createElement(c.default, {
            width: 18,
            height: 18,
            "aria-hidden": !0
        })), s.isMobile ? null : i.createElement("div", {
            className: u()(_.keybind),
            "aria-hidden": !0
        }, o))
    };
    p.defaultProps = {
        variant: ""
    }, p.Variants = o, t.default = p
}