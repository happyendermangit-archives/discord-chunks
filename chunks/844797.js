function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivityInTextStart: function() {
            return _
        },
        useIsActivityInTextChannel: function() {
            return d
        }
    });
    var i = n("442837"),
        r = n("592125"),
        s = n("944486"),
        a = n("867176"),
        o = n("317381"),
        l = n("981631");

    function u(e) {
        let {
            channelId: t,
            SelectedChannelStore: n,
            ChannelStore: i
        } = e, r = i.getChannel(t), s = (0, a.isActivitiesInTextEnabled)(r, "isActivityInTextChannel");
        return !!((null == r ? void 0 : r.type) === l.ChannelTypes.GUILD_TEXT && s || null != r && r.isPrivate() && s && null == n.getVoiceChannelId()) || !1
    }

    function d(e) {
        return (0, i.useStateFromStores)([r.default, s.default], () => u({
            channelId: null == e ? void 0 : e.id,
            ChannelStore: r.default,
            SelectedChannelStore: s.default
        }))
    }

    function _(e, t, n, i) {
        return !o.default.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === t) && u({
            channelId: e,
            SelectedChannelStore: n,
            ChannelStore: i
        })
    }
}