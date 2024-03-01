function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getName: function() {
            return E
        },
        useName: function() {
            return p
        },
        humanizeStatus: function() {
            return _
        },
        ageEligibleForPremiumUpsell: function() {
            return m
        },
        isNewUser: function() {
            return T
        },
        getUserTag: function() {
            return I
        },
        useDirectMessageRecipient: function() {
            return C
        },
        default: function() {
            return v
        }
    }), n("70102");
    var i = n("446674"),
        r = n("102985"),
        s = n("697218"),
        a = n("49111"),
        o = n("782340");
    let l = e => "".concat(e[0], "..."),
        u = e => "@".concat(e),
        c = {
            mode: "full",
            decoration: "never",
            identifiable: "auto",
            forcePomelo: !1
        };

    function d(e) {
        return !!(null != e && e.length > 0)
    }

    function f(e) {
        if (d(e.global_name)) return e.global_name;
        if (d(e.globalName)) return e.globalName;
        if (d(e.username)) return e.username;
        else return "???"
    }

    function E(e) {
        var t;
        if (null == e) return;
        let n = r.default.hidePersonalInformation,
            i = f(e);
        return n && i.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (i = l(i)), i
    }

    function p(e) {
        var t;
        let n = (0, i.useStateFromStores)([r.default], () => r.default.hidePersonalInformation);
        if (null == e) return;
        let s = f(e);
        return n && s.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (s = l(s)), s
    }

    function h(e) {
        if (null != e) {
            if (d(e.globalName)) return e.globalName;
            else if (d(e.global_name)) return e.global_name;
            else return
        }
    }

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case a.StatusTypes.ONLINE:
                return t ? o.default.Messages.STATUS_ONLINE_MOBILE : o.default.Messages.STATUS_ONLINE;
            case a.StatusTypes.OFFLINE:
                return o.default.Messages.STATUS_OFFLINE;
            case a.StatusTypes.IDLE:
                return o.default.Messages.STATUS_IDLE;
            case a.StatusTypes.DND:
                return o.default.Messages.STATUS_DND;
            case a.StatusTypes.INVISIBLE:
                return o.default.Messages.STATUS_INVISIBLE;
            case a.StatusTypes.STREAMING:
                return o.default.Messages.STATUS_STREAMING;
            case a.StatusTypes.UNKNOWN:
            default:
                return null
        }
    }

    function S(e, t) {
        let {
            maxDaysOld: n,
            minDaysOld: i = 0
        } = t;
        if (null == e) return !1;
        let r = Date.now() - e.createdAt.getTime();
        return (null == n || !!(r <= 864e5 * n)) && !!(r >= 864e5 * i) || !1
    }

    function m(e) {
        return !S(e, {
            minDaysOld: 0,
            maxDaysOld: 30
        })
    }

    function T(e) {
        return S(e, {
            minDaysOld: 0,
            maxDaysOld: 7
        })
    }

    function g(e, t, n) {
        if (null == e) return o.default.Messages.UNKNOWN_USER;
        if (!d(e.username)) return "???";
        let i = n;
        if ("always" === t.identifiable ? i = !1 : "never" === t.identifiable && (i = !0), "0" !== e.discriminator && e.discriminator !== a.NON_USER_BOT_DISCRIMINATOR && !t.forcePomelo) return "username" === t.mode ? e.username : i ? e.username : "".concat(e.username, "#").concat(e.discriminator);
        let r = i ? l(e.username) : e.username;
        return "never" !== t.decoration ? u(r) : r
    }

    function I(e, t) {
        let n = {
                ...c,
                ...t
            },
            i = "auto" !== n.identifiable || r.default.hidePersonalInformation;
        return g(e, n, i)
    }

    function C(e) {
        return (0, i.useStateFromStores)([s.default], () => {
            if (null != e) return e.isPrivate() && e.isDM() ? s.default.getUser(e.getRecipientId()) : null
        })
    }
    var v = {
        getName: E,
        useName: p,
        getUserTag: I,
        useUserTag: function(e, t) {
            let n = {
                    ...c,
                    ...t
                },
                s = (0, i.useStateFromStores)([r.default], () => r.default.hidePersonalInformation);
            return g(e, n, s)
        },
        getFormattedName: function(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return "???";
            let i = h(e),
                r = n ? I(e) : null !== (t = e.username) && void 0 !== t ? t : "???";
            return i === r ? i : null != i ? "".concat(i, " (").concat(r, ")") : r
        },
        getGlobalName: h,
        humanizeStatus: _,
        useDirectMessageRecipient: C
    }
}