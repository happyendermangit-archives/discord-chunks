function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return N
        }
    }), E("222007");
    var t = E("151426"),
        o = E("913144"),
        n = E("689988"),
        r = E("10641"),
        a = E("305961"),
        i = E("957255"),
        I = E("432174"),
        s = E("427957"),
        T = E("49111");
    class S extends n.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e)
            }, this.handleConnectionOpen = e => {
                let _ = (0, s.getValorantUserSignupExperiment)("SignUpManager"),
                    E = (0, I.getValorantAdminSignupExperiment)("SignUpManager", !1),
                    n = (0, r.isDismissibleContentDismissed)(t.DismissibleContent.GAME_ONE_USER_SIGNUPS);
                _ && !E && !n && o.default.dispatch({
                    type: "ENABLE_USER_SIGN_UP",
                    key: "valorant-user"
                })
            }, this.handleChannelSelect = e => {
                let {
                    guildId: _
                } = e;
                if (null == _) return;
                let E = (0, r.isDismissibleContentDismissed)(t.DismissibleContent.GAME_ONE_USER_SIGNUPS);
                if (E) return;
                let n = (0, I.getValorantAdminSignupExperiment)("SignUpManager");
                if (!n) return;
                let s = a.default.getGuild(_);
                if (null != s) s.hasFeature(T.GuildFeatures.VALORANT_L30) && i.default.can(T.Permissions.MANAGE_GUILD, s) && o.default.dispatch({
                    type: "ENABLE_GUILD_SIGN_UP",
                    key: "valorant-admin",
                    guildId: _
                })
            }
        }
    }
    var N = new S
}