function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("974052"),
        s = n("569523");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = r.memo(function(e) {
        var t = e.children,
            n = e.className,
            o = e.icon,
            c = e.isCollapsed,
            f = e.onClick,
            d = e["aria-label"];
        return r.createElement("div", {
            className: i()(s.wrapper, n)
        }, r.createElement(a.Clickable, {
            onClick: f,
            onKeyDown: function(e) {
                return e.stopPropagation()
            },
            className: i()(s.header, l({}, s.interactive, null != c)),
            "aria-expanded": null != c ? !c : void 0,
            "aria-label": d
        }, null != o && r.createElement("div", {
            "aria-hidden": !0,
            className: s.headerIcon
        }, o), r.createElement("span", {
            className: s.headerLabel
        }, t), null != c ? r.createElement(u.default, {
            className: i()(s.headerCollapseIcon, l({}, s.headerCollapseIconCollapsed, c)),
            height: 16,
            width: 16
        }) : null))
    });
    t.default = c
}