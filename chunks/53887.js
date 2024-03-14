function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return l
        }
    });
    var n = i("884385");

    function l(t, e, i, l) {
        var a, u, r;
        let d = t.hasConnectedAccount(),
            s = (0, n.isSpotifyPlayable)(t),
            o = t.getTrack(),
            c = t.getSyncingWith(),
            f = t.getActivity(),
            _ = null !== (r = null !== (u = null == o ? void 0 : o.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : t.getLastPlayedTrackId();
        return {
            user: i,
            activity: l,
            hasSpotifyAccount: d,
            canPlaySpotify: s,
            notPlayable: d && !s,
            syncingWithParty: (null == f ? void 0 : f.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === f.party.id,
            syncingWithUser: (null == c ? void 0 : c.userId) != null && (null == c ? void 0 : c.userId) === i.id,
            isCurrentUser: i.id === e.getId(),
            currentUserTrackId: _,
            playingSameTrack: null != _ && _ === (null == l ? void 0 : l.sync_id)
        }
    }
}