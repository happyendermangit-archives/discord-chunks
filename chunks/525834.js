function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("531822"),
        l = n("465260"),
        c = n("722347"),
        f = n("208454"),
        d = n("903716"),
        _ = n("941504"),
        E = n("735619");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = r.memo(function(e) {
        var t, n, o, m, y = e.user,
            I = (0, a.useStateFromStores)([f.default], function() {
                return f.default.getCurrentUser()
            }),
            h = (0, a.useStateFromStores)([d.default], function() {
                return d.default.getMutualFriends(y.id)
            });
        r.useEffect(function() {
            null == h && (0, s.fetchMutualFriends)(y.id)
        }, [h, y.id]);
        var O = r.useMemo(function() {
                var e;
                return null !== (e = null == h ? void 0 : h.slice(0, 3).map(function(e) {
                    return e.user
                })) && void 0 !== e ? e : []
            }, [h]),
            T = (0, a.useStateFromStores)([d.default], function() {
                return d.default.getMutualGuilds(y.id)
            });
        var S = (t = (0, a.useStateFromStoresArray)([d.default], function() {
                return [d.default.isFetchingFriends(y.id), d.default.isFetchingProfile(y.id)]
            }), n = 2, function(e) {
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
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            v = S[0],
            g = S[1];
        return y.id === (null == I ? void 0 : I.id) || (null == h ? void 0 : h.length) === 0 && (null == T ? void 0 : T.length) === 0 ? null : v || g ? r.createElement("div", {
            className: i()(E.spinnerContainer)
        }, r.createElement(u.Spinner, {
            className: E.spinner
        })) : r.createElement("div", {
            className: E.container
        }, r.createElement(c.default, {
            partySize: {
                knownSize: O.length,
                totalSize: Math.min(O.length, 3)
            },
            maxAvatarsShown: 3,
            members: O
        }), r.createElement(u.Text, {
            className: (null == h ? void 0 : h.length) === 0 ? void 0 : E.mutualFriendsText,
            variant: "text-xs/normal"
        }, _.default.Messages.MUTUAL_FRIENDS_COUNT.format({
            count: "".concat(null !== (o = null == h ? void 0 : h.length) && void 0 !== o ? o : 0)
        })), r.createElement(l.default, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: E.dotSpacer
        }), r.createElement(u.Text, {
            variant: "text-xs/normal"
        }, _.default.Messages.MUTUAL_GUILDS_COUNT.format({
            count: "".concat(null !== (m = null == T ? void 0 : T.length) && void 0 !== m ? m : 0)
        })))
    })
}