function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CTAType: function() {
            return o
        }
    });
    var r, o, i = n("470079"),
        a = n("784184"),
        u = n("143953"),
        s = n("622208"),
        l = n("952040"),
        c = n("941504"),
        f = n("80481");
    (r = o || (o = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
    var d = function(e) {
        var t = e.onBack,
            n = e.backText,
            r = e.primaryIcon,
            o = e.primaryCTA,
            d = e.primaryType,
            _ = e.primaryText,
            E = e.primaryTooltip,
            p = e.primaryDisabled,
            m = e.primarySubmitting,
            y = e.onPrimary,
            I = e.secondaryText,
            h = e.onSecondary;
        return i.createElement(a.ModalFooter, {
            justify: u.default.Justify.BETWEEN,
            align: u.default.Align.CENTER
        }, function() {
            if (null == o || null == _) return null;
            var e = 2 === o ? s.default : a.Button,
                t = {
                    innerClassName: f.button,
                    type: d,
                    disabled: p,
                    submitting: m,
                    color: 0 === o ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                    onClick: y
                };
            return null != E ? i.createElement(a.Tooltip, {
                text: E
            }, function(n) {
                return i.createElement(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({}, n, t), null == r ? null : i.createElement(r, {
                    className: f.primaryIcon
                }), _)
            }) : i.createElement(e, t, null == r ? null : i.createElement(r, {
                className: f.primaryIcon
            }), _)
        }(), null == I ? null : i.createElement(a.Button, {
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.LINK,
            onClick: h
        }, I), i.createElement(l.default, null), null == t ? null : i.createElement(a.Button, {
            className: f.back,
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.LINK,
            onClick: t
        }, null != n ? n : c.default.Messages.BACK))
    };
    d.CTAType = o, t.default = d
}