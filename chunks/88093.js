function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007"), n("702976"), n("424973");
    var i = n("446674"),
        s = n("913144"),
        r = n("568734"),
        a = n("299039"),
        o = n("26989"),
        l = n("305961"),
        u = n("697218"),
        d = n("49111"),
        c = n("657944");
    let _ = {
            notClaimed: !1,
            notEmailVerified: !1,
            notPhoneVerified: !1,
            newAccount: !1,
            newMember: !1,
            canChat: !0
        },
        f = new Set,
        E = {};

    function h(e) {
        let t;
        g(e), f.add(e);
        let n = l.default.getGuild(e),
            i = u.default.getCurrentUser();
        if (null == n || n.verificationLevel === d.VerificationLevels.NONE || null == i || n.isOwner(i) || i.isPhoneVerified()) return;
        let a = o.default.getMember(n.id, i.id);
        if (null != a) {
            var _;
            if ((0, r.hasFlag)(null !== (_ = a.flags) && void 0 !== _ ? _ : 0, c.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
            let e = new Set;
            for (let t of a.roles) {
                let i = l.default.getRole(n.id, t);
                null != i && !i.managed && e.add(t)
            }
            let t = new Date("2022-12-02 00:00:00"),
                i = null == a.joinedAt || new Date(a.joinedAt) < t,
                s = n.hasFeature(d.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
            if (!s && e.size > 0) return
        }
        let h = +i.createdAt + 6e4 * d.VerificationCriteria.ACCOUNT_AGE - Date.now(),
            m = +n.joinedAt + 6e4 * d.VerificationCriteria.MEMBER_AGE - Date.now(),
            p = n.verificationLevel >= d.VerificationLevels.LOW && !i.isClaimed(),
            S = !1,
            v = !1,
            T = !1,
            I = !1;
        !i.isPhoneVerified() && !i.isStaff() && (S = n.verificationLevel >= d.VerificationLevels.LOW && !i.verified, v = n.verificationLevel >= d.VerificationLevels.VERY_HIGH, T = n.verificationLevel >= d.VerificationLevels.MEDIUM && h > 0, I = n.verificationLevel >= d.VerificationLevels.HIGH && m > 0);
        let A = [];
        I && A.push(m), T && A.push(h), A.length > 0 && (t = setTimeout(() => s.default.dispatch({
            type: "GUILD_VERIFICATION_CHECK",
            guildId: e
        }), Math.max(...A))), E[e] = {
            notClaimed: p,
            notEmailVerified: S,
            notPhoneVerified: v,
            newAccount: T,
            newMember: I,
            canChat: !(p || S || v || T || I),
            accountDeadline: new Date(Date.now() + h),
            memberDeadline: new Date(Date.now() + m),
            timeoutRef: t
        }
    }

    function g(e) {
        let t = E[e];
        null != t && clearTimeout(t.timeoutRef), delete E[e]
    }

    function m(e) {
        f.delete(e.guild.id), h(e.guild.id)
    }
    class p extends i.default.Store {
        initialize() {
            this.waitFor(l.default, u.default)
        }
        getCheck(e) {
            var t;
            return !f.has(e) && h(e), null !== (t = E[e]) && void 0 !== t ? t : _
        }
        canChatInGuild(e) {
            return this.getCheck(e).canChat
        }
    }
    p.displayName = "GuildVerificationStore";
    var S = new p(s.default, {
        CONNECTION_OPEN: function() {
            for (let e in f.clear(), E) g(e)
        },
        CONNECTION_CLOSED: function() {
            a.default.keys(E).forEach(g)
        },
        CURRENT_USER_UPDATE: function() {
            f.clear()
        },
        GUILD_CREATE: m,
        GUILD_UPDATE: m,
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            g(t.id)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                user: i
            } = e;
            if (i.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            f.delete(n)
        },
        GUILD_VERIFICATION_CHECK: function(e) {
            let {
                guildId: t
            } = e;
            h(t)
        }
    })
}