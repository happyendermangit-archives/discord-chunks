function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setIsOnStartStageScreen: function() {
            return _
        },
        useUpdateIsOnStartStageScreenEffect: function() {
            return c
        }
    });
    var i = n("470079"),
        r = n("652874"),
        a = n("442837"),
        s = n("496675"),
        o = n("944486"),
        l = n("146085"),
        u = n("643632");
    let d = (0, r.default)(e => ({
        isOnStartStageScreen: !0
    }));

    function _(e) {
        d.setState({
            isOnStartStageScreen: e
        })
    }

    function c(e) {
        let t = (0, a.useStateFromStores)([o.default], () => o.default.getVoiceChannelId() === e.id),
            n = (0, a.useStateFromStores)([s.default], () => s.default.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
            r = (0, u.default)(e.id),
            d = n && !r;
        i.useEffect(() => {
            t ? !d && _(!1) : _(d)
        }, [t, d])
    }
    t.default = d
}