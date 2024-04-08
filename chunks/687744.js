function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        questRewardsConfigFromServer: function() {
            return s
        }
    });
    var i = n("887003");

    function r(e) {
        switch (e.tag) {
            case i.QuestRewardTypes.COLLECTIBLE:
                return {
                    tag: e.tag, skuId: e.sku_id, messages: {
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    }
                };
            case i.QuestRewardTypes.IN_GAME:
                return {
                    tag: e.tag, skuId: e.sku_id, messages: {
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article,
                        redemptionInstructions: e.messages.redemption_instructions
                    }
                };
            case i.QuestRewardTypes.REWARD_CODE:
                return {
                    tag: e.tag, skuId: e.sku_id, messages: {
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article,
                        redemptionInstructionsByPlatform: e.messages.redemption_instructions_by_platform
                    }, asset: e.asset
                }
        }
    }

    function s(e) {
        return {
            assignmentMethod: e.assignment_method,
            rewards: e.rewards.map(r)
        }
    }
}