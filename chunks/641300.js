function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("14782"),
        o = n("629815"),
        i = n("807471"),
        a = n("510077"),
        u = n("306912"),
        s = n("29884"),
        l = n("328888"),
        c = n("753062"),
        f = n("281767");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(m, e);
        var t, n, i = (t = m, n = function() {
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
            }(r) || "function" == typeof r) ? r : d(e)
        });

        function m() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = i.apply(this, arguments), _(d(e), "actions", {
                POST_CONNECTION_OPEN: function(t) {
                    return e.handleConnectionOpen(t)
                },
                CHANNEL_SELECT: function(t) {
                    return e.handleChannelSelect(t)
                }
            }), _(d(e), "handleConnectionOpen", function(e) {
                var t = (0, c.getValorantUserSignupExperiment)("SignUpManager"),
                    n = (0, l.getValorantAdminSignupExperiment)("SignUpManager", !1),
                    i = (0, a.isDismissibleContentDismissed)(r.DismissibleContent.GAME_ONE_USER_SIGNUPS);
                t && !n && !i && o.default.dispatch({
                    type: "ENABLE_USER_SIGN_UP",
                    key: "valorant-user"
                })
            }), _(d(e), "handleChannelSelect", function(e) {
                var t = e.guildId;
                if (null == t || (0, a.isDismissibleContentDismissed)(r.DismissibleContent.GAME_ONE_USER_SIGNUPS) || !(0, l.getValorantAdminSignupExperiment)("SignUpManager")) return;
                var n = u.default.getGuild(t);
                if (null != n) n.hasFeature(f.GuildFeatures.VALORANT_L30) && s.default.can(f.Permissions.MANAGE_GUILD, n) && o.default.dispatch({
                    type: "ENABLE_GUILD_SIGN_UP",
                    key: "valorant-admin",
                    guildId: t
                })
            }), e
        }
        return m
    }(i.default);
    t.default = new m
}