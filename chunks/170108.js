function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return d
        }
    });
    var n = i("599110"),
        l = i("884385"),
        a = i("450484"),
        r = i("49111");
    let u = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

    function d(t, e, i, a) {
        n.default.track(r.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
            type: t,
            source: a,
            is_premium: (0, l.isSpotifyPremium)(),
            party_id: u.includes(t) && (null == i ? void 0 : i.party) != null ? i.party.id : null,
            other_user_id: e.id
        })
    }
}