function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectAndOpen: function() {
            return h
        },
        connectOrLurkStage: function() {
            return S
        },
        connectToStage: function() {
            return A
        },
        navigateToStage: function() {
            return m
        }
    });
    var i = n("749210"),
        r = n("287734"),
        s = n("872810"),
        a = n("366297"),
        o = n("280837"),
        l = n("199902"),
        u = n("592125"),
        d = n("430824"),
        _ = n("496675"),
        c = n("944486"),
        E = n("881824"),
        I = n("107511"),
        T = n("146085"),
        f = n("96150");

    function S(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async r => {
            let s = u.default.getChannel(t);
            if (null != s) return A(s, n), r(s);
            await (0, o.stopLurkingAll)([e]), await i.default.joinGuild(e, {
                lurker: !0
            }), d.default.addConditionalChangeListener(() => {
                let e = u.default.getChannel(t);
                return null == e || (A(e), f.default.initialize(), r(e), !1)
            })
        })
    }

    function A(e) {
        var t, n;
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = c.default.getVoiceChannelId();
        if (!i && (t = e, n = a, !_.default.can(T.JOIN_VOCAL_CHANNEL_PERMISSIONS, t) || E.shouldShowBlockedUsers(t.id) && n !== t.id && (E.openStageBlockedUsersSheet(t, () => h(t, !0)), 1))) return !1;
        if (I.default.initialize(), r.default.selectVoiceChannel(e.id), (a = c.default.getVoiceChannelId()) !== e.id) return !1;
        let o = l.default.getAllApplicationStreamsForChannel(e.id);
        return o.length > 0 && (0, s.watchStream)(o[0], {
            noFocus: !1
        }), !0
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = c.default.getVoiceChannelId();
        if (!(!i && r !== e.id && (0, a.shouldShowVoiceChannelChangeConfirmation)(e) && E.showChannelChangeConfirmationAlert(e, () => h(e, t, n, !0)))) A(e, t) && m(e, r, n)
    }

    function m(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        E.navigateToStage(e, t, n)
    }
}