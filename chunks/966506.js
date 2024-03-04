function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("42203"),
        s = n("49111");

    function r(e) {
        if (null == e.parent_id) return e.type === s.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
        {
            var t, n;
            let s = ((null !== (n = null === (t = i.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1e3;
            return e.isGuildVocal() ? s + e.position + 500 : s + e.position
        }
    }

    function a(e, t) {
        var n, i, s, a, o, l;
        if (e.score !== t.score) return t.score - e.score;
        let u = r(e.record),
            d = r(t.record);
        if (u !== d) return u - d;
        let c = null !== (a = null !== (s = e.sortable) && void 0 !== s ? s : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : "",
            f = null !== (l = null !== (o = e.sortable) && void 0 !== o ? o : null === (i = t.comparator) || void 0 === i ? void 0 : i.toLocaleLowerCase()) && void 0 !== l ? l : "";
        return c < f ? -1 : c > f ? 1 : 0
    }
}