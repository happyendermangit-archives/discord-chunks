function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return U
        }
    }), n("834022"), n("222007"), n("702976");
    var a = n("917351"),
        l = n.n(a),
        i = n("872717"),
        d = n("913144"),
        s = n("267363"),
        r = n("716241"),
        o = n("412355"),
        u = n("479756"),
        f = n("38654"),
        g = n("629220"),
        c = n("42203"),
        _ = n("26989"),
        p = n("697218"),
        E = n("599110"),
        N = n("568734"),
        S = n("449008"),
        h = n("286235"),
        C = n("299039"),
        O = n("863636"),
        I = n("380710"),
        A = n("843323"),
        G = n("49111"),
        T = n("657944"),
        D = n("133335");

    function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (f.default.isFullServerPreview(e)) return;
        let n = t ? O.default.getOnboardingPromptsForOnboarding(e) : O.default.getOnboardingPrompts(e),
            a = O.default.getOnboardingResponses(e),
            l = n.map(e => e.options.filter(e => a.includes(e.id))).flat(),
            s = {},
            r = {};
        return (n.forEach(e => {
            s[e.id] = Date.now(), e.options.forEach(e => r[e.id] = Date.now())
        }), t) ? i.default.post({
            url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
            body: {
                onboarding_responses: l.map(e => e.id),
                onboarding_prompts_seen: s,
                onboarding_responses_seen: r
            }
        }).then(t => {
            null != t.body && d.default.dispatch({
                type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                guildId: e,
                options: t.body.onboarding_responses,
                prompts_seen: t.body.onboarding_prompts_seen,
                options_seen: t.body.onboarding_responses_seen
            })
        }).catch(e => h.default.captureException(e)) : i.default.put({
            url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
            body: {
                onboarding_responses: l.map(e => e.id),
                onboarding_prompts_seen: s,
                onboarding_responses_seen: r
            }
        }).then(t => {
            null != t.body && d.default.dispatch({
                type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                guildId: e,
                options: t.body.onboarding_responses,
                prompts_seen: t.body.onboarding_prompts_seen,
                options_seen: t.body.onboarding_responses_seen
            })
        }).catch(e => h.default.captureException(e))
    }
    var U = {
        selectOption(e, t, n, a) {
            let i = O.default.getOnboardingPrompt(t);
            if (null == i) return;
            let s = i.singleSelect ? l.without(l.map(i.options, "id"), n) : [];
            d.default.dispatch({
                type: "GUILD_ONBOARDING_SELECT_OPTION",
                guildId: e,
                promptId: t,
                optionId: n,
                selected: a,
                removedOptionIds: s
            })
        },
        updateOnboardingResponses: l.debounce(L, 1e3),
        updateRolesLocal: function(e, t, n) {
            var a, i;
            let s = null !== (i = null === (a = _.default.getSelfMember(e)) || void 0 === a ? void 0 : a.roles) && void 0 !== i ? i : [];
            if (f.default.isViewingRoles(e)) {
                (0, u.updateImpersonatedRoles)(e, l.difference(l.union(s, t), n));
                return
            }(t.length > 0 || n.length > 0) && d.default.dispatch({
                type: "GUILD_MEMBER_UPDATE_LOCAL",
                guildId: e,
                roles: l.difference(l.union(s, t), n),
                addedRoleIds: t,
                removedRoleIds: n
            })
        },
        completeOnboarding(e, t) {
            let n = t.length > 0 ? t[t.length - 1] : null,
                a = O.default.getSelectedOptions(e),
                l = (0, I.getSelectedRoleIds)(a),
                i = (0, I.getSelectedChannelIds)(a),
                d = O.default.getEnabled(e) ? O.default.getDefaultChannelIds(e) : [],
                [o, g] = (0, I.getChannelCoverageForOnboarding)(e, t, d),
                h = [...i, ...d],
                U = h.map(e => c.default.getChannel(e)).filter(S.isNotNullish),
                v = (0, A.getFlattenedChannels)(e, new Set(h), U, !0).length,
                b = null == n ? [] : n.options.map(e => e.id);
            if (E.default.track(G.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    step: t.length - 1,
                    options_selected: null == n ? 0 : a.filter(e => b.includes(e.id)).length,
                    skipped: b.length > 0,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !0,
                    roles_granted: l.size,
                    channels_granted: v,
                    guild_onboarding_covered_channel_ids: o.map(e => e.id),
                    guild_onboarding_uncovered_channel_ids: g.map(e => e.id)
                }), (0, s.ackGuildFeature)(e, D.ReadStateTypes.GUILD_ONBOARDING_QUESTION, C.default.fromTimestamp(Date.now())), L(e, !0), f.default.isFullServerPreview(e)) {
                (0, u.updateImpersonatedChannels)(e, h, []), (0, u.updateImpersonatedData)(e, {
                    optInEnabled: !0
                }), (0, u.updateImpersonatedRoles)(e, Array.from(l));
                let t = p.default.getCurrentUser();
                if (null != t) {
                    var F, y;
                    let n = null !== (y = null === (F = _.default.getMember(e, t.id)) || void 0 === F ? void 0 : F.flags) && void 0 !== y ? y : 0;
                    (0, u.updateImpersonatedData)(e, {
                        memberOptions: {
                            flags: (0, N.setFlag)(n, T.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                        }
                    })
                }
            }
        },
        onboardExistingMember(e, t) {
            let n = new Set(t),
                a = O.default.getEnabled(e) ? O.default.getDefaultChannelIds(e) : [];
            a.forEach(e => n.add(e)), n.size > 0 && (0, g.bulkOptInChannels)(e, Array.from(n), !0, {
                page: G.AnalyticsPages.GUILD_ONBOARDING
            })
        },
        finishOnboarding(e) {
            d.default.dispatch({
                type: "GUILD_ONBOARDING_COMPLETE",
                guildId: e
            })
        },
        setUserOnboardingStep(e, t) {
            d.default.dispatch({
                type: "GUILD_ONBOARDING_SET_STEP",
                guildId: e,
                step: t
            })
        },
        async resetOnboarding(e) {
            let t = p.default.getCurrentUser();
            if (null != t) {
                var n, a;
                let l = null !== (a = null === (n = _.default.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== a ? a : 0;
                await (0, o.updateGuildSelfMember)(e, {
                    flags: (0, N.setFlag)(l, T.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
                })
            }
        }
    }
}