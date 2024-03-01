function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectOrLurkStage: function() {
            return v
        },
        connectToStage: function() {
            return E
        },
        connectAndOpen: function() {
            return p
        },
        navigateToStage: function() {
            return y
        }
    });
    var s = n("851387"),
        i = n("987317"),
        r = n("990766"),
        a = n("792367"),
        o = n("248967"),
        d = n("373469"),
        u = n("42203"),
        l = n("305961"),
        f = n("957255"),
        _ = n("18494"),
        c = n("751661"),
        g = n("27822"),
        m = n("923510"),
        h = n("30577");

    function v(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async i => {
            let r = u.default.getChannel(t);
            if (null != r) return E(r, n), i(r);
            await (0, o.stopLurkingAll)([e]), await s.default.joinGuild(e, {
                lurker: !0
            }), l.default.addConditionalChangeListener(() => {
                let e = u.default.getChannel(t);
                return null == e || (E(e), h.default.initialize(), i(e), !1)
            })
        })
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = _.default.getVoiceChannelId();
        if (!t && ! function(e, t) {
                let n = f.default.can(m.JOIN_VOCAL_CHANNEL_PERMISSIONS, e);
                return !!n && (!c.shouldShowBlockedUsers(e.id) || t === e.id || (c.openStageBlockedUsersSheet(e, () => p(e, !0)), !1))
            }(e, n)) return !1;
        if (g.default.initialize(), i.default.selectVoiceChannel(e.id), (n = _.default.getVoiceChannelId()) !== e.id) return !1;
        let s = d.default.getAllApplicationStreamsForChannel(e.id);
        return s.length > 0 && (0, r.watchStream)(s[0], {
            noFocus: !1
        }), !0
    }

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = _.default.getVoiceChannelId();
        if (!s && i !== e.id && (0, a.shouldShowVoiceChannelChangeConfirmation)(e) && c.showChannelChangeConfirmationAlert(e, () => p(e, t, n, !0))) return;
        let r = E(e, t);
        r && y(e, i, n)
    }

    function y(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        c.navigateToStage(e, t, n)
    }
}