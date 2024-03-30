function(e, t, n) {
    "use strict";
    n.r(t), n("536091"), n("47120"), n("789020");
    var i = n("392711"),
        r = n.n(i),
        s = n("544891"),
        a = n("570140"),
        o = n("45114"),
        l = n("367907"),
        u = n("781792"),
        d = n("962086"),
        _ = n("160404"),
        c = n("152376"),
        E = n("592125"),
        I = n("271383"),
        T = n("594174"),
        f = n("626135"),
        S = n("630388"),
        h = n("823379"),
        A = n("960048"),
        m = n("709054"),
        N = n("45966"),
        O = n("637853"),
        p = n("816436"),
        R = n("981631"),
        C = n("372897"),
        g = n("490897");

    function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (_.default.isFullServerPreview(e)) return;
        let n = t ? N.default.getOnboardingPromptsForOnboarding(e) : N.default.getOnboardingPrompts(e),
            i = N.default.getOnboardingResponses(e),
            r = n.map(e => e.options.filter(e => i.includes(e.id))).flat(),
            o = {},
            l = {};
        return (n.forEach(e => {
            o[e.id] = Date.now(), e.options.forEach(e => l[e.id] = Date.now())
        }), t) ? s.HTTP.post({
            url: R.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
            body: {
                onboarding_responses: r.map(e => e.id),
                onboarding_prompts_seen: o,
                onboarding_responses_seen: l
            }
        }).then(t => {
            null != t.body && a.default.dispatch({
                type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                guildId: e,
                options: t.body.onboarding_responses,
                prompts_seen: t.body.onboarding_prompts_seen,
                options_seen: t.body.onboarding_responses_seen
            })
        }).catch(e => A.default.captureException(e)) : s.HTTP.put({
            url: R.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
            body: {
                onboarding_responses: r.map(e => e.id),
                onboarding_prompts_seen: o,
                onboarding_responses_seen: l
            }
        }).then(t => {
            null != t.body && a.default.dispatch({
                type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                guildId: e,
                options: t.body.onboarding_responses,
                prompts_seen: t.body.onboarding_prompts_seen,
                options_seen: t.body.onboarding_responses_seen
            })
        }).catch(e => A.default.captureException(e))
    }
    t.default = {
        selectOption(e, t, n, i) {
            let s = N.default.getOnboardingPrompt(t);
            if (null == s) return;
            let o = s.singleSelect ? r().without(r().map(s.options, "id"), n) : [];
            a.default.dispatch({
                type: "GUILD_ONBOARDING_SELECT_OPTION",
                guildId: e,
                promptId: t,
                optionId: n,
                selected: i,
                removedOptionIds: o
            })
        },
        updateOnboardingResponses: r().debounce(L, 1e3),
        updateRolesLocal: function(e, t, n) {
            var i, s;
            let o = null !== (s = null === (i = I.default.getSelfMember(e)) || void 0 === i ? void 0 : i.roles) && void 0 !== s ? s : [];
            if (_.default.isViewingRoles(e)) {
                (0, d.updateImpersonatedRoles)(e, r().difference(r().union(o, t), n));
                return
            }(t.length > 0 || n.length > 0) && a.default.dispatch({
                type: "GUILD_MEMBER_UPDATE_LOCAL",
                guildId: e,
                roles: r().difference(r().union(o, t), n),
                addedRoleIds: t,
                removedRoleIds: n
            })
        },
        completeOnboarding(e, t) {
            let n = t.length > 0 ? t[t.length - 1] : null,
                i = N.default.getSelectedOptions(e),
                r = (0, O.getSelectedRoleIds)(i),
                s = (0, O.getSelectedChannelIds)(i),
                a = N.default.getEnabled(e) ? N.default.getDefaultChannelIds(e) : [],
                [u, c] = (0, O.getChannelCoverageForOnboarding)(e, t, a),
                A = [...s, ...a],
                D = A.map(e => E.default.getChannel(e)).filter(h.isNotNullish),
                v = (0, p.getFlattenedChannels)(e, new Set(A), D, !0).length,
                M = null == n ? [] : n.options.map(e => e.id);
            if (f.default.track(R.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    step: t.length - 1,
                    options_selected: null == n ? 0 : i.filter(e => M.includes(e.id)).length,
                    skipped: M.length > 0,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !0,
                    roles_granted: r.size,
                    channels_granted: v,
                    guild_onboarding_covered_channel_ids: u.map(e => e.id),
                    guild_onboarding_uncovered_channel_ids: c.map(e => e.id)
                }), (0, o.ackGuildFeature)(e, g.ReadStateTypes.GUILD_ONBOARDING_QUESTION, m.default.fromTimestamp(Date.now())), L(e, !0), _.default.isFullServerPreview(e)) {
                (0, d.updateImpersonatedChannels)(e, A, []), (0, d.updateImpersonatedData)(e, {
                    optInEnabled: !0
                }), (0, d.updateImpersonatedRoles)(e, Array.from(r));
                let t = T.default.getCurrentUser();
                if (null != t) {
                    var y, P;
                    let n = null !== (P = null === (y = I.default.getMember(e, t.id)) || void 0 === y ? void 0 : y.flags) && void 0 !== P ? P : 0;
                    (0, d.updateImpersonatedData)(e, {
                        memberOptions: {
                            flags: (0, S.setFlag)(n, C.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                        }
                    })
                }
            }
        },
        onboardExistingMember(e, t) {
            let n = new Set(t);
            (N.default.getEnabled(e) ? N.default.getDefaultChannelIds(e) : []).forEach(e => n.add(e)), n.size > 0 && (0, c.bulkOptInChannels)(e, Array.from(n), !0, {
                page: R.AnalyticsPages.GUILD_ONBOARDING
            })
        },
        finishOnboarding(e) {
            a.default.dispatch({
                type: "GUILD_ONBOARDING_COMPLETE",
                guildId: e
            })
        },
        setUserOnboardingStep(e, t) {
            a.default.dispatch({
                type: "GUILD_ONBOARDING_SET_STEP",
                guildId: e,
                step: t
            })
        },
        async resetOnboarding(e) {
            let t = T.default.getCurrentUser();
            if (null != t) {
                var n, i;
                let r = null !== (i = null === (n = I.default.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
                await (0, u.updateGuildSelfMember)(e, {
                    flags: (0, S.setFlag)(r, C.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
                })
            }
        }
    }
}