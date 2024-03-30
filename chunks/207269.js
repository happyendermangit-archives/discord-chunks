function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("524437"),
        r = n("570140"),
        s = n("147913"),
        a = n("605236"),
        o = n("430824"),
        l = n("496675"),
        u = n("828312"),
        d = n("994840"),
        _ = n("981631");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class E extends s.default {
        constructor(...e) {
            super(...e), c(this, "actions", {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e)
            }), c(this, "handleConnectionOpen", e => {
                let t = (0, d.getValorantUserSignupExperiment)("SignUpManager"),
                    n = (0, u.getValorantAdminSignupExperiment)("SignUpManager", !1),
                    s = (0, a.isDismissibleContentDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS);
                t && !n && !s && r.default.dispatch({
                    type: "ENABLE_USER_SIGN_UP",
                    key: "valorant-user"
                })
            }), c(this, "handleChannelSelect", e => {
                let {
                    guildId: t
                } = e;
                if (null == t || (0, a.isDismissibleContentDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS) || !(0, u.getValorantAdminSignupExperiment)("SignUpManager")) return;
                let n = o.default.getGuild(t);
                if (null != n) n.hasFeature(_.GuildFeatures.VALORANT_L30) && l.default.can(_.Permissions.MANAGE_GUILD, n) && r.default.dispatch({
                    type: "ENABLE_GUILD_SIGN_UP",
                    key: "valorant-admin",
                    guildId: t
                })
            })
        }
    }
    t.default = new E
}