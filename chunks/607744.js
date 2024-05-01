function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020"), n("653041");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("630388"),
        d = n("709054"),
        _ = n("271383"),
        c = n("430824"),
        E = n("594174"),
        I = n("981631"),
        T = n("372897");
    let f = {
            notClaimed: !1,
            notEmailVerified: !1,
            notPhoneVerified: !1,
            newAccount: !1,
            newMember: !1,
            canChat: !0
        },
        S = new Set,
        h = {};

    function A(e) {
        let t;
        m(e), S.add(e);
        let n = c.default.getGuild(e),
            i = E.default.getCurrentUser();
        if (null == n || n.verificationLevel === I.VerificationLevels.NONE || null == i || n.isOwner(i) || i.isPhoneVerified()) return;
        let r = _.default.getMember(n.id, i.id);
        if (null != r) {
            var a;
            if ((0, u.hasFlag)(null !== (a = r.flags) && void 0 !== a ? a : 0, T.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
            let e = new Set;
            for (let t of r.roles) {
                let i = c.default.getRole(n.id, t);
                null != i && !i.managed && e.add(t)
            }
            let t = new Date("2022-12-02 00:00:00"),
                i = null == r.joinedAt || new Date(r.joinedAt) < t;
            if (!(n.hasFeature(I.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i) && e.size > 0) return
        }
        let s = +i.createdAt + 6e4 * I.VerificationCriteria.ACCOUNT_AGE - Date.now(),
            o = +n.joinedAt + 6e4 * I.VerificationCriteria.MEMBER_AGE - Date.now(),
            d = n.verificationLevel >= I.VerificationLevels.LOW && !i.isClaimed(),
            f = !1,
            A = !1,
            N = !1,
            p = !1;
        !i.isPhoneVerified() && !i.isStaff() && (f = n.verificationLevel >= I.VerificationLevels.LOW && !i.verified, A = n.verificationLevel >= I.VerificationLevels.VERY_HIGH, N = n.verificationLevel >= I.VerificationLevels.MEDIUM && s > 0, p = n.verificationLevel >= I.VerificationLevels.HIGH && o > 0);
        let O = [];
        p && O.push(o), N && O.push(s), O.length > 0 && (t = setTimeout(() => l.default.dispatch({
            type: "GUILD_VERIFICATION_CHECK",
            guildId: e
        }), Math.max(...O))), h[e] = {
            notClaimed: d,
            notEmailVerified: f,
            notPhoneVerified: A,
            newAccount: N,
            newMember: p,
            canChat: !(d || f || A || N || p),
            accountDeadline: new Date(Date.now() + s),
            memberDeadline: new Date(Date.now() + o),
            timeoutRef: t
        }
    }

    function m(e) {
        let t = h[e];
        null != t && clearTimeout(t.timeoutRef), delete h[e]
    }

    function N(e) {
        S.delete(e.guild.id), A(e.guild.id)
    }
    class p extends(i = o.default.Store) {
        initialize() {
            this.waitFor(c.default, E.default)
        }
        getCheck(e) {
            var t;
            return !S.has(e) && A(e), null !== (t = h[e]) && void 0 !== t ? t : f
        }
        canChatInGuild(e) {
            return this.getCheck(e).canChat
        }
    }
    s = "GuildVerificationStore", (a = "displayName") in(r = p) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new p(l.default, {
        CONNECTION_OPEN: function() {
            for (let e in S.clear(), h) m(e)
        },
        CONNECTION_CLOSED: function() {
            d.default.keys(h).forEach(m)
        },
        CURRENT_USER_UPDATE: function() {
            S.clear()
        },
        GUILD_CREATE: N,
        GUILD_UPDATE: N,
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            m(t.id)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                user: i
            } = e;
            if (i.id !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            S.delete(n)
        },
        GUILD_VERIFICATION_CHECK: function(e) {
            let {
                guildId: t
            } = e;
            A(t)
        }
    })
}