function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
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
        S = n("540709"),
        h = n("881706"),
        A = n("701190"),
        m = n("944486"),
        N = n("914010"),
        p = n("771845"),
        O = n("626135"),
        R = n("591759");
    n("782568");
    var C = n("981631");
    async function g(e, t) {
        await s.default.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: e,
            code: t,
            context: C.AppContext.APP
        })
    }
    async function L(e) {
        var t;
        let n = A.default.getInvite(e.code);
        if (null == n) {
            let {
                invite: t
            } = await a.default.resolveInvite(e.code, "Markdown Link");
            n = t
        }
        if (null == n) return;
        if (n.state === C.InviteStates.EXPIRED || n.state === C.InviteStates.BANNED || n.state === C.InviteStates.ERROR) {
            await g(n, e.code);
            return
        }
        let i = p.default.getFlattenedGuildIds(),
            r = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
        null != r && i.includes(r) ? a.default.transitionToInviteSync(n) : await g(n, e.code)
    }
    let v = {
        skipExtensionCheck: void 0,
        analyticsLocations: []
    };

    function D(e) {
        let {
            skipExtensionCheck: t,
            analyticsLocations: s
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v, a = (0, _.findCodedLink)(e);
        if (null != a && (a.type === d.CodedLinkType.INVITE || a.type === d.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), L(a), !0);
        if (null != a && a.type === d.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
            var t;
            null == e || e.preventDefault();
            let {
                code: i
            } = a, s = null !== (t = N.default.getGuildId()) && void 0 !== t ? t : void 0;
            return O.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                application_id: i,
                device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                guild_id: s,
                channel_id: m.default.getChannelId()
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
            path: A,
            hostname: p = "",
            host: g,
            query: D,
            hash: M
        } = i.parse(e), y = R.default.isDiscordHostname(p) || R.default.isDiscordLocalhost(g, p);
        if (y && (null == A ? void 0 : A.startsWith("/application-directory"))) {
            let [, , e, t] = A.split("/"), i = null != e && (0, l.isSnowflake)(e) ? e : void 0;
            return s => {
                var a;
                null == s || s.preventDefault();
                let {
                    ApplicationDirectoryProfileSections: o
                } = n("272242"), {
                    ApplicationDirectoryViews: l
                } = n("132871"), d = null !== (a = N.default.getGuildId()) && void 0 !== a ? a : void 0, _ = l.HOME;
                return "search" === e && (_ = l.SEARCH), null != i && (_ = l.APPLICATION, O.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: i,
                    device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                    guild_id: d,
                    channel_id: m.default.getChannelId()
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
        if (null != A && y && R.default.isAppRoute(A)) {
            let e = {};
            return null != D && (e.search = D), null != M && (e.hash = M), t => (null == t || t.preventDefault(), (0, f.default)(A, Object.keys(e).length > 0 ? e : null), !0)
        }
        if (null != A && y) {
            let {
                getOAuth2AuthorizeProps: t,
                openOAuth2ModalWithCreateGuildModal: i
            } = n("69580"), r = t(e);
            if (null != r) return e => (null == e || e.preventDefault(), i(r), !0)
        }
        let P = (0, T.tryParseEventDetailsPath)(A);
        if (null != A && y && null != P) return e => {
            null == e || e.preventDefault();
            let t = N.default.getGuildId();
            null != P.guildId && "" !== P.guildId && P.guildId !== t && (0, f.default)(C.Routes.CHANNEL(P.guildId));
            let n = E.default.getGuildScheduledEvent(P.guildEventId);
            return null != n && (0, c.openGuildEventDetails)({
                eventId: n.id
            }), !0
        };
        if (y && (null == A ? void 0 : A.startsWith("/settings/"))) {
            let {
                default: e
            } = n("357269"), t = e(A);
            if (null != t) return e => (null == e || e.preventDefault(), o.default.open(t.section, t.subsection, {
                openWithoutBackstack: !1,
                impressionSource: t.source,
                analyticsLocations: s
            }), !0)
        }
        if (!t && null != (0, h.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), S.default.show(e), !0)
    }
}