# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .project_stats_summary_item import ProjectStatsSummaryItem
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class ProjectStatsSummary(UniversalBaseModel):
    content: typing.Optional[typing.List[ProjectStatsSummaryItem]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow", frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
