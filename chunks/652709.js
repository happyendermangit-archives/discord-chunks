function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("14782"),
        l = n("629815"),
        c = n("851285"),
        f = n("569492"),
        d = n("281767");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = {},
        y = !1;

    function I() {
        y = null !== (n = null === (e = c.default.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n, m = {};
        var e, t, n, r = null === (t = c.default.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
        if (null == r) return !1;
        for (var o in r) {
            var i = r[o];
            m[o] = {
                id: o,
                nickname: "" !== i.nickname ? i.nickname : null,
                type: i.type,
                order: i.position,
                parentId: "0" !== i.parentId ? i.parentId : null
            }
        }
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
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
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
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
            key: "initialize",
            value: function() {
                this.waitFor(c.default), I(), this.syncWith([c.default], I)
            }
        }, {
            key: "getFavoriteChannels",
            value: function() {
                return m
            }
        }, {
            key: "favoriteServerMuted",
            get: function() {
                return y
            }
        }, {
            key: "isFavorite",
            value: function(e) {
                return null != e && null != m[e]
            }
        }, {
            key: "getFavorite",
            value: function(e) {
                if (null != e) return m[e]
            }
        }, {
            key: "getCategoryRecord",
            value: function(e) {
                if (e in m && m[e].type === s.FavoriteChannelType.CATEGORY) {
                    var t, n;
                    return t = m[e], (0, f.createChannelRecord)({
                        id: t.id,
                        name: null !== (n = t.nickname) && void 0 !== n ? n : "",
                        type: d.ChannelTypes.GUILD_CATEGORY,
                        position: t.order,
                        guild_id: d.FAVORITES
                    })
                }
                return null
            }
        }, {
            key: "getNickname",
            value: function(e) {
                var t, n = this.getFavorite(e);
                return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(u.default.Store);
    i = "FavoriteStore", (o = "displayName") in(r = h) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new h(l.default, {})
}