function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var i = n("872717"),
        s = n("913144"),
        r = n("568734"),
        a = n("299285"),
        o = n("49111"),
        l = {
            async createApplication(e) {
                let {
                    name: t,
                    guildId: n,
                    type: r,
                    teamId: a
                } = e, l = await i.HTTP.post({
                    url: o.Endpoints.APPLICATIONS,
                    body: {
                        name: t,
                        type: r,
                        guild_id: n,
                        team_id: a
                    }
                }), u = l.body;
                return null != n && null != r && s.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: u
                }), u
            },
            async getApplicationsForGuild(e) {
                let {
                    includeTeam: t,
                    ...n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await i.HTTP.get({
                    url: o.Endpoints.GUILD_APPLICATIONS(e),
                    query: {
                        ...n,
                        include_team: t
                    }
                }), a = r.body;
                return s.default.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: a
                }), a
            },
            async transferApplication(e) {
                let {
                    applicationId: t,
                    teamId: n
                } = e, r = await i.HTTP.post({
                    url: o.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                    body: {
                        team_id: n
                    }
                }), a = r.body;
                return s.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: a
                }), a
            },
            async fetchApplications(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e;
                if (!t && (n = e.filter(e => {
                        var t, n;
                        let i = a.default.getApplication(e),
                            s = (0, r.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                            l = s && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                        return !(null != i && !l) && !a.default.isFetchingApplication(e) && !a.default.didFetchingApplicationFail(e) && e.length > 0
                    })), n.length > 0) {
                    let e;
                    s.default.dispatch({
                        type: "APPLICATIONS_FETCH",
                        applicationIds: n
                    });
                    try {
                        e = await i.HTTP.get({
                            url: o.Endpoints.APPLICATIONS_PUBLIC,
                            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                            oldFormErrors: !0
                        })
                    } catch (e) {
                        throw s.default.dispatch({
                            type: "APPLICATIONS_FETCH_FAIL",
                            applicationIds: n
                        }), e
                    }
                    s.default.dispatch({
                        type: "APPLICATIONS_FETCH_SUCCESS",
                        applications: e.body
                    })
                }
            },
            fetchApplication(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return s.default.dispatch({
                    type: "APPLICATION_FETCH",
                    applicationId: e
                }), i.HTTP.get({
                    url: o.Endpoints.APPLICATION_PUBLIC(e),
                    query: {
                        with_guild: t
                    },
                    oldFormErrors: !0
                }).then(e => (s.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: e.body
                }), e.body)).catch(t => (s.default.dispatch({
                    type: "APPLICATION_FETCH_FAIL",
                    applicationId: e
                }), Promise.reject(t)))
            }
        }
}