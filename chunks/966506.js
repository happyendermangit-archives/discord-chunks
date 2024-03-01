function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var l = n("42203"),
        r = n("49111");

    function a(e) {
        if (null == e.parent_id) return e.type === r.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
        {
            var t, n;
            let r = ((null !== (n = null === (t = l.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1e3;
            return e.isGuildVocal() ? r + e.position + 500 : r + e.position
        }
    }

    function i(e, t) {
        var n, l, r, i, u, o;
        if (e.score !== t.score) return t.score - e.score;
        let s = a(e.record),
            c = a(t.record);
        if (s !== c) return s - c;
        let d = null !== (i = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
            f = null !== (o = null !== (u = e.sortable) && void 0 !== u ? u : null === (l = t.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== o ? o : "";
        return d < f ? -1 : d > f ? 1 : 0
    }
}