function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("626135"),
        r = n("647162"),
        a = n("616922"),
        s = n("981631");
    let o = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

    function l(e, t, n, a) {
        i.default.track(s.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
            type: e,
            source: a,
            is_premium: (0, r.isSpotifyPremium)(),
            party_id: o.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
            other_user_id: t.id
        })
    }
}