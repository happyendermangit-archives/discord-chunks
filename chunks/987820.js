function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("961947"),
        u = n("264518"),
        s = n("654370"),
        l = n("335911"),
        c = n("545072"),
        f = n("481971"),
        d = n("281767"),
        _ = n("941504");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function() {
        var e, t, n = function() {
            null !== T.current && ((0, i.closeModal)(T.current), T.current = null)
        };
        var p = (e = (0, o.useStateFromStoresArray)([s.default], function() {
                return [s.default.canShowAdminWarning, s.default.getVisibleGame()]
            }, []), t = 2, function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
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
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            m = p[0],
            y = p[1],
            I = (0, o.useStateFromStores)([c.default], function() {
                return c.default.isConnected()
            }, []),
            h = (0, o.useStateFromStores)([l.default], function() {
                return l.default.getMode() === d.InputModes.PUSH_TO_TALK
            }, []),
            O = null != y && y.elevated && I && h && m,
            T = r.useRef(null);
        return r.useEffect(function() {
            return O ? T.current = (0, i.openModal)(function(e) {
                    return r.createElement(u.default, function(e) {
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
                    }({
                        title: _.default.Messages.PTT_PERMISSION_TITLE,
                        body: _.default.Messages.PTT_PERMISSION_BODY.format({
                            game: null == y ? void 0 : y.name
                        }),
                        secondaryConfirmText: _.default.Messages.DONT_SHOW_AGAIN,
                        onConfirmSecondary: function() {
                            return a.default.clearPTTAdminWarning()
                        },
                        onConfirm: function() {
                            return window.open(f.default.getArticleURL(d.HelpdeskArticles.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank")
                        },
                        confirmText: _.default.Messages.HELP_DESK
                    }, e))
                }) : n(),
                function() {
                    n()
                }
        }, [y, O]), null
    }
}