function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("807471"),
        i = n("957808"),
        a = n("208454"),
        u = n("690954");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = null,
        m = function() {
            var e = i.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(function(t) {
                var n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                    r = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                    o = e[t];
                !(0, u.isCommunicationDisabled)(o) && y(n, r)
            })
        },
        y = function(e, t) {
            var n, o, s, l, c, f, E = i.default.getMember(e, t),
                p = a.default.getUser(t);
            if (null != E && null != p) {
                if (!(0, u.isMemberCommunicationDisabled)(E)) {
                    var m = _(d({}, E), {
                        guildId: e,
                        nick: null !== (n = E.nick) && void 0 !== n ? n : p.username,
                        avatar: null !== (o = E.avatar) && void 0 !== o ? o : void 0,
                        avatarDecoration: null != E.avatarDecoration ? d({}, E.avatarDecoration) : void 0,
                        premiumSince: null !== (s = E.premiumSince) && void 0 !== s ? s : void 0,
                        isPending: null !== (l = E.isPending) && void 0 !== l && l,
                        user: _(d({}, p), {
                            email: null !== (c = p.email) && void 0 !== c ? c : void 0,
                            phone: null !== (f = p.phone) && void 0 !== f ? f : void 0
                        }),
                        communicationDisabledUntil: null
                    });
                    r.default.dispatch(d({
                        type: "GUILD_MEMBER_UPDATE"
                    }, m))
                }
            }
        },
        I = function(e) {
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
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : s(e)
            });

            function u() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), e = a.apply(this, arguments), c(s(e), "clearGuildMemberTimeout", y), e
            }
            return r = u, o = [{
                key: "_initialize",
                value: function() {
                    p = setInterval(function() {
                        return m()
                    }, 1e4)
                }
            }, {
                key: "_terminate",
                value: function() {
                    clearInterval(p)
                }
            }], l(r.prototype, o), i && l(r, i), u
        }(o.default);
    t.default = new I
}