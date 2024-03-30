function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("870331"),
        o = n("435801"),
        i = n("935776"),
        a = n("281767"),
        u = [i.SpotifyActionTypes.USER_ACTIVITY_SYNC, i.SpotifyActionTypes.EMBED_SYNC];

    function s(e, t, n, i) {
        r.default.track(a.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
            type: e,
            source: i,
            is_premium: (0, o.isSpotifyPremium)(),
            party_id: u.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
            other_user_id: t.id
        })
    }
}