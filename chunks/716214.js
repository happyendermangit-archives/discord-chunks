function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectOrLurkStage: function() {
            return m
        },
        connectToStage: function() {
            return p
        },
        connectAndOpen: function() {
            return S
        },
        navigateToStage: function() {
            return T
        }
    });
    var i = n("851387"),
        s = n("987317"),
        r = n("990766"),
        a = n("792367"),
        o = n("248967"),
        l = n("373469"),
        u = n("42203"),
        d = n("305961"),
        c = n("957255"),
        _ = n("18494"),
        f = n("751661"),
        E = n("27822"),
        h = n("923510"),
        g = n("30577");

    function m(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async s => {
            let r = u.default.getChannel(t);
            if (null != r) return p(r, n), s(r);
            await (0, o.stopLurkingAll)([e]), await i.default.joinGuild(e, {
                lurker: !0
            }), d.default.addConditionalChangeListener(() => {
                let e = u.default.getChannel(t);
                return null == e || (p(e), g.default.initialize(), s(e), !1)
            })
        })
    }

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = _.default.getVoiceChannelId();
        if (!t && ! function(e, t) {
                let n = c.default.can(h.JOIN_VOCAL_CHANNEL_PERMISSIONS, e);
                return !!n && (!f.shouldShowBlockedUsers(e.id) || t === e.id || (f.openStageBlockedUsersSheet(e, () => S(e, !0)), !1))
            }(e, n)) return !1;
        if (E.default.initialize(), s.default.selectVoiceChannel(e.id), (n = _.default.getVoiceChannelId()) !== e.id) return !1;
        let i = l.default.getAllApplicationStreamsForChannel(e.id);
        return i.length > 0 && (0, r.watchStream)(i[0], {
            noFocus: !1
        }), !0
    }

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = _.default.getVoiceChannelId();
        if (!i && s !== e.id && (0, a.shouldShowVoiceChannelChangeConfirmation)(e) && f.showChannelChangeConfirmationAlert(e, () => S(e, t, n, !0))) return;
        let r = p(e, t);
        r && T(e, s, n)
    }

    function T(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        f.navigateToStage(e, t, n)
    }
}