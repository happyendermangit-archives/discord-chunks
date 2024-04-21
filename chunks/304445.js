function(e, t, a) {
    "use strict";
    a.r(t), a("47120"), a("411104");
    var d = a("540571"),
        n = a("266067"),
        c = a("38618"),
        i = a("57132"),
        o = a("215355"),
        r = a("777639"),
        f = a("311163"),
        l = a("272423"),
        s = a("781157"),
        u = a("700615"),
        b = a("905423"),
        h = a("703656"),
        p = a("981631");

    function m(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }
    t.default = new class e {
        initialize() {
            this.cleanup(), this.unlistenHistory = (0, h.getHistory)().listen(this.handleRouteChange);
            let {
                pathname: e
            } = (0, h.getHistory)().location;
            b.default.getState().resetPath(e), this.unlistenKeyboardChange = b.default.subscribe(this.handleKeybindRouteChange), c.default.addChangeListener(this.handleConnectionChange)
        }
        convertRouteToNavigation(e, t) {
            var a, d, c;
            let {
                pathname: b
            } = e, h = (0, r.getRootNavigationRef)(), m = (0, i.isInMainTabsExperiment)(), {
                mergeTabs: _
            } = (0, o.getMergedTabsExperiment)({
                location: "convertRouteToNavigation"
            });
            if (null == h || !h.isReady()) return;
            let E = e.navigationReplace,
                g = null !== (a = e.useScreen) && void 0 !== a && a;
            if (m && (0, s.isSplitMessagesTab)() && b === p.Routes.ME) {
                (0, l.navigateToRootTab)({
                    screen: "messages"
                });
                return
            }
            if (m && b === p.Routes.NOTIFICATIONS) {
                (0, l.navigateToRootTab)({
                    screen: "notifications"
                });
                return
            }
            if (b.startsWith("/channels/")) {
                let e = (0, n.matchPath)(b, {
                        path: p.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                    }),
                    t = (0, n.matchPath)(b, {
                        path: "".concat(p.Routes.CHANNEL(":guildId", ":channelId?")).concat(p.Routes.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                    });
                if (!m) {
                    let e = h.getRootState();
                    (null == e ? void 0 : null === (c = e.routes) || void 0 === c ? void 0 : null === (d = c[0]) || void 0 === d ? void 0 : d.name) !== "panels" && (0, l.resetToPanelsUI)();
                    return
                }
                if (null != t) {
                    let {
                        voiceGuildId: e,
                        voiceChannelId: a,
                        voiceMessageId: d
                    } = t.params;
                    !(0, u.isVoicePanelEnabled)() && (0, l.navigateToChannel)({
                        channelId: a,
                        guildId: e,
                        messageId: d,
                        replaceChannelAndFixRoot: E,
                        useScreen: g
                    });
                    return
                }
                if (null != e) {
                    let {
                        channelId: t,
                        guildId: a,
                        messageId: d
                    } = e.params;
                    if (!(0, s.isSplitMessagesTab)() && !_) {
                        (0, l.navigateToRootTab)({
                            screen: "guilds",
                            guildId: a
                        });
                        return
                    }
                    if ((0, s.isOnNewPanels)()) {
                        let [e, d] = (0, f.default)(h.getCurrentRoute());
                        if (e === a && d === t) return
                    }
                    null == t || (0, s.shouldHandleNewPanelsRoute)(a) && !1 !== E ? a !== p.ME || _ ? (0, l.navigateToRootTab)({
                        screen: "guilds",
                        guildId: a,
                        channelId: (0, s.isOnNewPanels)() ? t : void 0
                    }) : (0, l.navigateToRootTab)({
                        screen: "messages"
                    }) : null != a && (0, l.navigateToChannel)({
                        channelId: t,
                        guildId: a,
                        messageId: d,
                        replaceChannelAndFixRoot: E,
                        useScreen: g
                    })
                }
                return
            }
            if (b.startsWith("/member-verification/")) {
                let e = (0, n.matchPath)(b, {
                    path: p.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
                });
                null != e && (0, l.navigateToMemberVerification)(e.params.guildId, e.params.inviteCode);
                return
            }
            if (b.startsWith("/login") || b.startsWith("/register")) {
                (0, l.resetToAuthRoute)();
                return
            }
            if (b.startsWith("/account-standing")) {
                h.navigate({
                    name: "account-standing",
                    params: void 0
                });
                return
            }
            m && (0, l.navigateToRootTab)({
                screen: "messages"
            })
        }
        executeRouteRewrites(e, t) {
            if (this.routeChangeCount += 1, this.routeChangeCount < 10)
                for (let a of this.rewrites) {
                    let n = (0, h.getHistory)().location.pathname,
                        c = a(e, t);
                    if (null != c) return (0, d.addBreadcrumb)({
                        message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                        data: {
                            replacePath: c.path,
                            previousPath: n
                        }
                    }), (0, h.replaceWith)(c.path, c.state), !0
                } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
            return !1
        }
        cleanup() {
            var e, t;
            null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, c.default.removeChangeListener(this.handleConnectionChange)
        }
        addRouteChangeListener(e) {
            return null != this.unlistenHistory && e((0, h.getHistory)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
        }
        addRouteRewriter(e) {
            if (null != this.unlistenHistory) {
                let t = e((0, h.getHistory)().location, (0, h.getHistory)().action);
                null != t && (0, h.replaceWith)(t.path, t.state)
            }
            return this.rewrites.add(e), () => this.removeRouteRewriter(e)
        }
        removeRouteChangeListener(e) {
            this.listeners.delete(e)
        }
        removeRouteRewriter(e) {
            this.rewrites.delete(e)
        }
        getHistory() {
            return (0, h.getHistory)()
        }
        constructor() {
            m(this, "unlistenHistory", void 0), m(this, "unlistenKeyboardChange", void 0), m(this, "rewrites", new Set), m(this, "listeners", new Set), m(this, "routeChangeCount", 0), m(this, "timer", -1), m(this, "connected", !1), m(this, "handleConnectionChange", () => {
                let e = c.default.isConnected(),
                    t = e && !this.connected;
                this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, h.getHistory)().location, "REPLACE"))
            }), m(this, "handleRouteChange", (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                let a = b.default.getState();
                for (let d of (a.basePath !== e.pathname && a.resetPath(e.pathname), this.listeners)) try {
                    d(e, t)
                } catch (e) {
                    console.warn("RouteManager.listen: A route listener has caused an error", e.message)
                }
                this.convertRouteToNavigation(e, t), this.routeChangeCount = 0
            }), m(this, "handleKeybindRouteChange", e => {
                let {
                    path: t
                } = e;
                null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer)
            }), m(this, "flushRoute", () => {
                clearTimeout(this.timer);
                let e = b.default.getState();
                null != e.path && (0, h.transitionTo)(e.path)
            })
        }
    }
}