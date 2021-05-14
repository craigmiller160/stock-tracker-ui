import { createApi } from '@craigmiller160/ajax-api-fp-ts';

export default createApi({
    baseURL: '/stock-tracker/api',
    useCsrf: true,
    // TODO add error handler
    // defaultErrorHandler: ajaxErrorHandler
});
