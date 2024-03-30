function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("785720"),
        s = n("30857");

    function l(e) {
        var t, n, o, l, c = e.name,
            f = e.className,
            d = e.state,
            _ = e.isInline,
            E = e.onClick,
            p = null,
            m = u.default.Colors.HEADER_PRIMARY;
        (null == d ? void 0 : d.isActive) && !_ ? p = s.active : (null == d ? void 0 : null === (l = d.lastValidationResult) || void 0 === l ? void 0 : l.success) === !1 ? p = s.error : (null == d ? void 0 : d.hasValue) && !_ && (p = s.set);
        var y = r.createElement(u.default, {
            size: _ ? u.default.Sizes.SIZE_16 : u.default.Sizes.SIZE_14,
            color: m,
            className: i()(s.option, (t = {}, n = s.inline, o = _, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t), p, f)
        }, c + (_ ? ":" : ""));
        return null == E ? y : r.createElement(a.Clickable, {
            className: s.clickable,
            onClick: function() {
                return E(c)
            }
        }, y)
    }
}