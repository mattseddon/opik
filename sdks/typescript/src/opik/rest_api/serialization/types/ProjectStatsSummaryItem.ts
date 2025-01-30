/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { FeedbackScoreAverage } from "./FeedbackScoreAverage";
import { PercentageValues } from "./PercentageValues";

export const ProjectStatsSummaryItem: core.serialization.ObjectSchema<
    serializers.ProjectStatsSummaryItem.Raw,
    OpikApi.ProjectStatsSummaryItem
> = core.serialization.object({
    projectId: core.serialization.property("project_id", core.serialization.string().optional()),
    feedbackScores: core.serialization.property(
        "feedback_scores",
        core.serialization.list(FeedbackScoreAverage).optional()
    ),
    duration: PercentageValues.optional(),
    totalEstimatedCost: core.serialization.property("total_estimated_cost", core.serialization.number().optional()),
    usage: core.serialization.record(core.serialization.string(), core.serialization.number()).optional(),
});

export declare namespace ProjectStatsSummaryItem {
    interface Raw {
        project_id?: string | null;
        feedback_scores?: FeedbackScoreAverage.Raw[] | null;
        duration?: PercentageValues.Raw | null;
        total_estimated_cost?: number | null;
        usage?: Record<string, number> | null;
    }
}
