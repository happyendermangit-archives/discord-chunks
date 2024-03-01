function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isFavoritesGuildVisible: function() {
            return f
        },
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("917351"),
        r = n.n(i),
        s = n("446674"),
        a = n("42203"),
        o = n("957255"),
        l = n("299039"),
        u = n("379881"),
        c = n("498139"),
        d = n("843455");

    function f(e, t, n) {
        let {
            canShow: i,
            isFavoritesPerk: s
        } = c.default.getCurrentConfig({
            location: "7993a7_1"
        }, {
            autoTrackExposure: !1
        });
        if (s) return !0;
        if (!i) return !1;
        let a = e.getFavoriteChannels();
        if (r.isEmpty(a)) return !1;
        let o = l.default.keys(a).filter(e => {
            let i = t.getChannel(e);
            return null != i && (!!i.isPrivate() || n.can(d.Permissions.VIEW_CHANNEL, i))
        });
        return !r.isEmpty(o) && !0
    }

    function E() {
        let {
            canShow: e,
            isFavoritesPerk: t
        } = (0, c.useFavoritesServerExperiment)("7993a7_2"), n = (0, s.useStateFromStores)([u.default, a.default, o.default], () => e && f(u.default, a.default, o.default));
        return !!t || n
    }
}