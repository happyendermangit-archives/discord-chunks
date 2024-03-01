function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        setIsOnStartStageScreen: function() {
            return _
        },
        useUpdateIsOnStartStageScreenEffect: function() {
            return c
        }
    });
    var s = n("884691"),
        i = n("308503"),
        r = n("446674"),
        a = n("957255"),
        o = n("18494"),
        d = n("923510"),
        u = n("58763");
    let l = (0, i.default)(e => ({
        isOnStartStageScreen: !0
    }));
    var f = l;

    function _(e) {
        l.setState({
            isOnStartStageScreen: e
        })
    }

    function c(e) {
        let t = (0, r.useStateFromStores)([o.default], () => o.default.getVoiceChannelId() === e.id),
            n = (0, r.useStateFromStores)([a.default], () => a.default.can(d.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
            i = (0, u.default)(e.id),
            l = n && !i;
        s.useEffect(() => {
            t ? !l && _(!1) : _(l)
        }, [t, l])
    }
}