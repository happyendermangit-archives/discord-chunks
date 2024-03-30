function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("850472"),
        i = n("163291"),
        a = n("281767");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e) {
        var t, n, r, u = e.invite.guild;
        if (null != u && (null == u ? void 0 : null === (t = u.features) || void 0 === t ? void 0 : t.includes(a.GuildFeatures.HUB))) {
            o.default.onOpenHubInvite(e.invite);
            return
        }
        null != u && (null == u ? void 0 : null === (n = u.features) || void 0 === n ? void 0 : n.includes(a.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == u ? void 0 : null === (r = u.features) || void 0 === r ? void 0 : r.includes(a.GuildFeatures.PREVIEW_ENABLED)) && (0, i.transitionTo)(a.Routes.GUILD_MEMBER_VERIFICATION(u.id, e.invite.code))
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = s(t);
            if (n) {
                var a = s(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function o() {
            var e, t, n, i;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), t = u(e), n = "actions", i = {
                INVITE_ACCEPT_SUCCESS: c
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, e
        }
        return o
    }(r.default);
    t.default = new f
}