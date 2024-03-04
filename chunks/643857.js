function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007");
    var t = E("689988"),
        o = E("537325"),
        n = E("894887"),
        r = E("760797"),
        a = E("49111");
    class i extends t.default {
        async handleChannelCreate(e) {
            let {
                channel: _
            } = e;
            (0, n.isEligibleForMidjourneyRedirect)(_) && (await (0, n.hasRedirectedToGuild)(r.MIDJOURNEY_GUILD_ID), (0, o.default)(a.Routes.CHANNEL(null, _.id)))
        }
        constructor(...e) {
            super(...e), this.actions = {
                CHANNEL_CREATE: this.handleChannelCreate
            }
        }
    }
    var I = new i
}