function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ageEligibleForPremiumUpsell: function() {
            return I
        },
        getName: function() {
            return _
        },
        getUserTag: function() {
            return T
        },
        humanizeStatus: function() {
            return m
        },
        isNewUser: function() {
            return h
        },
        useDirectMessageRecipient: function() {
            return S
        },
        useName: function() {
            return E
        }
    });
    var r = n("898511"),
        o = n("930949"),
        i = n("208454"),
        a = n("281767"),
        u = n("941504");

    function s(e) {
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
    var l = function(e) {
            return "".concat(e[0], "...")
        },
        c = {
            mode: "full",
            decoration: "never",
            identifiable: "auto",
            forcePomelo: !1
        };

    function f(e) {
        return !!(null != e && e.length > 0)
    }

    function d(e) {
        if (f(e.global_name)) return e.global_name;
        if (f(e.globalName)) return e.globalName;
        if (f(e.username)) return e.username;
        else return "???"
    }

    function _(e) {
        if (null != e) {
            var t, n = o.default.hidePersonalInformation,
                r = d(e);
            return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (r = l(r)), r
        }
    }

    function E(e) {
        var t, n = (0, r.useStateFromStores)([o.default], function() {
            return o.default.hidePersonalInformation
        });
        if (null != e) {
            var i = d(e);
            return n && i.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (i = l(i)), i
        }
    }

    function p(e) {
        if (null != e) {
            if (f(e.globalName)) return e.globalName;
            else if (f(e.global_name)) return e.global_name;
            else return
        }
    }

    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case a.StatusTypes.ONLINE:
                return t ? u.default.Messages.STATUS_ONLINE_MOBILE : u.default.Messages.STATUS_ONLINE;
            case a.StatusTypes.OFFLINE:
                return u.default.Messages.STATUS_OFFLINE;
            case a.StatusTypes.IDLE:
                return u.default.Messages.STATUS_IDLE;
            case a.StatusTypes.DND:
                return u.default.Messages.STATUS_DND;
            case a.StatusTypes.INVISIBLE:
                return u.default.Messages.STATUS_INVISIBLE;
            case a.StatusTypes.STREAMING:
                return u.default.Messages.STATUS_STREAMING;
            case a.StatusTypes.UNKNOWN:
            default:
                return null
        }
    }

    function y(e, t) {
        var n = t.maxDaysOld,
            r = t.minDaysOld;
        if (null == e) return !1;
        var o = Date.now() - e.createdAt.getTime();
        return (null == n || !!(o <= 864e5 * n)) && !!(o >= 864e5 * (void 0 === r ? 0 : r)) || !1
    }

    function I(e) {
        return !y(e, {
            minDaysOld: 0,
            maxDaysOld: 30
        })
    }

    function h(e) {
        return y(e, {
            minDaysOld: 0,
            maxDaysOld: 7
        })
    }

    function O(e, t, n) {
        if (null == e) return u.default.Messages.UNKNOWN_USER;
        if (!f(e.username)) return "???";
        var r, o = n;
        if ("always" === t.identifiable ? o = !1 : "never" === t.identifiable && (o = !0), "0" !== e.discriminator && e.discriminator !== a.NON_USER_BOT_DISCRIMINATOR && !t.forcePomelo) return "username" === t.mode ? e.username : o ? e.username : "".concat(e.username, "#").concat(e.discriminator);
        var i = o ? l(e.username) : e.username;
        return "never" !== t.decoration ? (r = i, "@".concat(r)) : i
    }

    function T(e, t) {
        var n = s({}, c, t),
            r = "auto" !== n.identifiable || o.default.hidePersonalInformation;
        return O(e, n, r)
    }

    function S(e) {
        return (0, r.useStateFromStores)([i.default], function() {
            if (null != e) return e.isPrivate() && e.isDM() ? i.default.getUser(e.getRecipientId()) : null
        })
    }
    t.default = {
        getName: _,
        useName: E,
        getUserTag: T,
        useUserTag: function(e, t) {
            return O(e, s({}, c, t), (0, r.useStateFromStores)([o.default], function() {
                return o.default.hidePersonalInformation
            }))
        },
        getFormattedName: function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return "???";
            var r = p(e),
                o = n ? T(e) : null !== (t = e.username) && void 0 !== t ? t : "???";
            return r === o ? r : null != r ? "".concat(r, " (").concat(o, ")") : o
        },
        getGlobalName: p,
        humanizeStatus: m,
        useDirectMessageRecipient: S
    }
}