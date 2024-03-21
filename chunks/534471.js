function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        setIsOnStartStageScreen: function() {
            return _
        },
        useUpdateIsOnStartStageScreenEffect: function() {
            return f
        }
    });
    var i = n("884691"),
        s = n("308503"),
        r = n("446674"),
        a = n("957255"),
        o = n("18494"),
        l = n("923510"),
        u = n("58763");
    let d = (0, s.default)(e => ({
        isOnStartStageScreen: !0
    }));
    var c = d;

    function _(e) {
        d.setState({
            isOnStartStageScreen: e
        })
    }

    function f(e) {
        let t = (0, r.useStateFromStores)([o.default], () => o.default.getVoiceChannelId() === e.id),
            n = (0, r.useStateFromStores)([a.default], () => a.default.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
            s = (0, u.default)(e.id),
            d = n && !s;
        i.useEffect(() => {
            t ? !d && _(!1) : _(d)
        }, [t, d])
    }
}