function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var a = n("913144"),
        l = n("689988"),
        i = n("26989"),
        _ = n("697218"),
        r = n("509");
    let s = null,
        u = () => {
            let e = i.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(t => {
                let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                    a = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                    l = e[t];
                !(0, r.isCommunicationDisabled)(l) && o(n, a)
            })
        },
        o = (e, t) => {
            var n, l, s, u, o, d;
            let E = i.default.getMember(e, t),
                f = _.default.getUser(t);
            if (null == E || null == f || (0, r.isMemberCommunicationDisabled)(E)) return;
            let c = {
                ...E,
                guildId: e,
                nick: null !== (n = E.nick) && void 0 !== n ? n : f.username,
                avatar: null !== (l = E.avatar) && void 0 !== l ? l : void 0,
                avatarDecoration: null != E.avatarDecoration ? {
                    ...E.avatarDecoration
                } : void 0,
                premiumSince: null !== (s = E.premiumSince) && void 0 !== s ? s : void 0,
                isPending: null !== (u = E.isPending) && void 0 !== u && u,
                user: {
                    ...f,
                    email: null !== (o = f.email) && void 0 !== o ? o : void 0,
                    phone: null !== (d = f.phone) && void 0 !== d ? d : void 0
                },
                communicationDisabledUntil: null
            };
            a.default.dispatch({
                type: "GUILD_MEMBER_UPDATE",
                ...c
            })
        };
    class d extends l.default {
        _initialize() {
            s = setInterval(() => u(), 1e4)
        }
        _terminate() {
            clearInterval(s)
        }
        constructor(...e) {
            super(...e), this.clearGuildMemberTimeout = o
        }
    }
    var E = new d
}