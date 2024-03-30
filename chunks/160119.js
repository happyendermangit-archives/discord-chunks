function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("540571"),
        r = n("266067"),
        c = n("950879"),
        o = n("895517"),
        i = n("807696"),
        f = n("681446"),
        d = n("913867"),
        u = n("164161"),
        l = n("709537"),
        s = n("527500"),
        b = n("416700"),
        p = n("163291"),
        h = n("281767");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var E = function() {
        var e, t, n;

        function E() {
            var e = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), y(this, "unlistenHistory", void 0), y(this, "unlistenKeyboardChange", void 0), y(this, "rewrites", new Set), y(this, "listeners", new Set), y(this, "routeChangeCount", 0), y(this, "timer", -1), y(this, "connected", !1), y(this, "handleConnectionChange", function() {
                var t = c.default.isConnected(),
                    n = t && !e.connected;
                e.connected = t, n && (e.routeChangeCount = 0, e.executeRouteRewrites((0, p.getHistory)().location, "REPLACE"))
            }), y(this, "handleRouteChange", function(t, n) {
                if (!e.executeRouteRewrites(t, n)) {
                    var a = b.default.getState();
                    a.basePath !== t.pathname && a.resetPath(t.pathname);
                    var r = !0,
                        c = !1,
                        o = void 0;
                    try {
                        for (var i, f = e.listeners[Symbol.iterator](); !(r = (i = f.next()).done); r = !0) {
                            var d = i.value;
                            try {
                                d(t, n)
                            } catch (e) {
                                console.warn("RouteManager.listen: A route listener has caused an error", e.message)
                            }
                        }
                    } catch (e) {
                        c = !0, o = e
                    } finally {
                        try {
                            !r && null != f.return && f.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    e.convertRouteToNavigation(t, n), e.routeChangeCount = 0
                }
            }), y(this, "handleKeybindRouteChange", function(t) {
                var n = t.path;
                null != n ? (clearTimeout(e.timer), e.timer = setTimeout(e.flushRoute, 200)) : null == n && clearTimeout(e.timer)
            }), y(this, "flushRoute", function() {
                clearTimeout(e.timer);
                var t = b.default.getState();
                null != t.path && (0, p.transitionTo)(t.path)
            })
        }
        return e = E, t = [{
            key: "initialize",
            value: function() {
                this.cleanup(), this.unlistenHistory = (0, p.getHistory)().listen(this.handleRouteChange);
                var e = (0, p.getHistory)().location.pathname;
                b.default.getState().resetPath(e), this.unlistenKeyboardChange = b.default.subscribe(this.handleKeybindRouteChange), c.default.addChangeListener(this.handleConnectionChange)
            }
        }, {
            key: "convertRouteToNavigation",
            value: function(e, t) {
                var n = e.pathname,
                    a = (0, f.getRootNavigationRef)(),
                    c = (0, o.isInMainTabsExperiment)(),
                    b = (0, i.getNavYouBarExperiment)({
                        location: "convertRouteToNavigation"
                    }).showYouBar;
                if (null != a && a.isReady()) {
                    var p = e.navigationReplace,
                        v = null !== (_ = e.useScreen) && void 0 !== _ && _;
                    if (c && (0, l.isSplitMessagesTab)() && n === h.Routes.ME) {
                        (0, u.navigateToRootTab)({
                            screen: "messages",
                            resetRoot: p
                        });
                        return
                    }
                    if (c && n === h.Routes.NOTIFICATIONS) {
                        (0, u.navigateToRootTab)({
                            screen: "notifications",
                            resetRoot: p
                        });
                        return
                    }
                    if (n.startsWith("/channels/")) {
                        var y = (0, r.matchPath)(n, {
                                path: h.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                            }),
                            E = (0, r.matchPath)(n, {
                                path: "".concat(h.Routes.CHANNEL(":guildId", ":channelId?")).concat(h.Routes.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                            });
                        if (!c) {
                            var _, g, O, I = a.getRootState();
                            (null == I ? void 0 : null === (O = I.routes) || void 0 === O ? void 0 : null === (g = O[0]) || void 0 === g ? void 0 : g.name) !== "panels" && (0, u.resetToPanelsUI)();
                            return
                        }
                        if (null != E) {
                            var w = E.params,
                                R = w.voiceGuildId,
                                T = w.voiceChannelId,
                                S = w.voiceMessageId;
                            (0, s.isOldVoiceUIEnabled)() && (0, u.navigateToChannel)({
                                channelId: T,
                                guildId: R,
                                messageId: S,
                                replaceChannelAndFixRoot: p,
                                useScreen: v
                            });
                            return
                        }
                        if (null != y) {
                            var P = y.params,
                                A = P.channelId,
                                N = P.guildId,
                                C = P.messageId;
                            if (!(0, l.isSplitMessagesTab)() && !b) {
                                (0, u.navigateToRootTab)({
                                    screen: "guilds",
                                    guildId: N,
                                    resetRoot: p
                                });
                                return
                            }
                            if ((0, l.isOnNewPanels)()) {
                                var D, k, L = (D = (0, d.default)(a.getCurrentRoute()), k = 2, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(D) || function(e, t) {
                                        var n, a, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var c = [],
                                                o = !0,
                                                i = !1;
                                            try {
                                                for (r = r.call(e); !(o = (n = r.next()).done) && (c.push(n.value), !t || c.length !== t); o = !0);
                                            } catch (e) {
                                                i = !0, a = e
                                            } finally {
                                                try {
                                                    !o && null != r.return && r.return()
                                                } finally {
                                                    if (i) throw a
                                                }
                                            }
                                            return c
                                        }
                                    }(D, k) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return m(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                                        }
                                    }(D, k) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    M = L[0],
                                    j = L[1];
                                if (M === N && j === A) return
                            }
                            null == A || (0, l.shouldHandleNewPanelsRoute)(N) && !1 !== p ? N !== h.ME || b ? (0, u.navigateToRootTab)({
                                screen: "guilds",
                                guildId: N,
                                channelId: (0, l.isOnNewPanels)() ? A : void 0,
                                resetRoot: p
                            }) : (0, u.navigateToRootTab)({
                                screen: "messages",
                                resetRoot: p
                            }) : null != N && (0, u.navigateToChannel)({
                                channelId: A,
                                guildId: N,
                                messageId: C,
                                replaceChannelAndFixRoot: p,
                                useScreen: v
                            })
                        }
                        return
                    }
                    if (n.startsWith("/member-verification/")) {
                        var U = (0, r.matchPath)(n, {
                            path: h.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
                        });
                        null != U && (0, u.navigateToMemberVerification)(U.params.guildId, U.params.inviteCode);
                        return
                    }
                    if (n.startsWith("/login") || n.startsWith("/register")) {
                        (0, u.resetToAuthRoute)();
                        return
                    }
                    if (n.startsWith("/account-standing")) {
                        a.navigate({
                            name: "account-standing",
                            params: void 0
                        });
                        return
                    }
                    c && (0, u.navigateToRootTab)({
                        screen: "messages",
                        resetRoot: p
                    })
                }
            }
        }, {
            key: "executeRouteRewrites",
            value: function(e, t) {
                if (this.routeChangeCount += 1, this.routeChangeCount < 10) {
                    var n = !0,
                        r = !1,
                        c = void 0;
                    try {
                        for (var o, i = this.rewrites[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                            var f = o.value,
                                d = (0, p.getHistory)().location.pathname,
                                u = f(e, t);
                            if (null != u) return (0, a.addBreadcrumb)({
                                message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                                data: {
                                    replacePath: u.path,
                                    previousPath: d
                                }
                            }), (0, p.replaceWith)(u.path, u.state), !0
                        }
                    } catch (e) {
                        r = !0, c = e
                    } finally {
                        try {
                            !n && null != i.return && i.return()
                        } finally {
                            if (r) throw c
                        }
                    }
                } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
                return !1
            }
        }, {
            key: "cleanup",
            value: function() {
                var e, t;
                null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, c.default.removeChangeListener(this.handleConnectionChange)
            }
        }, {
            key: "addRouteChangeListener",
            value: function(e) {
                var t = this;
                return null != this.unlistenHistory && e((0, p.getHistory)().location, "REPLACE"), this.listeners.add(e),
                    function() {
                        return t.removeRouteChangeListener(e)
                    }
            }
        }, {
            key: "addRouteRewriter",
            value: function(e) {
                var t = this;
                if (null != this.unlistenHistory) {
                    var n = e((0, p.getHistory)().location, (0, p.getHistory)().action);
                    null != n && (0, p.replaceWith)(n.path, n.state)
                }
                return this.rewrites.add(e),
                    function() {
                        return t.removeRouteRewriter(e)
                    }
            }
        }, {
            key: "removeRouteChangeListener",
            value: function(e) {
                this.listeners.delete(e)
            }
        }, {
            key: "removeRouteRewriter",
            value: function(e) {
                this.rewrites.delete(e)
            }
        }, {
            key: "getHistory",
            value: function() {
                return (0, p.getHistory)()
            }
        }], v(e.prototype, t), n && v(e, n), E
    }();
    t.default = new E
}