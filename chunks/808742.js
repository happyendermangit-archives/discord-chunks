function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHangStatusOptions: function() {
            return f
        },
        getHangStatusDetails: function() {
            return p
        },
        getHangStatusText: function() {
            return m
        }
    });
    var i = n("49111"),
        l = n("782340"),
        a = n("65833"),
        s = n("270664"),
        r = n("763388"),
        o = n("708206"),
        u = n("787795"),
        d = n("908332"),
        c = n("850390");
    let f = () => ({
            [i.HangStatusTypes.CHILLING]: {
                title: l.default.Messages.STATUS_CHILLING,
                icon: s,
                color: "#567C7E"
            },
            [i.HangStatusTypes.GAMING]: {
                title: l.default.Messages.STATUS_GAMING,
                icon: r,
                color: "#685F8C"
            },
            [i.HangStatusTypes.FOCUSING]: {
                title: l.default.Messages.STATUS_FOCUSING,
                icon: u,
                color: "#7F6956"
            },
            [i.HangStatusTypes.BRB]: {
                title: l.default.Messages.STATUS_BRB,
                icon: a,
                color: "#76567E"
            },
            [i.HangStatusTypes.EATING]: {
                title: l.default.Messages.STATUS_EATING,
                icon: o,
                color: "#717B54"
            },
            [i.HangStatusTypes.IN_TRANSIT]: {
                title: l.default.Messages.STATUS_IN_TRANSIT,
                icon: d,
                color: "#56697F"
            },
            [i.HangStatusTypes.WATCHING]: {
                title: l.default.Messages.STATUS_WATCHING,
                icon: c,
                color: "#7C5571"
            }
        }),
        p = e => {
            if ((null == e ? void 0 : e.type) !== i.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
            let t = e.state;
            return t === i.HangStatusTypes.CUSTOM ? null : f()[t]
        },
        m = e => {
            var t;
            let n = (null == e ? void 0 : e.state) != null ? e.state : null;
            return n === i.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = p(e)) || void 0 === t ? void 0 : t.title
        }
}