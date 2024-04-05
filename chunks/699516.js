function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("709054"),
        c = n("594174"),
        E = n("981631");
    let I = {},
        T = {},
        f = {},
        S = 0,
        A = 0,
        h = 0,
        m = 0;

    function N() {
        m = Object.values(I).length;
        let {
            [E.RelationshipTypes.PENDING_INCOMING]: e = 0, [E.RelationshipTypes.PENDING_OUTGOING]: t = 0, [E.RelationshipTypes.FRIEND]: n = 0
        } = l().countBy(Object.values(I), e => e);
        S = e, A = t, h = n
    }
    class O extends(i = u.default.Store) {
        initialize() {
            this.waitFor(c.default)
        }
        isFriend(e) {
            return I[e] === E.RelationshipTypes.FRIEND
        }
        isBlocked(e) {
            return I[e] === E.RelationshipTypes.BLOCKED
        }
        getPendingCount() {
            return S
        }
        getOutgoingCount() {
            return A
        }
        getFriendCount() {
            return h
        }
        getRelationshipCount() {
            return m
        }
        getRelationships() {
            return I
        }
        getRelationshipType(e) {
            let t = I[e];
            return null != t ? t : E.RelationshipTypes.NONE
        }
        getNickname(e) {
            return T[e]
        }
        getSince(e) {
            return f[e]
        }
        getSinces() {
            return f
        }
        getFriendIDs() {
            return _.default.keys(I).filter(e => I[e] === E.RelationshipTypes.FRIEND)
        }
    }
    a = "RelationshipStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new O(d.default, {
        CONNECTION_OPEN: function(e) {
            I = {}, T = {}, f = {}, e.relationships.forEach(e => {
                I[e.id] = e.type, null != e.nickname && (T[e.id] = e.nickname), null != e.since && (f[e.id] = e.since)
            }), N()
        },
        OVERLAY_INITIALIZE: function(e) {
            I = {
                ...e.relationships
            }, N()
        },
        RELATIONSHIP_ADD: function(e) {
            let t = I[e.relationship.id];
            I = {
                ...I,
                [e.relationship.id]: e.relationship.type
            }, null != e.relationship.nickname && (T = {
                ...T,
                [e.relationship.id]: e.relationship.nickname
            }), null != e.relationship.since && (f = {
                ...f,
                [e.relationship.id]: e.relationship.since
            }), N(), e.relationship.type === E.RelationshipTypes.FRIEND && t === E.RelationshipTypes.PENDING_OUTGOING && d.default.dispatch({
                type: "FRIEND_REQUEST_ACCEPTED",
                user: e.relationship.user
            })
        },
        RELATIONSHIP_REMOVE: function(e) {
            I = {
                ...I
            }, delete I[e.relationship.id], null != T[e.relationship.id] && (T = {
                ...T
            }, delete T[e.relationship.id]), null != f[e.relationship.id] && (f = {
                ...f
            }, delete f[e.relationship.id]), N()
        },
        RELATIONSHIP_UPDATE: function(e) {
            null == e.relationship.since ? delete f[e.relationship.id] : f[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete T[e.relationship.id] : T[e.relationship.id] = e.relationship.nickname
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
            I = {
                ...I
            }, _.default.keys(I).forEach(e => {
                I[e] === E.RelationshipTypes.PENDING_INCOMING && delete I[e]
            }), N()
        }
    })
}