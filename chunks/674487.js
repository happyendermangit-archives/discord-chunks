function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007");
    var t = E("151426"),
        o = E("913144"),
        n = E("689988"),
        r = E("10641"),
        a = E("427957");
    class i extends n.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
            }, this.handleConnectionOpen = e => {
                let _ = (0, a.getValorantUserSignupExperiment)("SignUpManager"),
                    E = (0, r.isDismissibleContentDismissed)(t.DismissibleContent.GAME_ONE_USER_SIGNUPS);
                _ && !E && o.default.dispatch({
                    type: "ENABLE_USER_SIGN_UP",
                    key: "valorant-user"
                })
            }
        }
    }
    var I = new i
}