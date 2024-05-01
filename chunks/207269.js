function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("524437"),
        r = n("570140"),
        a = n("147913"),
        s = n("605236"),
        o = n("430824"),
        l = n("496675"),
        u = n("619574"),
        d = n("317816"),
        _ = n("828312"),
        c = n("994840"),
        E = n("981631");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class T extends a.default {
        constructor(...e) {
            super(...e), I(this, "actions", {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e)
            }), I(this, "handleConnectionOpen", e => {
                let t = (0, c.getValorantUserSignupExperiment)("SignUpManager"),
                    n = (0, _.getValorantAdminSignupExperiment)("SignUpManager", !1),
                    a = (0, s.isDismissibleContentDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS),
                    o = (0, d.getGenshinUserSignupExperiment)("SignUpManager"),
                    l = (0, u.getGenshinAdminSignupExperiment)("SignUpManager", !1),
                    E = (0, s.isDismissibleContentDismissed)(i.DismissibleContent.GENSHIN_USER_SIGNUPS);
                if (t && !n && !a) {
                    r.default.dispatch({
                        type: "ENABLE_USER_SIGN_UP",
                        key: "valorant-user"
                    });
                    return
                }
                if (o && !l && !E) {
                    r.default.dispatch({
                        type: "ENABLE_USER_SIGN_UP",
                        key: "genshin-user"
                    });
                    return
                }
            }), I(this, "handleChannelSelect", e => {
                let {
                    guildId: t
                } = e;
                if (null == t) return;
                let n = (0, s.isDismissibleContentDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS),
                    a = (0, s.isDismissibleContentDismissed)(i.DismissibleContent.GENSHIN_USER_SIGNUPS);
                if (n && a) return;
                let d = (0, _.getValorantAdminSignupExperiment)("SignUpManager"),
                    c = (0, u.getGenshinAdminSignupExperiment)("SignUpManager");
                if (!d && !c) return;
                let I = o.default.getGuild(t);
                if (null != I) {
                    if (I.hasFeature(E.GuildFeatures.VALORANT_L30) && l.default.can(E.Permissions.MANAGE_GUILD, I) && !n) {
                        r.default.dispatch({
                            type: "ENABLE_GUILD_SIGN_UP",
                            key: "valorant-admin",
                            guildId: t
                        });
                        return
                    }
                    if (I.hasFeature(E.GuildFeatures.GENSHIN_L30) && l.default.can(E.Permissions.MANAGE_GUILD, I) && !a) {
                        r.default.dispatch({
                            type: "ENABLE_GUILD_SIGN_UP",
                            key: "genshin-admin",
                            guildId: t
                        });
                        return
                    }
                }
            })
        }
    }
    t.default = new T
}