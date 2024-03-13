function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007");
    var i = n("746379"),
        s = n.n(i),
        r = n("394846"),
        a = n("913144"),
        o = n("970728"),
        l = n("79112"),
        u = n("389153"),
        d = n("412707"),
        c = n("139514"),
        f = n("312016"),
        _ = n("374021"),
        h = n("398604"),
        E = n("468560"),
        g = n("361572"),
        m = n("537325"),
        p = n("835174"),
        S = n("566271"),
        v = n("337543"),
        T = n("18494"),
        I = n("162771"),
        C = n("677099"),
        A = n("599110"),
        y = n("253981");
    n("545158");
    var N = n("49111");
    async function R(e, t) {
        await a.default.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: e,
            code: t,
            context: N.AppContext.APP
        })
    }
    async function O(e) {
        var t;
        let n = v.default.getInvite(e.code);
        if (null == n) {
            let {
                invite: t
            } = await o.default.resolveInvite(e.code, "Markdown Link");
            n = t
        }
        if (null == n) return;
        if (n.state === N.InviteStates.EXPIRED || n.state === N.InviteStates.BANNED || n.state === N.InviteStates.ERROR) {
            await R(n, e.code);
            return
        }
        let i = C.default.getFlattenedGuildIds(),
            s = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
            r = null != s && i.includes(s);
        r ? o.default.transitionToInviteSync(n) : await R(n, e.code)
    }
    let D = {
        skipExtensionCheck: void 0,
        analyticsLocations: []
    };

    function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D,
            i = (0, f.findCodedLink)(e),
            {
                skipExtensionCheck: a
            } = t;
        if (null != i && (i.type === c.CodedLinkType.INVITE || i.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), O(i), !0);
        if (null != i && i.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
            var t;
            null == e || e.preventDefault();
            let {
                code: s
            } = i, a = null !== (t = I.default.getGuildId()) && void 0 !== t ? t : void 0;
            return A.default.track(N.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                application_id: s,
                device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                guild_id: a,
                channel_id: T.default.getChannelId()
            }), n.el("646186").then(n.bind(n, "646186")).then(e => {
                let {
                    goToAppDirectory: t
                } = e, {
                    ApplicationDirectoryViews: i
                } = n("412707");
                t({
                    view: i.APPLICATION,
                    applicationId: s,
                    guildId: a,
                    entrypoint: {
                        name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                    }
                })
            }), !0
        };
        if (null != i && i.type === c.CodedLinkType.GUILD_PRODUCT) return e => {
            null == e || e.preventDefault();
            let [t, s] = i.code.split("-");
            return n.el("573777").then(n.bind(n, "573777")).then(e => {
                let {
                    openGuildProductLink: n
                } = e;
                n(t, s)
            }), !0
        };
        let {
            path: o,
            hostname: v = "",
            host: C,
            query: R
        } = s.parse(e), P = y.default.isDiscordHostname(v) || y.default.isDiscordLocalhost(C, v);
        if (P && (null == o ? void 0 : o.startsWith("/application-directory"))) {
            let [, , e, t] = o.split("/"), i = null != e && (0, u.isSnowflake)(e) ? e : void 0;
            return s => {
                var a;
                null == s || s.preventDefault();
                let {
                    ApplicationDirectoryProfileSections: o
                } = n("750947"), {
                    ApplicationDirectoryViews: l
                } = n("412707"), u = null !== (a = I.default.getGuildId()) && void 0 !== a ? a : void 0, c = l.HOME;
                return "search" === e && (c = l.SEARCH), null != i && (c = l.APPLICATION, A.default.track(N.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: i,
                    device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                    guild_id: u,
                    channel_id: T.default.getChannelId()
                })), n.el("646186").then(n.bind(n, "646186")).then(e => {
                    let {
                        goToAppDirectory: n
                    } = e;
                    n({
                        view: c,
                        applicationId: i,
                        guildId: u,
                        applicationSection: (0, E.default)(o, t),
                        entrypoint: {
                            name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                        }
                    })
                }), !0
            }
        }
        if (null != o && P && y.default.isAppRoute(o)) {
            let e = null != R ? {
                search: R
            } : null;
            return t => (null == t || t.preventDefault(), (0, m.default)(o, e), !0)
        }
        if (null != o && P) {
            let {
                getOAuth2AuthorizeProps: t,
                openOAuth2ModalWithCreateGuildModal: i
            } = n("33942"), s = t(e);
            if (null != s) return e => (null == e || e.preventDefault(), i(s), !0)
        }
        let M = (0, g.tryParseEventDetailsPath)(o);
        if (null != o && P && null != M) return e => {
            null == e || e.preventDefault();
            let t = I.default.getGuildId();
            null != M.guildId && "" !== M.guildId && M.guildId !== t && (0, m.default)(N.Routes.CHANNEL(M.guildId));
            let n = h.default.getGuildScheduledEvent(M.guildEventId);
            return null != n && (0, _.openGuildEventDetails)({
                eventId: n.id
            }), !0
        };
        if (P && (null == o ? void 0 : o.startsWith("/settings/"))) {
            let {
                default: e
            } = n("777523"), t = e(o);
            if (null != t) return e => (null == e || e.preventDefault(), l.default.open(t.section, t.subsection, {
                openWithoutBackstack: !1,
                impressionSource: t.source
            }), !0)
        }
        if (!a && null != (0, S.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), p.default.show(e), !0)
    }
}