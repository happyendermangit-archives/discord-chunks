function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("941504"),
        s = n("594601");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        var t, n = e.className,
            o = e.src,
            c = e.unicodeEmoji,
            f = e.name,
            d = e.size,
            _ = void 0 === d ? 20 : d,
            E = e.enableTooltip,
            p = e.enableHeight,
            m = void 0 === p || p,
            y = e.onClick;
        if (null == o && null == c) return null;
        return r.createElement(a.TooltipContainer, {
            text: f,
            "aria-label": !1,
            shouldShow: void 0 === E || E,
            element: "span"
        }, (t = r.createElement("img", {
            alt: "",
            "aria-label": u.default.Messages.ROLE_ICON_ALT_TEXT.format({
                name: f
            }),
            className: i()(s.roleIcon, n, l({}, s.clickable, null != y)),
            height: m ? _ : void 0,
            src: o,
            width: _
        }), (null != c && (t = r.createElement("img", {
            alt: "",
            "aria-label": c.allNamesString,
            className: i()(s.roleIcon, n, l({}, s.clickable, null != y)),
            height: m ? _ : void 0,
            src: c.url,
            width: _
        })), null == y) ? r.createElement(a.FocusRing, {
            offset: {
                left: 5
            }
        }, t) : r.createElement(a.Clickable, {
            onClick: y,
            tag: "span",
            focusProps: {
                offset: {
                    left: 5
                }
            }
        }, t)))
    }
}