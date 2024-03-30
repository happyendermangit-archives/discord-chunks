function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("435801");

    function o(e, t, n, o) {
        var i, a, u, s = e.hasConnectedAccount(),
            l = (0, r.isSpotifyPlayable)(e),
            c = e.getTrack(),
            f = e.getSyncingWith(),
            d = e.getActivity(),
            _ = null !== (u = null !== (a = null == c ? void 0 : c.id) && void 0 !== a ? a : null == d ? void 0 : d.sync_id) && void 0 !== u ? u : e.getLastPlayedTrackId();
        return {
            user: n,
            activity: o,
            hasSpotifyAccount: s,
            canPlaySpotify: l,
            notPlayable: s && !l,
            syncingWithParty: (null == d ? void 0 : d.party) != null && (null == o ? void 0 : null === (i = o.party) || void 0 === i ? void 0 : i.id) === d.party.id,
            syncingWithUser: (null == f ? void 0 : f.userId) != null && (null == f ? void 0 : f.userId) === n.id,
            isCurrentUser: n.id === t.getId(),
            currentUserTrackId: _,
            playingSameTrack: null != _ && _ === (null == o ? void 0 : o.sync_id)
        }
    }
}