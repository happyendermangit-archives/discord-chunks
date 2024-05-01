function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("647162");

    function r(e, t, n, r) {
        var s, a, o;
        let l = e.hasConnectedAccount(),
            u = (0, i.isSpotifyPlayable)(e),
            d = e.getTrack(),
            _ = e.getSyncingWith(),
            c = e.getActivity(),
            E = null !== (o = null !== (a = null == d ? void 0 : d.id) && void 0 !== a ? a : null == c ? void 0 : c.sync_id) && void 0 !== o ? o : e.getLastPlayedTrackId();
        return {
            user: n,
            activity: r,
            hasSpotifyAccount: l,
            canPlaySpotify: u,
            notPlayable: l && !u,
            syncingWithParty: (null == c ? void 0 : c.party) != null && (null == r ? void 0 : null === (s = r.party) || void 0 === s ? void 0 : s.id) === c.party.id,
            syncingWithUser: (null == _ ? void 0 : _.userId) != null && (null == _ ? void 0 : _.userId) === n.id,
            isCurrentUser: n.id === t.getId(),
            currentUserTrackId: E,
            playingSameTrack: null != E && E === (null == r ? void 0 : r.sync_id)
        }
    }
}