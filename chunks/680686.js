function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("626135"),
        r = n("647162"),
        s = n("616922"),
        a = n("981631");
    let o = [s.SpotifyActionTypes.USER_ACTIVITY_SYNC, s.SpotifyActionTypes.EMBED_SYNC];

    function l(e, t, n, s) {
        i.default.track(a.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
            type: e,
            source: s,
            is_premium: (0, r.isSpotifyPremium)(),
            party_id: o.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
            other_user_id: t.id
        })
    }
}