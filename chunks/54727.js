function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("987317"),
        s = n("713726"),
        i = n("754493"),
        l = n("293137"),
        u = n("981913"),
        o = n("782340");

    function d(e) {
        let {
            centerButton: t = !1,
            channel: n,
            onClick: d,
            ...c
        } = e, f = t ? u.CenterControlButton : u.default, h = n.isBroadcastChannel(), E = (0, i.useIsBroadcastingInChannel)(n.id);
        return (0, a.jsx)(f, {
            ...c,
            onClick: () => {
                E && (0, s.stopBroadcast)(), r.default.disconnect(), null == d || d()
            },
            iconComponent: l.default,
            label: E ? o.default.Messages.STOP_BROADCASTING : h ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
        })
    }
}