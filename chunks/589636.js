function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007");
    var t = E("689988"),
        o = E("704341"),
        n = E("393414"),
        r = E("49111");

    function i(e) {
        var _, E, t;
        let {
            guild: i
        } = e.invite;
        if (null != i && (null == i ? void 0 : null === (_ = i.features) || void 0 === _ ? void 0 : _.includes(r.GuildFeatures.HUB))) {
            o.default.onOpenHubInvite(e.invite);
            return
        }
        null != i && (null == i ? void 0 : null === (E = i.features) || void 0 === E ? void 0 : E.includes(r.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == i ? void 0 : null === (t = i.features) || void 0 === t ? void 0 : t.includes(r.GuildFeatures.PREVIEW_ENABLED)) && (0, n.transitionTo)(r.Routes.GUILD_MEMBER_VERIFICATION(i.id, e.invite.code))
    }
    class a extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                INVITE_ACCEPT_SUCCESS: i
            }
        }
    }
    var I = new a
}