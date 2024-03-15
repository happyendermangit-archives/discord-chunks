function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getName: function() {
            return _
        },
        useName: function() {
            return E
        },
        humanizeStatus: function() {
            return g
        },
        ageEligibleForPremiumUpsell: function() {
            return p
        },
        isNewUser: function() {
            return S
        },
        getUserTag: function() {
            return T
        },
        useDirectMessageRecipient: function() {
            return I
        },
        default: function() {
            return A
        }
    }), n("70102");
    var i = n("446674"),
        s = n("102985"),
        r = n("697218"),
        a = n("49111"),
        o = n("782340");
    let l = e => "".concat(e[0], "..."),
        u = e => "@".concat(e),
        d = {
            mode: "full",
            decoration: "never",
            identifiable: "auto",
            forcePomelo: !1
        };

    function c(e) {
        return !!(null != e && e.length > 0)
    }

    function f(e) {
        if (c(e.global_name)) return e.global_name;
        if (c(e.globalName)) return e.globalName;
        if (c(e.username)) return e.username;
        else return "???"
    }

    function _(e) {
        var t;
        if (null == e) return;
        let n = s.default.hidePersonalInformation,
            i = f(e);
        return n && i.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (i = l(i)), i
    }

    function E(e) {
        var t;
        let n = (0, i.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        if (null == e) return;
        let r = f(e);
        return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (r = l(r)), r
    }

    function h(e) {
        if (null != e) {
            if (c(e.globalName)) return e.globalName;
            else if (c(e.global_name)) return e.global_name;
            else return
        }
    }

    function g(e) {
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

    function m(e, t) {
        let {
            maxDaysOld: n,
            minDaysOld: i = 0
        } = t;
        if (null == e) return !1;
        let s = Date.now() - e.createdAt.getTime();
        return (null == n || !!(s <= 864e5 * n)) && !!(s >= 864e5 * i) || !1
    }

    function p(e) {
        return !m(e, {
            minDaysOld: 0,
            maxDaysOld: 30
        })
    }

    function S(e) {
        return m(e, {
            minDaysOld: 0,
            maxDaysOld: 7
        })
    }

    function v(e, t, n) {
        if (null == e) return o.default.Messages.UNKNOWN_USER;
        if (!c(e.username)) return "???";
        let i = n;
        if ("always" === t.identifiable ? i = !1 : "never" === t.identifiable && (i = !0), "0" !== e.discriminator && e.discriminator !== a.NON_USER_BOT_DISCRIMINATOR && !t.forcePomelo) return "username" === t.mode ? e.username : i ? e.username : "".concat(e.username, "#").concat(e.discriminator);
        let s = i ? l(e.username) : e.username;
        return "never" !== t.decoration ? u(s) : s
    }

    function T(e, t) {
        let n = {
                ...d,
                ...t
            },
            i = "auto" !== n.identifiable || s.default.hidePersonalInformation;
        return v(e, n, i)
    }

    function I(e) {
        return (0, i.useStateFromStores)([r.default], () => {
            if (null != e) return e.isPrivate() && e.isDM() ? r.default.getUser(e.getRecipientId()) : null
        })
    }
    var A = {
        getName: _,
        useName: E,
        getUserTag: T,
        useUserTag: function(e, t) {
            let n = {
                    ...d,
                    ...t
                },
                r = (0, i.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
            return v(e, n, r)
        },
        getFormattedName: function(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return "???";
            let i = h(e),
                s = n ? T(e) : null !== (t = e.username) && void 0 !== t ? t : "???";
            return i === s ? i : null != i ? "".concat(i, " (").concat(s, ")") : s
        },
        getGlobalName: h,
        humanizeStatus: g,
        useDirectMessageRecipient: I
    }
}