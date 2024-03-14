function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("299039"),
        l = n("697218"),
        u = n("49111");
    let d = {},
        c = {},
        f = {},
        _ = 0,
        E = 0,
        h = 0,
        g = 0;

    function m() {
        let e = Object.values(d);
        g = e.length;
        let {
            [u.RelationshipTypes.PENDING_INCOMING]: t = 0, [u.RelationshipTypes.PENDING_OUTGOING]: n = 0, [u.RelationshipTypes.FRIEND]: i = 0
        } = s.countBy(Object.values(d), e => e);
        _ = t, E = n, h = i
    }
    class p extends r.default.Store {
        initialize() {
            this.waitFor(l.default)
        }
        isFriend(e) {
            return d[e] === u.RelationshipTypes.FRIEND
        }
        isBlocked(e) {
            return d[e] === u.RelationshipTypes.BLOCKED
        }
        getPendingCount() {
            return _
        }
        getOutgoingCount() {
            return E
        }
        getFriendCount() {
            return h
        }
        getRelationshipCount() {
            return g
        }
        getRelationships() {
            return d
        }
        getRelationshipType(e) {
            let t = d[e];
            return null != t ? t : u.RelationshipTypes.NONE
        }
        getNickname(e) {
            let t = c[e];
            return t
        }
        getSince(e) {
            return f[e]
        }
        getSinces() {
            return f
        }
        getFriendIDs() {
            return o.default.keys(d).filter(e => d[e] === u.RelationshipTypes.FRIEND)
        }
    }
    p.displayName = "RelationshipStore";
    var S = new p(a.default, {
        CONNECTION_OPEN: function(e) {
            d = {}, c = {}, f = {}, e.relationships.forEach(e => {
                d[e.id] = e.type, null != e.nickname && (c[e.id] = e.nickname), null != e.since && (f[e.id] = e.since)
            }), m()
        },
        OVERLAY_INITIALIZE: function(e) {
            d = {
                ...e.relationships
            }, m()
        },
        RELATIONSHIP_ADD: function(e) {
            let t = d[e.relationship.id];
            d = {
                ...d,
                [e.relationship.id]: e.relationship.type
            }, null != e.relationship.nickname && (c = {
                ...c,
                [e.relationship.id]: e.relationship.nickname
            }), null != e.relationship.since && (f = {
                ...f,
                [e.relationship.id]: e.relationship.since
            }), m(), e.relationship.type === u.RelationshipTypes.FRIEND && t === u.RelationshipTypes.PENDING_OUTGOING && a.default.dispatch({
                type: "FRIEND_REQUEST_ACCEPTED",
                user: e.relationship.user
            })
        },
        RELATIONSHIP_REMOVE: function(e) {
            d = {
                ...d
            }, delete d[e.relationship.id], null != c[e.relationship.id] && (c = {
                ...c
            }, delete c[e.relationship.id]), null != f[e.relationship.id] && (f = {
                ...f
            }, delete f[e.relationship.id]), m()
        },
        RELATIONSHIP_UPDATE: function(e) {
            null == e.relationship.since ? delete f[e.relationship.id] : f[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete c[e.relationship.id] : c[e.relationship.id] = e.relationship.nickname
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
            d = {
                ...d
            }, o.default.keys(d).forEach(e => {
                d[e] === u.RelationshipTypes.PENDING_INCOMING && delete d[e]
            }), m()
        }
    })
}