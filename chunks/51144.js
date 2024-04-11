function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ageEligibleForPremiumUpsell: function() {
            return h
        },
        getName: function() {
            return E
        },
        getUserTag: function() {
            return N
        },
        humanizeStatus: function() {
            return f
        },
        isNewUser: function() {
            return A
        },
        useDirectMessageRecipient: function() {
            return O
        },
        useName: function() {
            return I
        }
    }), n("411104");
    var i = n("442837"),
        r = n("246946"),
        s = n("594174"),
        a = n("981631"),
        o = n("689938");
    let l = e => "".concat(e[0], "..."),
        u = e => "@".concat(e),
        d = {
            mode: "full",
            decoration: "never",
            identifiable: "auto",
            forcePomelo: !1
        };

    function _(e) {
        return !!(null != e && e.length > 0)
    }

    function c(e) {
        if (_(e.global_name)) return e.global_name;
        if (_(e.globalName)) return e.globalName;
        if (_(e.username)) return e.username;
        else return "???"
    }

    function E(e) {
        var t;
        if (null == e) return;
        let n = r.default.hidePersonalInformation,
            i = c(e);
        return n && i.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (i = l(i)), i
    }

    function I(e) {
        var t;
        let n = (0, i.useStateFromStores)([r.default], () => r.default.hidePersonalInformation);
        if (null == e) return;
        let s = c(e);
        return n && s.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (s = l(s)), s
    }

    function T(e) {
        if (null != e) {
            if (_(e.globalName)) return e.globalName;
            else if (_(e.global_name)) return e.global_name;
            else return
        }
    }

    function f(e) {
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

    function h(e) {
        return !S(e, {
            minDaysOld: 0,
            maxDaysOld: 30
        })
    }

    function A(e) {
        return S(e, {
            minDaysOld: 0,
            maxDaysOld: 7
        })
    }

    function m(e, t, n) {
        if (null == e) return o.default.Messages.UNKNOWN_USER;
        if (!_(e.username)) return "???";
        let i = n;
        if ("always" === t.identifiable ? i = !1 : "never" === t.identifiable && (i = !0), "0" !== e.discriminator && e.discriminator !== a.NON_USER_BOT_DISCRIMINATOR && !t.forcePomelo) return "username" === t.mode ? e.username : i ? e.username : "".concat(e.username, "#").concat(e.discriminator);
        let r = i ? l(e.username) : e.username;
        return "never" !== t.decoration ? u(r) : r
    }

    function N(e, t) {
        let n = {
                ...d,
                ...t
            },
            i = "auto" !== n.identifiable || r.default.hidePersonalInformation;
        return m(e, n, i)
    }

    function O(e) {
        return (0, i.useStateFromStores)([s.default], () => {
            if (null != e) return e.isPrivate() && e.isDM() ? s.default.getUser(e.getRecipientId()) : null
        })
    }
    t.default = {
        getName: E,
        useName: I,
        getUserTag: N,
        useUserTag: function(e, t) {
            let n = {
                ...d,
                ...t
            };
            return m(e, n, (0, i.useStateFromStores)([r.default], () => r.default.hidePersonalInformation))
        },
        getFormattedName: function(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return "???";
            let i = T(e),
                r = n ? N(e) : null !== (t = e.username) && void 0 !== t ? t : "???";
            return i === r ? i : null != i ? "".concat(i, " (").concat(r, ")") : r
        },
        getGlobalName: T,
        humanizeStatus: f,
        useDirectMessageRecipient: O
    }
}