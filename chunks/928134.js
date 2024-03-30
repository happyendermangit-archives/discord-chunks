function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("935741"),
        o = n("281767");

    function i(e) {
        if (null == e.parent_id) return e.type === o.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
        var t, n, i = ((null !== (n = null === (t = r.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1e3;
        return e.isGuildVocal() ? i + e.position + 500 : i + e.position
    }

    function a(e, t) {
        if (e.score !== t.score) return t.score - e.score;
        var n, r, o, a, u, s, l = i(e.record),
            c = i(t.record);
        if (l !== c) return l - c;
        var f = null !== (a = null !== (o = e.sortable) && void 0 !== o ? o : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : "",
            d = null !== (s = null !== (u = e.sortable) && void 0 !== u ? u : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== s ? s : "";
        return f < d ? -1 : f > d ? 1 : 0
    }
}