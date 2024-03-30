function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormNotice: function() {
            return E
        },
        FormNoticeImagePositions: function() {
            return _
        },
        FormNoticeTypes: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("407859"),
        u = n("143953"),
        s = n("773076"),
        l = n("924900"),
        c = n("526326");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = a.Card.Types,
        _ = {
            LEFT: "left",
            RIGHT: "right"
        };

    function E(e) {
        var t, n, o = e.type,
            d = void 0 === o ? a.Card.Types.DANGER : o,
            E = e.imageData,
            p = e.button,
            m = e.className,
            y = e.iconClassName,
            I = e.title,
            h = e.body,
            O = e.style,
            T = e.align,
            S = void 0 === T ? u.default.Align.START : T,
            v = u.default.Direction.HORIZONTAL;
        if (null != E) {
            var g = E.position,
                A = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(E, ["position"]);
            t = r.createElement(u.default.Child, {
                grow: 0,
                shrink: 0
            }, r.createElement("img", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        f(e, t, n[t])
                    })
                }
                return e
            }({
                alt: "",
                className: i()(c.icon, y)
            }, A))), g === _.RIGHT && (v = u.default.Direction.HORIZONTAL_REVERSE)
        } else null != p && (n = p);
        var b = !0;
        return d === a.Card.Types.PRIMARY && (b = !1), r.createElement(a.Card, {
            className: i()(c.formNotice, m),
            type: d,
            style: O
        }, r.createElement(u.default, {
            direction: v,
            align: S
        }, t, r.createElement(u.default.Child, null, null != I && "" !== I ? r.createElement(l.FormTitle, {
            tag: l.FormTitleTags.H5,
            className: i()(c.formNoticeTitle, f({}, c.whiteText, b)),
            faded: !0
        }, I) : null, r.createElement(s.FormText, {
            className: i()(c.formNoticeBody, f({}, c.whiteText, b))
        }, h), n)))
    }
    E.Types = a.Card.Types
}