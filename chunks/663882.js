function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHangStatusDetails: function() {
            return E
        },
        getHangStatusOptions: function() {
            return _
        },
        getHangStatusText: function() {
            return p
        }
    });
    var r = n("281767"),
        o = n("941504"),
        i = n("337258"),
        a = n("705196"),
        u = n("190878"),
        s = n("991254"),
        l = n("485686"),
        c = n("400976"),
        f = n("443909");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var _ = function() {
            var e;
            return d(e = {}, r.HangStatusTypes.CHILLING, {
                title: o.default.Messages.STATUS_CHILLING,
                icon: a,
                color: "#567C7E"
            }), d(e, r.HangStatusTypes.GAMING, {
                title: o.default.Messages.STATUS_GAMING,
                icon: u,
                color: "#685F8C"
            }), d(e, r.HangStatusTypes.FOCUSING, {
                title: o.default.Messages.STATUS_FOCUSING,
                icon: l,
                color: "#7F6956"
            }), d(e, r.HangStatusTypes.BRB, {
                title: o.default.Messages.STATUS_BRB,
                icon: i,
                color: "#76567E"
            }), d(e, r.HangStatusTypes.EATING, {
                title: o.default.Messages.STATUS_EATING,
                icon: s,
                color: "#717B54"
            }), d(e, r.HangStatusTypes.IN_TRANSIT, {
                title: o.default.Messages.STATUS_IN_TRANSIT,
                icon: c,
                color: "#56697F"
            }), d(e, r.HangStatusTypes.WATCHING, {
                title: o.default.Messages.STATUS_WATCHING,
                icon: f,
                color: "#7C5571"
            }), e
        },
        E = function(e) {
            if ((null == e ? void 0 : e.type) !== r.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
            var t = e.state;
            return t === r.HangStatusTypes.CUSTOM ? null : _()[t]
        },
        p = function(e) {
            var t;
            return ((null == e ? void 0 : e.state) != null ? e.state : null) === r.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = E(e)) || void 0 === t ? void 0 : t.title
        }
}