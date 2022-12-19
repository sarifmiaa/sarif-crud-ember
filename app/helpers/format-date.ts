import { helper } from '@ember/component/helper';
import { getDayOrdinalSuffix } from 'customerio-app/common/utils/format';
import { DateTime } from 'luxon';

export default helper(function formatDate([timestamp]) {
  const date = DateTime.fromSeconds(Number(timestamp));
  const ordinal = getDayOrdinalSuffix(date.day);

  return date.toFormat(`MMM d'${ordinal}' yyyy, hh:mm a`);
});
