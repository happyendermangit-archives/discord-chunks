function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHangStatusDetails: function() {
            return E
        },
        getHangStatusOptions: function() {
            return c
        },
        getHangStatusText: function() {
            return I
        }
    });
    var i = n("981631"),
        r = n("689938"),
        a = n("337258"),
        s = n("705196"),
        o = n("190878"),
        l = n("991254"),
        u = n("485686"),
        d = n("400976"),
        _ = n("443909");
    let c = () => ({
            [i.HangStatusTypes.CHILLING]: {
                title: r.default.Messages.STATUS_CHILLING,
                icon: s,
                color: "#567C7E"
            },
            [i.HangStatusTypes.GAMING]: {
                title: r.default.Messages.STATUS_GAMING,
                icon: o,
                color: "#685F8C"
            },
            [i.HangStatusTypes.FOCUSING]: {
                title: r.default.Messages.STATUS_FOCUSING,
                icon: u,
                color: "#7F6956"
            },
            [i.HangStatusTypes.BRB]: {
                title: r.default.Messages.STATUS_BRB,
                icon: a,
                color: "#76567E"
            },
            [i.HangStatusTypes.EATING]: {
                title: r.default.Messages.STATUS_EATING,
                icon: l,
                color: "#717B54"
            },
            [i.HangStatusTypes.IN_TRANSIT]: {
                title: r.default.Messages.STATUS_IN_TRANSIT,
                icon: d,
                color: "#56697F"
            },
            [i.HangStatusTypes.WATCHING]: {
                title: r.default.Messages.STATUS_WATCHING,
                icon: _,
                color: "#7C5571"
            }
        }),
        E = e => {
            if ((null == e ? void 0 : e.type) !== i.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
            let t = e.state;
            return t === i.HangStatusTypes.CUSTOM ? null : c()[t]
        },
        I = e => {
            var t;
            return ((null == e ? void 0 : e.state) != null ? e.state : null) === i.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = E(e)) || void 0 === t ? void 0 : t.title
        }
}