function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("47120");
    var i = n("729594"),
        r = n("873546"),
        s = n("570140"),
        a = n("447543"),
        o = n("230711"),
        l = n("581364"),
        u = n("132871"),
        d = n("960904"),
        _ = n("830121"),
        c = n("15274"),
        E = n("924301"),
        I = n("543842"),
        T = n("754688"),
        f = n("336197"),
        S = n("776980"),
        h = n("386346"),
        A = n("540709"),
        m = n("881706"),
        N = n("701190"),
        O = n("944486"),
        p = n("914010"),
        R = n("771845"),
        C = n("626135"),
        g = n("591759");
    n("782568");
    var L = n("981631");
    async function D(e, t) {
        await s.default.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: e,
            code: t,
            context: L.AppContext.APP
        })
    }
    async function v(e) {
        var t;
        let n = N.default.getInvite(e.code);
        if (null == n) {
            let {
                invite: t
            } = await a.default.resolveInvite(e.code, "Markdown Link");
            n = t
        }
        if (null == n) return;
        if (n.state === L.InviteStates.EXPIRED || n.state === L.InviteStates.BANNED || n.state === L.InviteStates.ERROR) {
            await D(n, e.code);
            return
        }
        let i = R.default.getFlattenedGuildIds(),
            r = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
        null != r && i.includes(r) ? a.default.transitionToInviteSync(n) : await D(n, e.code)
    }
    let M = {
        skipExtensionCheck: void 0,
        analyticsLocations: []
    };

    function y(e) {
        let {
            skipExtensionCheck: t,
            analyticsLocations: s
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M, a = (0, _.findCodedLink)(e);
        if (null != a && (a.type === d.CodedLinkType.INVITE || a.type === d.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), v(a), !0);
        if (null != a && a.type === d.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
            var t;
            null == e || e.preventDefault();
            let {
                code: i
            } = a, s = null !== (t = p.default.getGuildId()) && void 0 !== t ? t : void 0;
            return C.default.track(L.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                application_id: i,
                device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                guild_id: s,
                channel_id: O.default.getChannelId()
            }), n.e("56630").then(n.bind(n, "147890")).then(e => {
                let {
                    goToAppDirectory: t
                } = e, {
                    ApplicationDirectoryViews: r
                } = n("132871");
                t({
                    view: r.APPLICATION,
                    applicationId: i,
                    guildId: s,
                    entrypoint: {
                        name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                    }
                })
            }), !0
        };
        if (null != a && a.type === d.CodedLinkType.GUILD_PRODUCT) return e => {
            null == e || e.preventDefault();
            let [t, i] = a.code.split("-");
            return n.e("84239").then(n.bind(n, "838433")).then(e => {
                let {
                    openGuildProductLink: n
                } = e;
                n(t, i)
            }), !0
        };
        let {
            path: N,
            hostname: R = "",
            host: D,
            query: y
        } = i.parse(e), P = g.default.isDiscordHostname(R) || g.default.isDiscordLocalhost(D, R);
        if (P && (null == N ? void 0 : N.startsWith("/application-directory"))) {
            let [, , e, t] = N.split("/"), i = null != e && (0, l.isSnowflake)(e) ? e : void 0;
            return s => {
                var a;
                null == s || s.preventDefault();
                let {
                    ApplicationDirectoryProfileSections: o
                } = n("272242"), {
                    ApplicationDirectoryViews: l
                } = n("132871"), d = null !== (a = p.default.getGuildId()) && void 0 !== a ? a : void 0, _ = l.HOME;
                return "search" === e && (_ = l.SEARCH), null != i && (_ = l.APPLICATION, C.default.track(L.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: i,
                    device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                    guild_id: d,
                    channel_id: O.default.getChannelId()
                })), n.e("56630").then(n.bind(n, "147890")).then(e => {
                    let {
                        goToAppDirectory: n
                    } = e;
                    n({
                        view: _,
                        applicationId: i,
                        guildId: d,
                        applicationSection: (0, I.default)(o, t),
                        entrypoint: {
                            name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                        }
                    })
                }), !0
            }
        }
        if (null != N && P && g.default.isAppRoute(N)) {
            let e = null != y ? {
                search: y
            } : null;
            return t => (null == t || t.preventDefault(), (0, f.default)(N, e), !0)
        }
        if (null != N && P) {
            let {
                getOAuth2AuthorizeProps: t,
                openOAuth2ModalWithCreateGuildModal: i
            } = n("69580"), r = t(e);
            if (null != r) return e => (null == e || e.preventDefault(), i(r), !0)
        }
        let U = (0, T.tryParseEventDetailsPath)(N);
        if (null != N && P && null != U) return e => {
            null == e || e.preventDefault();
            let t = p.default.getGuildId();
            null != U.guildId && "" !== U.guildId && U.guildId !== t && (0, f.default)(L.Routes.CHANNEL(U.guildId));
            let n = E.default.getGuildScheduledEvent(U.guildEventId);
            return null != n && (0, c.openGuildEventDetails)({
                eventId: n.id
            }), !0
        };
        if (P && (null == N ? void 0 : N.startsWith("/settings/"))) {
            let {
                default: e
            } = n("357269"), t = e(N);
            if (null != t) return e => (null == e || e.preventDefault(), N === L.Routes.SETTINGS(L.UserSettingsSections.LOOTBOXES) && !h.default.tempShowLootboxSettings && (0, S.showLootboxSettings)(), o.default.open(t.section, t.subsection, {
                openWithoutBackstack: !1,
                impressionSource: t.source,
                analyticsLocations: s
            }), !0)
        }
        if (!t && null != (0, m.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), A.default.show(e), !0)
    }
}