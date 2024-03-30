function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setIsOnStartStageScreen: function() {
            return f
        },
        useUpdateIsOnStartStageScreenEffect: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("652874"),
        i = n("898511"),
        a = n("29884"),
        u = n("894288"),
        s = n("353934"),
        l = n("212642"),
        c = (0, o.default)(function(e) {
            return {
                isOnStartStageScreen: !0
            }
        });

    function f(e) {
        c.setState({
            isOnStartStageScreen: e
        })
    }

    function d(e) {
        var t = (0, i.useStateFromStores)([u.default], function() {
                return u.default.getVoiceChannelId() === e.id
            }),
            n = (0, i.useStateFromStores)([a.default], function() {
                return a.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
            }, [e]),
            o = (0, l.default)(e.id),
            c = n && !o;
        r.useEffect(function() {
            t ? !c && f(!1) : f(c)
        }, [t, c])
    }
    t.default = c
}