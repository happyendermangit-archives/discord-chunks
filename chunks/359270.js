function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        isFavoritesGuildVisible: function() {
            return d
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("898511"),
        a = n("935741"),
        u = n("29884"),
        s = n("523018"),
        l = n("652709"),
        c = n("376737"),
        f = n("563090");

    function d(e, t, n) {
        var r = c.default.getCurrentConfig({
                location: "7993a7_1"
            }, {
                autoTrackExposure: !1
            }),
            i = r.canShow;
        if (r.isFavoritesPerk) return !0;
        if (!i) return !1;
        var a = e.getFavoriteChannels();
        if (o().isEmpty(a)) return !1;
        var u = s.default.keys(a).filter(function(e) {
            var r = t.getChannel(e);
            return null != r && (!!r.isPrivate() || n.can(f.Permissions.VIEW_CHANNEL, r))
        });
        return !o().isEmpty(u) && !0
    }

    function _() {
        var e = (0, c.useFavoritesServerExperiment)("7993a7_2"),
            t = e.canShow,
            n = e.isFavoritesPerk,
            r = (0, i.useStateFromStores)([l.default, a.default, u.default], function() {
                return t && d(l.default, a.default, u.default)
            });
        return !!n || r
    }
}