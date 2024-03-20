function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var a = n("913144"),
        i = n("689988"),
        l = n("26989"),
        r = n("697218"),
        s = n("509");
    let u = null,
        d = () => {
            let e = l.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(t => {
                let n = (0, l.getGuildIdFromCommunicationDisabledUserKey)(t),
                    a = (0, l.getUserIdFromCommunicationDisabledUserKey)(t),
                    i = e[t];
                !(0, s.isCommunicationDisabled)(i) && o(n, a)
            })
        },
        o = (e, t) => {
            var n, i, u, d, o, c;
            let _ = l.default.getMember(e, t),
                f = r.default.getUser(t);
            if (null == _ || null == f || (0, s.isMemberCommunicationDisabled)(_)) return;
            let E = {
                ..._,
                guildId: e,
                nick: null !== (n = _.nick) && void 0 !== n ? n : f.username,
                avatar: null !== (i = _.avatar) && void 0 !== i ? i : void 0,
                avatarDecoration: null != _.avatarDecoration ? {
                    ..._.avatarDecoration
                } : void 0,
                premiumSince: null !== (u = _.premiumSince) && void 0 !== u ? u : void 0,
                isPending: null !== (d = _.isPending) && void 0 !== d && d,
                user: {
                    ...f,
                    email: null !== (o = f.email) && void 0 !== o ? o : void 0,
                    phone: null !== (c = f.phone) && void 0 !== c ? c : void 0
                },
                communicationDisabledUntil: null
            };
            a.default.dispatch({
                type: "GUILD_MEMBER_UPDATE",
                ...E
            })
        };
    class c extends i.default {
        _initialize() {
            u = setInterval(() => d(), 1e4)
        }
        _terminate() {
            clearInterval(u)
        }
        constructor(...e) {
            super(...e), this.clearGuildMemberTimeout = o
        }
    }
    var _ = new c
}