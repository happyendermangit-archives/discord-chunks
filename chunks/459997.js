function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("14782"),
        a = n("751848"),
        u = n("784184"),
        s = n("523263"),
        l = n("291619"),
        c = n("622780"),
        f = n("510077"),
        d = n("651188"),
        _ = n("906885"),
        E = n("731616"),
        p = n("556777");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var y = function() {
        var e = (0, f.useIsDismissibleContentDismissed)(i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
            t = (0, o.useStateFromStores)([c.default], function() {
                return c.default.syncProfileThemeWithUserTheme
            }),
            n = (0, s.default)(),
            u = r.useContext(_.UserProfileContext).profileTheme,
            l = (0, a.isThemeDark)(n) && (0, a.isThemeLight)(u);
        return !e && !t && l
    };
    t.default = function(e) {
        var t, n, o = e.onTooltipClose,
            i = r.useContext(_.UserProfileContext).profileType === E.UserProfileTypes.POPOUT,
            a = y();
        var s = (t = r.useState(!i && a), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = s[0],
            f = s[1];
        return (0, l.default)(function() {
            return f(a)
        }, i ? 300 : null), r.createElement(u.Popout, {
            shouldShow: c,
            position: "left",
            align: "center",
            spacing: 32,
            ignoreModalClicks: !0,
            onRequestClose: function() {
                !i && f(!1)
            },
            renderPopout: function(e) {
                var t = e.position;
                return r.createElement(d.default, {
                    position: null != t ? t : "left",
                    onClose: o
                })
            }
        }, function() {
            return r.createElement("span", {
                className: p.__invalid_hidden
            })
        })
    }
}