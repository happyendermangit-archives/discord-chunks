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
        r = n("697218"),
        s = n("509");
    let _ = null,
        u = () => {
            let e = i.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(t => {
                let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                    a = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                    l = e[t];
                !(0, s.isCommunicationDisabled)(l) && o(n, a)
            })
        },
        o = (e, t) => {
            var n, l, _, u, o, d;
            let E = i.default.getMember(e, t),
                f = r.default.getUser(t);
            if (null == E || null == f || (0, s.isMemberCommunicationDisabled)(E)) return;
            let c = {
                ...E,
                guildId: e,
                nick: null !== (n = E.nick) && void 0 !== n ? n : f.username,
                avatar: null !== (l = E.avatar) && void 0 !== l ? l : void 0,
                avatarDecoration: null != E.avatarDecoration ? {
                    ...E.avatarDecoration
                } : void 0,
                premiumSince: null !== (_ = E.premiumSince) && void 0 !== _ ? _ : void 0,
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
            _ = setInterval(() => u(), 1e4)
        }
        _terminate() {
            clearInterval(_)
        }
        constructor(...e) {
            super(...e), this.clearGuildMemberTimeout = o
        }
    }
    var E = new d
}