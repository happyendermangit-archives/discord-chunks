function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return d
        }
    });
    var n = i("599110"),
        l = i("884385"),
        a = i("450484"),
        u = i("49111");
    let r = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

    function d(e, t, i, a) {
        n.default.track(u.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
            type: e,
            source: a,
            is_premium: (0, l.isSpotifyPremium)(),
            party_id: r.includes(e) && (null == i ? void 0 : i.party) != null ? i.party.id : null,
            other_user_id: t.id
        })
    }
}