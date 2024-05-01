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
        a = n("442837"),
        s = n("592125"),
        o = n("496675"),
        l = n("709054"),
        u = n("853856"),
        d = n("362658"),
        _ = n("231338");

    function c(e, t, n) {
        let {
            canShow: i,
            isFavoritesPerk: a
        } = d.default.getCurrentConfig({
            location: "7993a7_1"
        }, {
            autoTrackExposure: !1
        });
        if (a) return !0;
        if (!i) return !1;
        let s = e.getFavoriteChannels();
        if (r().isEmpty(s)) return !1;
        let o = l.default.keys(s).filter(e => {
            let i = t.getChannel(e);
            return null != i && (!!i.isPrivate() || n.can(_.Permissions.VIEW_CHANNEL, i))
        });
        return !r().isEmpty(o) && !0
    }

    function E() {
        let {
            canShow: e,
            isFavoritesPerk: t
        } = (0, d.useFavoritesServerExperiment)("7993a7_2"), n = (0, a.useStateFromStores)([u.default, s.default, o.default], () => e && c(u.default, s.default, o.default));
        return !!t || n
    }
}