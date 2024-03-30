function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("851285");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = new Set,
        d = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(d, e);
            var t, n, r, o, i, s = (t = d, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = l(t);
                if (n) {
                    var a = l(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function d() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), s.apply(this, arguments)
            }
            return r = d, o = [{
                key: "initialize",
                value: function(e) {
                    null != e && (f = new Set(e.expandedFolders)), this.waitFor(a.default)
                }
            }, {
                key: "getState",
                value: function() {
                    return {
                        expandedFolders: Array.from(f)
                    }
                }
            }, {
                key: "getExpandedFolders",
                value: function() {
                    return f
                }
            }, {
                key: "isFolderExpanded",
                value: function(e) {
                    return f.has(e)
                }
            }], u(r.prototype, o), i && u(r, i), d
        }(o.default.PersistedStore);
    s(d, "displayName", "ExpandedGuildFolderStore"), s(d, "persistKey", "ExpandedGuildFolderStore"), t.default = new d(i.default, {
        TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
            var t = e.folderId;
            (f = new Set(f)).has(t) ? f.delete(t) : f.add(t)
        },
        SET_GUILD_FOLDER_EXPANDED: function(e) {
            var t = e.folderId,
                n = e.expanded;
            f = new Set(f), n ? f.add(t) : f.has(t) && f.delete(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function() {
            var e = a.default.getGuildFolders();
            if (null == e) return !1;
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, u = f[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) ! function() {
                    var n = i.value;
                    !e.some(function(e) {
                        return e.folderId === n
                    }) && ((f = new Set(f)).delete(n), t = !0)
                }()
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != u.return && u.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        },
        GUILD_FOLDER_COLLAPSE: function() {
            if (0 === f.size) return !1;
            f = new Set
        }
    })
}