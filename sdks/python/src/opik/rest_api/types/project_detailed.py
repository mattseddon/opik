# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
import datetime as dt
from .feedback_score_average_detailed import FeedbackScoreAverageDetailed
from .percentage_values_detailed import PercentageValuesDetailed
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class ProjectDetailed(UniversalBaseModel):
    id: typing.Optional[str] = None
    name: str
    description: typing.Optional[str] = None
    created_at: typing.Optional[dt.datetime] = None
    created_by: typing.Optional[str] = None
    last_updated_at: typing.Optional[dt.datetime] = None
    last_updated_by: typing.Optional[str] = None
    last_updated_trace_at: typing.Optional[dt.datetime] = None
    feedback_scores: typing.Optional[typing.List[FeedbackScoreAverageDetailed]] = None
    duration: typing.Optional[PercentageValuesDetailed] = None
    total_estimated_cost: typing.Optional[float] = None
    usage: typing.Optional[typing.Dict[str, float]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow", frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
