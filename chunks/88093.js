function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007"), n("702976"), n("424973");
    var s = n("446674"),
        i = n("913144"),
        r = n("568734"),
        a = n("299039"),
        o = n("26989"),
        d = n("305961"),
        u = n("697218"),
        l = n("49111"),
        f = n("657944");
    let _ = {
            notClaimed: !1,
            notEmailVerified: !1,
            notPhoneVerified: !1,
            newAccount: !1,
            newMember: !1,
            canChat: !0
        },
        c = new Set,
        g = {};

    function m(e) {
        let t;
        h(e), c.add(e);
        let n = d.default.getGuild(e),
            s = u.default.getCurrentUser();
        if (null == n || n.verificationLevel === l.VerificationLevels.NONE || null == s || n.isOwner(s) || s.isPhoneVerified()) return;
        let a = o.default.getMember(n.id, s.id);
        if (null != a) {
            var _;
            if ((0, r.hasFlag)(null !== (_ = a.flags) && void 0 !== _ ? _ : 0, f.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
            let e = new Set;
            for (let t of a.roles) {
                let s = n.getRole(t);
                null != s && !s.managed && e.add(t)
            }
            let t = new Date("2022-12-02 00:00:00"),
                s = null == a.joinedAt || new Date(a.joinedAt) < t,
                i = n.hasFeature(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !s;
            if (!i && e.size > 0) return
        }
        let m = +s.createdAt + 6e4 * l.VerificationCriteria.ACCOUNT_AGE - Date.now(),
            v = +n.joinedAt + 6e4 * l.VerificationCriteria.MEMBER_AGE - Date.now(),
            E = n.verificationLevel >= l.VerificationLevels.LOW && !s.isClaimed(),
            p = !1,
            y = !1,
            T = !1,
            C = !1;
        !s.isPhoneVerified() && !s.isStaff() && (p = n.verificationLevel >= l.VerificationLevels.LOW && !s.verified, y = n.verificationLevel >= l.VerificationLevels.VERY_HIGH, T = n.verificationLevel >= l.VerificationLevels.MEDIUM && m > 0, C = n.verificationLevel >= l.VerificationLevels.HIGH && v > 0);
        let I = [];
        C && I.push(v), T && I.push(m), I.length > 0 && (t = setTimeout(() => i.default.dispatch({
            type: "GUILD_VERIFICATION_CHECK",
            guildId: e
        }), Math.max(...I))), g[e] = {
            notClaimed: E,
            notEmailVerified: p,
            notPhoneVerified: y,
            newAccount: T,
            newMember: C,
            canChat: !(E || p || y || T || C),
            accountDeadline: new Date(Date.now() + m),
            memberDeadline: new Date(Date.now() + v),
            timeoutRef: t
        }
    }

    function h(e) {
        let t = g[e];
        null != t && clearTimeout(t.timeoutRef), delete g[e]
    }

    function v(e) {
        c.delete(e.guild.id), m(e.guild.id)
    }
    class E extends s.default.Store {
        initialize() {
            this.waitFor(d.default, u.default)
        }
        getCheck(e) {
            var t;
            return !c.has(e) && m(e), null !== (t = g[e]) && void 0 !== t ? t : _
        }
        canChatInGuild(e) {
            return this.getCheck(e).canChat
        }
    }
    E.displayName = "GuildVerificationStore";
    var p = new E(i.default, {
        CONNECTION_OPEN: function() {
            for (let e in c.clear(), g) h(e)
        },
        CONNECTION_CLOSED: function() {
            a.default.keys(g).forEach(h)
        },
        CURRENT_USER_UPDATE: function() {
            c.clear()
        },
        GUILD_CREATE: v,
        GUILD_UPDATE: v,
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            h(t.id)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                user: s
            } = e;
            if (s.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            c.delete(n)
        },
        GUILD_VERIFICATION_CHECK: function(e) {
            let {
                guildId: t
            } = e;
            m(t)
        }
    })
}