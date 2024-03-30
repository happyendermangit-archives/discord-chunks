function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("626399"),
        i = n("784184"),
        a = n("870331"),
        u = n("8558"),
        s = n("281767"),
        l = n("941504");

    function c(e) {
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
    }
    t.default = function(e) {
        var t = e.href,
            n = e.className,
            f = e.iconClassName,
            d = e.rel,
            _ = e.target,
            E = e.mimeType,
            p = e.fileName,
            m = e.focusProps,
            y = e.onClick,
            I = function(e, t) {
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
            }(e, ["href", "className", "iconClassName", "rel", "target", "mimeType", "fileName", "focusProps", "onClick"]),
            h = r.useMemo(function() {
                return o.designConfig.getDefaultLinkInterceptor(t)
            }, [t]),
            O = r.useCallback(function(e) {
                a.default.track(s.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == E ? void 0 : E[0],
                    attachment_subtype: null == E ? void 0 : E[1]
                }), null == y || y(), null == h || h(e)
            }, [h, E, y]);
        return null != p ? r.createElement(i.Anchor, c({
            href: t,
            onClick: O,
            target: _,
            rel: d,
            className: n,
            "aria-label": l.default.Messages.DOWNLOAD,
            focusProps: m
        }, I), p) : r.createElement(i.Anchor, c({
            href: t,
            onClick: O,
            target: _,
            rel: d,
            className: n,
            "aria-label": l.default.Messages.DOWNLOAD,
            focusProps: m
        }, I), r.createElement(u.default, {
            className: f
        }))
    }
}