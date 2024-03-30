function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        joinRequestFromServer: function() {
            return I
        }
    });
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("393588"),
        c = n("208454"),
        f = n("745561");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = {},
        m = !1,
        y = {};

    function I(e) {
        return {
            id: e.id,
            join_request_id: e.join_request_id,
            guildId: e.guild_id,
            userId: e.user_id,
            user: e.user,
            createdAt: e.created_at,
            formResponses: e.form_responses,
            rejectionReason: e.rejection_reason,
            applicationStatus: e.application_status,
            actionedAt: e.actioned_at,
            actionedByUser: e.actioned_by_user,
            lastSeen: e.last_seen,
            interview_channel_id: e.interview_channel_id
        }
    }

    function h(e) {
        var t = e.guildId,
            n = e.request;
        if (null != n) {
            var r = I(n),
                o = c.default.getCurrentUser();
            if (null != o && r.userId !== o.id) return !1;
            (0, f.isApprovedAndAcked)(r) ? delete p[t]: p[t] = r
        }
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "getRequest",
            value: function(e) {
                return p[e]
            }
        }, {
            key: "computeGuildIds",
            value: function() {
                return Object.values(p).map(function(e) {
                    return null == e ? void 0 : e.guildId
                }).filter(function(e) {
                    return null != e
                })
            }
        }, {
            key: "getJoinRequestGuild",
            value: function(e) {
                return null != y[e] ? new l.default(y[e]) : null
            }
        }, {
            key: "hasFetchedRequestToJoinGuilds",
            get: function() {
                return m
            }
        }], d(r.prototype, o), i && d(r, i), u
    }(u.default.Store);
    i = "UserGuildJoinRequestStore", (o = "displayName") in(r = O) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new O(s.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.guildJoinRequests;
            m = !1, y = {}, p = {}, t.forEach(function(e) {
                var t = e.guild_id;
                null != t && (p[t] = I(e))
            })
        },
        GUILD_JOIN_REQUEST_UPDATE: h,
        GUILD_JOIN_REQUEST_CREATE: h,
        USER_GUILD_JOIN_REQUEST_UPDATE: function(e) {
            var t = e.request,
                n = e.guildId;
            if (null == t) {
                delete p[n];
                return
            }
            var r = I(t);
            (0, f.isApprovedAndAcked)(r) ? delete p[n]: p[n] = r
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete p[t.id]
        },
        USER_JOIN_REQUEST_GUILDS_FETCH: function(e) {
            var t = e.guilds;
            m = !0, t.forEach(function(e) {
                var t = e.id,
                    n = e.name,
                    r = e.features,
                    o = e.icon;
                y[t] = {
                    id: t,
                    name: n,
                    features: r,
                    icon: o
                }
            })
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
            var t = e.form,
                n = e.guildId;
            if ((null == t ? void 0 : t.guild) != null) {
                var r = t.guild,
                    o = r.id,
                    i = r.name,
                    a = r.icon,
                    u = r.features;
                y[n] = {
                    id: o,
                    name: i,
                    icon: a,
                    features: null != u ? u : []
                }
            }
        },
        INVITE_ACCEPT_SUCCESS: function(e) {
            var t = e.invite,
                n = t.guild,
                r = t.join_request;
            if (null != n && null != r) {
                p[r.guild_id] = I(r);
                var o = n.id,
                    i = n.name,
                    a = n.icon,
                    u = n.features;
                y[o] = {
                    id: o,
                    name: i,
                    icon: a,
                    features: null != u ? u : []
                }
            }
        },
        ACK_APPROVED_GUILD_JOIN_REQUEST: function(e) {
            var t = e.guildId;
            delete p[t]
        }
    })
}