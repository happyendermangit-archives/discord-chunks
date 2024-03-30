function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("56300"),
        u = n("784184"),
        s = n("372514"),
        l = n("830567"),
        c = n("264437"),
        f = n("877987"),
        d = n("941504"),
        _ = n("503923"),
        E = n("390965"),
        p = n("752266"),
        m = n("60541"),
        y = n("230797"),
        I = n("612830"),
        h = n("293173"),
        O = n("198087");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var S = [O, E, y, m, I, p, h];

    function v(e) {
        var t, n, o, a, s, l = e.userId;
        var c = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            E = c[1];
        r.useLayoutEffect(function() {
            !f && E(!0)
        }, [f]);
        return r.createElement("div", {
            className: _.wumpusWrapper
        }, r.createElement("div", {
            className: i()(_.wumpus, (o = {}, a = _.wumpusShown, s = f, a in o ? Object.defineProperty(o, a, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[a] = s, o))
        }, r.createElement("img", {
            className: _.wumpusImage,
            alt: d.default.Messages.IMG_ALT_ICON.format({
                name: d.default.Messages.WUMPUS
            }),
            src: S[parseInt(l.slice(-6), 10) % S.length]
        }), r.createElement(u.Text, {
            variant: "text-sm/normal"
        }, d.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP, "???")))
    }

    function g(e) {
        var t = e.user,
            n = e.setNote,
            o = e.canDM,
            i = e.onClose,
            u = (0, c.useUserProfileAnalyticsContext)().trackUserProfileAction,
            d = o && (0, l.isNewUser)(t) && !t.bot;
        return r.createElement(f.default, {
            className: _.section,
            lastSection: !0
        }, d && o ? r.createElement(v, {
            userId: t.id
        }) : null, o ? r.createElement(s.default, {
            className: _.messageInputContainer,
            inputClassName: _.messageInput,
            user: t,
            autoFocus: !a.isMobile && !n,
            onSend: function() {
                u({
                    action: "SEND_DIRECT_MESSAGE"
                }), null == i || i()
            }
        }) : null)
    }
}