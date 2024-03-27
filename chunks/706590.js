function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        isFavoritesGuildVisible: function() {
            return c
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("442837"),
        a = n("592125"),
        o = n("496675"),
        l = n("709054"),
        u = n("853856"),
        d = n("362658"),
        _ = n("231338");

    function c(e, t, n) {
        let {
            canShow: i,
            isFavoritesPerk: s
        } = d.default.getCurrentConfig({
            location: "7993a7_1"
        }, {
            autoTrackExposure: !1
        });
        if (s) return !0;
        if (!i) return !1;
        let a = e.getFavoriteChannels();
        if (r().isEmpty(a)) return !1;
        let o = l.default.keys(a).filter(e => {
            let i = t.getChannel(e);
            return null != i && (!!i.isPrivate() || n.can(_.Permissions.VIEW_CHANNEL, i))
        });
        return !r().isEmpty(o) && !0
    }

    function E() {
        let {
            canShow: e,
            isFavoritesPerk: t
        } = (0, d.useFavoritesServerExperiment)("7993a7_2"), n = (0, s.useStateFromStores)([u.default, a.default, o.default], () => e && c(u.default, a.default, o.default));
        return !!t || n
    }
}