/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { JsonNode } from "./JsonNode";
import { FeedbackScoreAverage } from "./FeedbackScoreAverage";
import { Comment } from "./Comment";
import { PromptVersionLink } from "./PromptVersionLink";

export const Experiment: core.serialization.ObjectSchema<serializers.Experiment.Raw, OpikApi.Experiment> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        datasetName: core.serialization.property("dataset_name", core.serialization.string()),
        datasetId: core.serialization.property("dataset_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        metadata: JsonNode.optional(),
        feedbackScores: core.serialization.property(
            "feedback_scores",
            core.serialization.list(FeedbackScoreAverage).optional()
        ),
        comments: core.serialization.list(Comment).optional(),
        traceCount: core.serialization.property("trace_count", core.serialization.number().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        lastUpdatedAt: core.serialization.property("last_updated_at", core.serialization.date().optional()),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        lastUpdatedBy: core.serialization.property("last_updated_by", core.serialization.string().optional()),
        promptVersion: core.serialization.property("prompt_version", PromptVersionLink.optional()),
        promptVersions: core.serialization.property(
            "prompt_versions",
            core.serialization.list(PromptVersionLink).optional()
        ),
    });

export declare namespace Experiment {
    interface Raw {
        id?: string | null;
        dataset_name: string;
        dataset_id?: string | null;
        name?: string | null;
        metadata?: JsonNode.Raw | null;
        feedback_scores?: FeedbackScoreAverage.Raw[] | null;
        comments?: Comment.Raw[] | null;
        trace_count?: number | null;
        created_at?: string | null;
        last_updated_at?: string | null;
        created_by?: string | null;
        last_updated_by?: string | null;
        prompt_version?: PromptVersionLink.Raw | null;
        prompt_versions?: PromptVersionLink.Raw[] | null;
    }
}
