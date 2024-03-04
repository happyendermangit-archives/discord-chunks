function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isFavoritesGuildVisible: function() {
            return f
        },
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("42203"),
        o = n("957255"),
        l = n("299039"),
        u = n("379881"),
        d = n("498139"),
        c = n("843455");

    function f(e, t, n) {
        let {
            canShow: i,
            isFavoritesPerk: r
        } = d.default.getCurrentConfig({
            location: "7993a7_1"
        }, {
            autoTrackExposure: !1
        });
        if (r) return !0;
        if (!i) return !1;
        let a = e.getFavoriteChannels();
        if (s.isEmpty(a)) return !1;
        let o = l.default.keys(a).filter(e => {
            let i = t.getChannel(e);
            return null != i && (!!i.isPrivate() || n.can(c.Permissions.VIEW_CHANNEL, i))
        });
        return !s.isEmpty(o) && !0
    }

    function _() {
        let {
            canShow: e,
            isFavoritesPerk: t
        } = (0, d.useFavoritesServerExperiment)("7993a7_2"), n = (0, r.useStateFromStores)([u.default, a.default, o.default], () => e && f(u.default, a.default, o.default));
        return !!t || n
    }
}